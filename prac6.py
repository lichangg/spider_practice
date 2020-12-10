import requests
import time
import os
from urllib import parse


def main():
    sums = 0
    for page in range(1, 6):
        t = str(int(time.time())) + '000'
        q = str(page) + '-' + t + '|'
        nodejs = os.popen('node 06 ' + t + ' ' + str(page))
        m = nodejs.read().replace('\n', '')
        nodejs.close()
        data = {
            'page': page,
            'm': m,
            'q': q
        }
        url = 'http://match.yuanrenxue.com/api/match/6?' + parse.urlencode(data)
        headers = {
            'User-Agent': 'yuanrenxue.project'
        }
        response = requests.get(url, headers=headers).json()
        print(response)
        for each in response['data']:
            sums += each['value'] * 24
    print(sums)
    # 总金额: 6883344


if __name__ == '__main__':
    main()