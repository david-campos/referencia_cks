import functools
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

    def add_child(self, child):
        self.children.append(child)

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


folder = sys.argv[1]
class_files = [f for f in listdir(folder) if isfile(join(folder, f))]
parser = etree.XMLParser(remove_blank_text=True)
nodes = []
for file in class_files:
    tree = etree.parse(folder + "/" + file, parser=parser)
    root = tree.getroot()
    if 'id' in root.attrib:
        nodes.append(Node(root.attrib['id'], root.attrib['parent'] if 'parent' in root.attrib else ''))
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
