#!/usr/bin/env python
# -*- coding:utf-8 -*-
#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests
import os
# 三个坑
# 1.原js1中第79行的函数不安全,导致运行不了,且它对结果不影响,所以可以删除掉
# 2.原js1中第94行代码会会运行到一个eval函数,里面会运行到一个不存在的变量history而导致报错, 不过可以删掉
# 3.原js1中第96行的代码在检测global变量并循环打印, 没有global就会进入到catch代码里面,不过它不影响结果的输出
# 4.原js1中110行是一个定时器,需要处理
headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://match.yuanrenxue.com/match/1',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    "cookie":"m="
}
ts=os
res = os.popen('node support/p2/2')
code, ts = res.read().strip().split('\n')
print(code)
print(ts)
headers['cookie'] = f"m={code}|{ts}"

#
response = requests.get('http://match.yuanrenxue.com/api/match/2', headers=headers, verify=False)
print(response.text)
