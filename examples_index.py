from os import listdir
from os.path import isfile, join, dirname, realpath
import re
import json

dir_path = dirname(realpath(__file__))
examples_folder = join(dir_path, 'dist/examples')
example_files = [f for f in listdir(examples_folder) if f.lower().endswith('.vs') and isfile(join(examples_folder, f))]


def example(folder, file):
    obj = {"file": file}
    with open(join(folder, file), 'r') as f:
        rgx = re.compile("//\\s*([a-z0-9\\s]+)\\s*:\\s*(.+)", re.IGNORECASE)
        while True:
            line = f.readline().strip()
            if not line.startswith("//"):
                break
            if len(line) == 2:
                continue
            match = rgx.fullmatch(line)
            if match:
                obj[match.group(1).lower()] = match.group(2)
            else:
                break
    return obj


examples = [example(examples_folder, f) for f in example_files]


with open(join(examples_folder, 'examples.json'), 'w') as f:
    f.write(json.dumps({"examples": examples}))
