from lxml import etree
import json


classes_dict = {}
classes_array = []
funcs = []


def find_or_add_class(class_name: str) -> int:
    if class_name not in classes_dict:
        classes_dict[class_name] = len(classes_array)
        classes_array.append(class_name)
    return classes_dict[class_name]


def get_class_name(class_idx: int or None) -> str:
    if class_idx is None:
        return "[ERROR: None]"
    else:
        return classes_array[class_idx]


class Param:
    def __init__(self, element: etree.Element) -> None:
        self.name = element.get('name')
        self.type = find_or_add_class(element.get('type'))
        self.is_ptr = element.get('ptr') == '1'

    def __str__(self) -> str:
        return "{0}: {1}{2}".format(self.name, get_class_name(self.type), "*" if self.is_ptr else "")

    def serialize(self):
        return {
            'name': self.name,
            'type': self.type,
            'is_ptr': self.is_ptr
        }


class Func:
    def __init__(self, element: etree.Element) -> None:
        self.name = element.get('name')
        self.returns = find_or_add_class(element.get('returns'))
        self.returns_ptr = element.get('ptr') == '1'
        self.params = []
        for child in element:
            if child.tag == 'param':
                self.params.append(Param(child))
            elif child.tag == 'description':
                self.description = child.text
            else:
                print('UNKNOWN child tag:', child.tag)
        if '::' in self.name:
            self.of = find_or_add_class(self.name[:self.name.index('::')])
            self.name = self.name[self.name.index('::') + 2:]
            first_param = self.params.pop(0)
            self.of_ptr = first_param.is_ptr
        else:
            self.of = None
            self.of_ptr = False
        if not str.isalnum(self.name[0]) and self.name[0] != '_':
            self.type = 'operator'
            if len(self.params) > 2 or len(self.params) == 0:
                print("OPERATOR WITH", len(self.params), "PARAMS in", self.name)
                exit(1)
        elif str.isupper(self.name[0]) or len(self.params) > 0 or self.of is None:
            self.type = 'method'
        else:
            self.type = 'property'

    def serialize(self):
        return {
            'name': self.name,
            'returns': self.returns,
            'returns_ptr': self.returns_ptr,
            'of': self.of,
            'of_ptr': self.of_ptr,
            'type': self.type,
            'params': list(map(lambda x: x.serialize(), self.params))
        }

    def __str__(self) -> str:
        if self.type == 'operator':
            if len(self.params) == 2:
                param0 = self.params[0]
                param1 = self.params[1]
                return "(op.) {} {} {}: {}".format(
                    get_class_name(param0.type) + ("*" if self.of_ptr else ""),
                    self.name,
                    get_class_name(param1.type) + ("*" if param1.is_ptr else ""),
                    get_class_name(self.returns) + ("*" if self.returns_ptr else "")
                )
            else:
                param0 = self.params[0]
                return "(op.) {} {}: {}".format(
                    self.name,
                    get_class_name(param0.type) + ("*" if self.of_ptr else ""),
                    get_class_name(self.returns) + ("*" if self.returns_ptr else "")
                )
        elif self.type == 'property':
            return "{}::{}: {}".format(
                get_class_name(self.of) + ("*" if self.of_ptr else ""),
                self.name,
                get_class_name(self.returns) + ("*" if self.returns_ptr else "")
            )
        else:
            return "{}{}({}): {}".format(
                "{}::".format(
                    get_class_name(self.of) + ("*" if self.of_ptr else "")
                ) if self.of is not None else "",
                self.name,
                ", ".join(map(lambda p: str(p), self.params)),
                get_class_name(self.returns) + ("*" if self.returns_ptr else "")
            )


parser = etree.XMLParser(remove_blank_text=True)
tree = etree.parse('dump_try.xml', parser=parser)

for func in tree.getroot():
    f = Func(func)
    funcs.append(f)
    print(f)

print('Writing to JSON...')
with open('data.json', 'w') as outfile:
    json.dump({'classes': list(map(lambda c: {"name": c}, classes_array)), 'funcs': list(map(lambda x: x.serialize(), funcs))}, outfile)
