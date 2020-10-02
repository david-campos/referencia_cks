import functools
import json
import sys
from os import listdir
from os.path import isfile, join
from typing import List, Tuple

from lxml import etree


class Node:
    def __init__(self, _id, _parent_name) -> None:
        super().__init__()
        self.id = _id
        self.parent_name = _parent_name
        self.children = []
        self.parent = None
        self.commands = {}
        self.properties = {}

    def add_child(self, child):
        self.children.append(child)

    def set_parent(self, parent_node):
        if self.parent:
            print("Parent override in " + self.id)
        else:
            self.parent = parent_node

    def add_property(self, prop, value):
        self.properties[prop] = value

    def add_command(self, command, params):
        self.commands[command] = params

    def find(self, id):
        if len(self.children) > 0:
            for c in self.children:
                if c.id == id:
                    return c
                else:
                    found = c.find(id)
                    if found:
                        return found
        return None

    def commands_with_inherited(self, exclude_ids=None):
        if exclude_ids is None:
            exclude_ids = []
        my_commands = {}
        for key in self.commands:
            if key not in exclude_ids:
                my_commands[key] = self.commands[key]
        commands = {self.id: my_commands}
        if self.parent:
            should_exclude = exclude_ids + list(self.commands.keys())
            commands = {**commands, **self.parent.commands_with_inherited(should_exclude)}
        return commands

    def properties_with_inherited(self, exclude_ids=None):
        if exclude_ids is None:
            exclude_ids = []
        my_properties = {}
        propertis = {}
        for key in self.properties:
            if key not in exclude_ids:
                my_properties[key] = self.properties[key]
        if len(my_properties) > 0:
            propertis[self.id] = my_properties
        if self.parent:
            should_exclude = exclude_ids + list(self.properties.keys())
            propertis = {**propertis, **self.parent.properties_with_inherited(should_exclude)}
        return propertis

    def serialize_single(self):
        obj = {
            'properties': self.properties,
            'commands': self.commands
        }
        if self.parent:
            obj['parent'] = self.parent_name
        return obj

    def serialize_recursive(self):
        children = {}
        for child in self.children:
            serialised = child.serialize()
            serialised_k = list(serialised.keys())
            children[serialised_k[0]] = serialised[serialised_k[0]]
        return {
            self.id: {
                'properties': self.properties,
                'commands': self.commands,
                'children': children
            }
        }


folder = sys.argv[1]
class_files = [f for f in listdir(folder) if isfile(join(folder, f))]
parser = etree.XMLParser(remove_blank_text=True)
nodes = []
for file in class_files:
    tree = etree.parse(folder + "/" + file, parser=parser)
    root = tree.getroot()
    if 'id' in root.attrib:
        node = Node(root.attrib['id'], root.attrib['parent'] if 'parent' in root.attrib else '')
        nodes.append(node)
        for properties in root.iter('properties'):
            for key in properties.attrib:
                node.add_property(key, properties.attrib[key])
        for command_tag in root.iter('method'):
            if 'vs' not in command_tag.attrib:
                print("No VS in " + node.id + "/" + command_tag.attrib['sig'])
            else:
                file = command_tag.attrib['vs']
                params = []
                with open(folder + "/../../" + command_tag.attrib['vs'].upper()) as f:
                    line = ""
                    while line == "":
                        line = f.readline().strip()
                    if line.startswith('//'):
                        params = [x.strip().split(' ') for x in line.split(",")[1:]]
                    else:
                        print('File ' + command_tag.attrib['vs'] + ' contains no params signature?')

                node.add_command(command_tag.attrib['sig'], params)
    else:
        print("NO ID! " + file)

root = None
for node in nodes:
    if node.id == "Object":
        root = node
    if node.parent_name != "":
        for parent in nodes:
            if parent.id == node.parent_name:
                parent.add_child(node)
                node.set_parent(parent)
                break


def print_rows(the_rows: List[List[dict]]):
    return "\n".join(map(lambda r: "<tr>{}</tr>".format(
        " ".join(map(lambda td: "<td rowspan=\"{}\" colspan=\"{}\" data-depth=\"{}\">{}</td>".format(
            td['rowspan'] if "rowspan" in td else "1",
            td['colspan'] if "colspan" in td else "1",
            td['depth'],
            td['text']
        ), r))
    ), the_rows))


def show(node):
    the_rows = rows(node, "")[0]
    print("<table><tbody>{}</tbody></table>".format(print_rows(the_rows)))


def rows(node, parents) -> Tuple[List[List[dict]], int]:
    children_rows: List[Tuple[List[List[dict]], int]] = []
    for c in node.children:
        children_rows.append(rows(c, parents + "/" + node.id))
    if len(children_rows) > 0:
        longest = functools.reduce(lambda a, b: a if a >= b else b, map(lambda r: r[1], children_rows))
        returned_rows: List[List[dict]] = []
        for crows in children_rows:
            if crows[1] < longest:
                for row in crows[0]:
                    last = row[len(row) - 1]
                    last['colspan'] = (last['colspan'] if 'colspan' in last else 1) + (longest - crows[1])
            returned_rows += crows[0]
        returned_rows[0].insert(0, {
            "depth": parents.count("/"),
            "text": node.id + "<br><span class='path'>" + parents + "/" + node.id + "</span>",
            "rowspan": functools.reduce(lambda a, b: a + b, map(lambda a: a[0][0][0]["rowspan"], children_rows))
        })
        return returned_rows, longest + 1
    else:
        return [[{
            "depth": parents.count("/"),
            "text": node.id + "<br><span class='path'>" + parents + "/" + node.id + "</span>",
            "rowspan": 1
        }]], 1


def write_json(file):
    dic = {}
    for nod in nodes:
        dic[nod.id] = nod.serialize_single()
    with open(file, 'w') as outfile:
        json.dump(dic, outfile)
