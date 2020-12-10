#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests

cookies = {
    'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1607046990',
    'no-alert': 'true',
    'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1607046990,1607047192',
    'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1607052228',
    'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1607305589',
    'm': '376c38a5447a7bb86742c86b4b465bbc',
    'RM4hZBv0dDon443M': 'cjYeuCrm0jkJy6gnls+tRv5aDnwmsdiIbDOowBn/WlU6fNPFgSiEiOi+dj6TanCwh397kMUKxGobHnfuKETz59P/Ifpr/QbNU9BqgNFspItFl0U5rdwjVUkHgJpdEPoohadbPZW8Tc09R1pu3nqV2fAq5MNrNc2MxjpHTLdTzwHjnQO7xYIz3CNrDwqsL0glBzlECmdjmokbH2B++2cl+WZNdWXpHbw0JJpnQv7V9lo=',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://match.yuanrenxue.com/match/5',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

params = (
    ('m', '1607305612752'),
    ('f', '1607305611000'),
)

response = requests.get('http://match.yuanrenxue.com/api/match/5', headers=headers, params=params, cookies=cookies, verify=False)
print(response.text)
#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('http://match.yuanrenxue.com/api/match/5?m=1607305612752&f=1607305611000', headers=headers, cookies=cookies, verify=False)
db20a7bec68f652711fe1aca06fbb070
db20a7bec68f652711fe1aca06fbb070