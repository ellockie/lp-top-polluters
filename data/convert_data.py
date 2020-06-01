import pandas as pd

df = pd.read_json(r'top20_polluters.json', encoding="utf8")
export_csv = df.to_csv(r'top20_polluters_utf8.csv', index = None, header=True, encoding="utf8")




'''
# import json
with open("top20_polluters.json", "r", encoding="utf8") as read_file:
    polluters = json.load(read_file)
print(polluters)

keys = set()
for polluter in polluters:
    for key in polluter.keys():
        keys.add(key)

for key in keys:
    print(key)
    rowstring = ""
    for polluter in polluters:
        if key in polluter.keys():
            rowstring[polluter[key]]
        else:
            print("-");
'''
