# import os
# print(os.urandom(12).hex())

import json

with open("../secrets.json") as f:
    print(json.loads(f.read())['SECRET_KEY'])
