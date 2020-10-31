from __future__ import annotations

import functools
import json
import os
import sys
from os import listdir
from os.path import isfile, join
from typing import List, Tuple, Optional

from lxml import etree

packs_folder = sys.argv[1]


class Node:
    def __init__(self, _id, _parent_name) -> None:
        super().__init__()
        self.id = _id
        self.parent_name = _parent_name
        self.children = []
        self.parent = None
        self.commands = {}
        self.no_commands = []
        self.methods = {}
        self.properties = {}
        self.default_commands = {}
        self.animations = {}
        self.points = {}
        self.states = {}

    def add_child(self, child):
        self.children.append(child)

    def set_parent(self, parent_node):
        if self.parent:
            print("Parent override in " + self.id)
        else:
            self.parent = parent_node

    def add_property(self, prop, value):
        self.properties[prop] = value

    def add_command(self, command, sticky):
        self.commands[command] = sticky

    def add_no_command(self, no_command):
        self.no_commands.append(no_command)

    def add_method(self, method, params):
        self.methods[method] = params

    def add_default_command(self, target, commands):
        self.default_commands[target] = commands

    def add_point(self, idx, point):
        self.points[idx] = point

    def find(self, id) -> Optional[Node]:
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

    def add_state(self, idx, state):
        self.states[idx] = state

    def add_anim(self, idx, anim):
        self.animations[idx] = anim

    def find_prop(self, prop):
        if prop in self.properties:
            return self.properties[prop]
        elif self.parent:
            return self.parent.find_prop(prop)
        else:
            return None

    def serialize_single(self):
        obj = {
            'properties': self.properties,
            'commands': self.commands,
            'no_commands': self.no_commands,
            'methods': self.methods,
            'def_cmds': self.default_commands,
            'states': self.states,
            'anims': self.animations
        }
        if self.parent:
            obj['parent'] = self.parent_name
        if len(self.points) > 0:
            obj['points'] = self.points
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
                'no_commands': self.no_commands,
                'methods': self.methods,
                'def_cmds': self.default_commands,
                'children': children,
                'states': self.states,
                'points': self.points,
                'anims': self.animations
            }
        }


folder = packs_folder + '/DATA/CLASSES/'
class_files = [f for f in listdir(folder) if isfile(join(folder, f))]
parser = etree.XMLParser(remove_blank_text=True)
nodes = []
for file in class_files:
    tree = etree.parse(folder + "/" + file, parser=parser)
    root = tree.getroot()
    if 'id' in root.attrib:
        node = Node(root.attrib['id'], root.attrib['parent'] if 'parent' in root.attrib else '')
        nodes.append(node)
        if 'entity' in root.attrib and len(root.attrib['entity']) > 0:
            entity_file = packs_folder + root.attrib['entity'].upper()
            if os.path.exists(entity_file):
                tree_entity = etree.parse(entity_file, parser=parser)
                entity_root = tree_entity.getroot()
                states = entity_root.find('states')
                if states is not None:
                    for state_tag in states:
                        state = {'name': state_tag.attrib['name']}
                        if 'anim_idx' in state_tag.attrib and state_tag.attrib['anim_idx'] != '65536':
                            state['anim_idx'] = state_tag.attrib['anim_idx']
                        if 'anim_frame' in state_tag.attrib and state_tag.attrib['anim_frame'] != '65536':
                            state['anim_frame'] = state_tag.attrib['anim_frame']
                        node.add_state(state_tag.attrib['idx'], state)
                anims = entity_root.find('anims')
                if anims is not None:
                    for anim_tag in anims:
                        node.add_anim(anim_tag.attrib['idx'], {
                            'name': anim_tag.attrib['name'],
                            'startstate': anim_tag.attrib['startstate'],
                            'endstate': anim_tag.attrib['endstate'],
                            'duration': anim_tag.attrib['duration']
                        })
                points = entity_root.find('points')
                if points is not None:
                    for point_tag in points:
                        node.add_point(point_tag.attrib['idx'], {
                            'type': point_tag.attrib['type'],
                            'x': point_tag.attrib['x'],
                            'y': point_tag.attrib['y']
                        })
        for properties in root.iter('properties'):
            for key in properties.attrib:
                node.add_property(key, properties.attrib[key])
        for method_tag in root.iter('method'):
            if 'vs' not in method_tag.attrib:
                print("No VS in " + node.id + "/" + method_tag.attrib['sig'])
            else:
                file = method_tag.attrib['vs']
                params = []
                with open(packs_folder + method_tag.attrib['vs'].upper()) as f:
                    line = ""
                    while line == "":
                        line = f.readline().strip()
                    if line.startswith('//'):
                        params = [x.strip().split(' ') for x in line.split(",")[1:]]
                    else:
                        print('File ' + method_tag.attrib['vs'] + ' contains no params signature?')

                node.add_method(method_tag.attrib['sig'], params)
        for defcommand_tag in root.iter('defaultcmd'):
            target = defcommand_tag.attrib['target']
            commands = []
            for command in defcommand_tag.iter('cmd'):
                commands.append({
                    'cmd': command.attrib['name'],
                    'ctrl': 'ctrl' in command.attrib and command.attrib['ctrl'] == '1'
                })
            node.add_default_command(target, commands)
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

folder = packs_folder + "DATA/COMMANDS"
command_files = [f for f in listdir(folder) if isfile(join(folder, f))]
commands = {}
for file in command_files:
    tree = etree.parse(folder + "/" + file, parser=parser)
    rootTree = tree.getroot()
    if rootTree.tag == 'commands':
        for cmd in rootTree.iter('cmd'):
            name = cmd.attrib['name']
            commands[name] = {
                'rollover': cmd.attrib['rollover'] if 'rollover' in cmd.attrib else None,
                'targets': []
            }
            if 'description' in cmd.attrib:
                commands[name]['description'] = cmd.attrib['description']
            for cmdtext in cmd.iter('cmdtext'):
                if 'target' in cmdtext.attrib:
                    commands[name]['targets'].append(cmdtext.attrib['target'])
            for src in cmd.iter('src'):
                if 'obj' in src.attrib:
                    node = root.find(src.attrib['obj'])
                    if node:
                        node.add_command(name, 'sticky' in src.attrib and src.attrib['sticky'] == 'yes')
            for nsrc in cmd.iter('nsrc'):
                if 'obj' in nsrc.attrib:
                    node = root.find(nsrc.attrib['obj'])
                    if node:
                        node.add_no_command(name)


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
    display_name = None
    if 'display_name' in node.properties:
        display_name = node.properties['display_name']
    elif 'display_name_plural' in node.properties:
        display_name = node.properties['display_name_plural']
    if display_name:
        display_name = '<br><span class="display-name">' + display_name + "</span>"
    else:
        display_name = ''
    link = "<a href='class.htm?#" + node.id + "'>" + node.id + "</a>"
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
            "text": link + display_name + "<br><span class='path'>" + parents + "/" + node.id + "</span>",
            "rowspan": functools.reduce(lambda a, b: a + b, map(lambda a: a[0][0][0]["rowspan"], children_rows))
        })
        return returned_rows, longest + 1
    else:
        return [[{
            "depth": parents.count("/"),
            "text": link + display_name + "<br><span class='path'>" + parents + "/" + node.id + "</span>",
            "rowspan": 1
        }]], 1


def write_json(file1, file2):
    dic = {}
    for nod in nodes:
        dic[nod.id] = nod.serialize_single()
    with open(file1, 'w') as outfile:
        json.dump(dic, outfile)
    with open(file2, 'w') as outfile:
        json.dump(commands, outfile)
