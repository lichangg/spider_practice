#!/usr/bin/env python
# -*- coding:utf-8 -*-
import os
import re
import requests
# 问题1. 怎么发现反混淆出了错误
# 问题2. 怎么发现对于window,global的检测
with open('./support/p9/2.js', 'r', encoding='utf-8') as f:
    script1 = f.read()

url = 'http://match.yuanrenxue.com/match/9'
resp=requests.get(url)
sessionid = re.findall('(?<=sessionid=).+?(?=;)', resp.headers['Set-Cookie'])[0]
script2 = re.findall('(?<=<script type="application/javascript">).+?(?=</script>)', resp.text)[0].replace("global", "adsgag")

with open('./support/p9/3.js', 'w', encoding='utf-8') as f:
    f.write(script1 + '\n')
    f.write(script2 + '\n')
    f.write('console.log(document.cookie);')
    f.write('process.exit();')
a=os.popen('node ./support/p9/3')
a=a.read()
a = a.replace('\n','').replace('\n', '').replace('; path=/', '')
print(a)
print(sessionid)
headers = {
    'cookie': 'sessionid=' + sessionid + '; ' + a,
    'User-Agent': 'yuanrenxue.project'
}
url = 'http://match.yuanrenxue.com/api/match/9?page=3'

res = requests.get(url, headers=headers)
print(res.text)


def main():
    with open('./support/p9/2.js', 'r', encoding='utf-8') as f:
        script1 = f.read()
    url = 'http://match.yuanrenxue.com/match/9'
    response = requests.get(url)
    sessionid = re.findall('(?<=sessionid=).+?(?=;)', response.headers['Set-Cookie'])[0]
    script2 = re.findall('(?<=<script type="application/javascript">).+?(?=</script>)', response.text)[0].replace(
        "global", 'yuge')
    with open('./support/p9/3.js', 'w', encoding='utf-8') as f:
        f.write(script1 + '\n')
        f.write(script2 + '\n')
        f.write('console.log(document.cookie);')
        f.write('process.exit();')
    nodejs = os.popen('node ./support/p9/3')
    cookie = nodejs.read().replace('\n', '').replace('; path=/', '')
    nodejs.close()
    url = 'http://match.yuanrenxue.com/api/match/9'
    print(cookie)
    print(sessionid)
    headers = {
        'cookie': 'sessionid=' + sessionid + '; ' + cookie,
        'User-Agent': 'yuanrenxue.project'
    }
    response = requests.get(url, headers=headers).json()
    print(response)

# if __name__ == '__main__':
#     main()