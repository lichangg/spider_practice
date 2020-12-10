import requests

headers = {
    'Connection': 'keep-alive',
    'Content-Length': '0',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    'Accept': '*/*',
    'Origin': 'http://match.yuanrenxue.com',
    'Referer': 'http://match.yuanrenxue.com/match/3',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}
s=requests.session()
response = s.post('http://match.yuanrenxue.com/logo', headers=headers, verify=False)
r2=s.get('http://match.yuanrenxue.com/api/match/3', headers=headers)
print(r2.text)