import base64

import requests
from fontTools.ttLib import TTFont
url = 'http://match.yuanrenxue.com/api/match/7?page=1'
response = requests.get(url).json()
print(response)
woffb64 = response['woff']
with open('./support/p7/07.woff', 'wb') as f:
    f.write(base64.b64decode(woffb64.encode()))
TTFont('./support/p7/07.woff').saveXML('./support/p7/07.xml')