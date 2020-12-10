#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests

cookies = {
    'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1607412604',
    'no-alert': 'true',
    'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1607412604,1607419284',
    'mz': 'TW96aWxsYSxOZXRzY2FwZSw1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNixbb2JqZWN0IE5ldHdvcmtJbmZvcm1hdGlvbl0sdHJ1ZSwsW29iamVjdCBHZW9sb2NhdGlvbl0sNCx6aC1DTix6aC1DTiwwLFtvYmplY3QgTWVkaWFDYXBhYmlsaXRpZXNdLFtvYmplY3QgTWVkaWFTZXNzaW9uXSxbb2JqZWN0IE1pbWVUeXBlQXJyYXldLHRydWUsW29iamVjdCBQZXJtaXNzaW9uc10sV2luMzIsW29iamVjdCBQbHVnaW5BcnJheV0sR2Vja28sMjAwMzAxMDcsW29iamVjdCBVc2VyQWN0aXZhdGlvbl0sTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNixHb29nbGUgSW5jLiwsW29iamVjdCBEZXByZWNhdGVkU3RvcmFnZVF1b3RhXSxbb2JqZWN0IERlcHJlY2F0ZWRTdG9yYWdlUXVvdGFdLDEwNDAsMCwwLDE5MjAsMjQsMTA4MCxbb2JqZWN0IFNjcmVlbk9yaWVudGF0aW9uXSwyNCwxOTIwLFtvYmplY3QgRE9NU3RyaW5nTGlzdF0sZnVuY3Rpb24gYXNzaWduKCkgeyBbbmF0aXZlIGNvZGVdIH0sLG1hdGNoLnl1YW5yZW54dWUuY29tLG1hdGNoLnl1YW5yZW54dWUuY29tLGh0dHA6Ly9tYXRjaC55dWFucmVueHVlLmNvbS9tYXRjaC8xNCxodHRwOi8vbWF0Y2gueXVhbnJlbnh1ZS5jb20sL21hdGNoLzE0LCxodHRwOixmdW5jdGlvbiByZWxvYWQoKSB7IFtuYXRpdmUgY29kZV0gfSxmdW5jdGlvbiByZXBsYWNlKCkgeyBbbmF0aXZlIGNvZGVdIH0sLGZ1bmN0aW9uIHRvU3RyaW5nKCkgeyBbbmF0aXZlIGNvZGVdIH0sZnVuY3Rpb24gdmFsdWVPZigpIHsgW25hdGl2ZSBjb2RlXSB9',
    'sessionid': 'z1789vgh16md9zpqbvylzngrojyoyp2q',
    'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1607581060',
    'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1607581066',
    'm': 'fc0e90d3364f03c0b9be89865d252a4d|1607581075000|12860648600000|2',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://match.yuanrenxue.com/match/14',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

params = (
    ('page', '2'),
)

response = requests.get('http://match.yuanrenxue.com/api/match/14', headers=headers, params=params, cookies=cookies, verify=False)
print(response.text)
#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('http://match.yuanrenxue.com/api/match/14?page=2', headers=headers, cookies=cookies, verify=False)
