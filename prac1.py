#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests
import os

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://match.yuanrenxue.com/match/1',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}
ts=os
code = os.popen('node support/p1/p102')

# params = (
#     ('m', f'{code}\u4E28{ts}'),
# )
#
# response = requests.get('http://match.yuanrenxue.com/api/match/1', headers=headers, params=params, , verify=False)
# print(response.text)
