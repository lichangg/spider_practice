#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests
import re
import base64
import os
import json
from tencentcloud.common import credential
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.common.profile.http_profile import HttpProfile
from tencentcloud.ocr.v20181119 import ocr_client, models
from PIL import Image
from collections import Counter

clicklist = [0, 10, 20, 300, 310, 320, 600, 610, 620]


def main():
    numberanswer = []
    page = 1
    print('正在获取第' + str(page) + '页验证码')
    url = 'http://match.yuanrenxue.com/api/match/8_verify'
    response = requests.get(url)
    # sessionid = re.findall('(?<=sessionid=).+?(?=;)', response.headers['Set-Cookie'])[0]
    response = response.json()['html']
    divs = re.findall('(?<=请依次点击).+<br>', response)[0]
    words = re.findall('[\u4e00-\u9fa5]', divs)
    print('需要依次点击的文字')
    print(words)
    img = re.findall('(?<=<img src="data:image/jpeg;base64,).+?(?=")', response)[0]
    print('正在处理图片')
    with open('08.png', 'wb') as f:
        f.write(base64.b64decode(img.encode()))

    image = Image.open('08.png').convert("RGB")
    width, height = image.size
    rgblst = []
    lesslist = []
    morelist = []
    linelist = []
    # 去除噪点影响
    for y in range(height):
        for x in range(width):
            rgblst.append(image.getpixel((x, y)))
    for rgb, number in Counter(rgblst).most_common()[2:]:
        if number < 500:
            lesslist.append(rgb)
        else:
            morelist.append(rgb)
#
#     # 校验颜色区间阀值
    for rgb in morelist:
        xlist = []
        ylist = []
        for y in range(height):
            for x in range(width):
                if rgb == image.getpixel((x, y)):
                    xlist.append(x)
                    ylist.append(y)
        xlist.sort()
        ylist.sort()
        if (xlist[-1] - xlist[0]) > 110:
            linelist.append(rgb)
        if (ylist[-1] - ylist[0]) > 110:
            linelist.append(rgb)
        if xlist[0] < 80 and xlist[-1] > 120:
            linelist.append(rgb)
        if xlist[0] < 180 and xlist[-1] > 220:
            linelist.append(rgb)
        if ylist[0] < 80 and ylist[-1] > 120:
            linelist.append(rgb)
        if ylist[0] < 180 and ylist[-1] > 220:
            linelist.append(rgb)



    # 去除背景色影响
    counter = Counter(rgblst).most_common(2)
    f1 = counter[0][0]
    f2 = counter[1][0]
    image2 = Image.new("RGB", (width, height))
    for y in range(height):
        for x in range(width):
            if image.getpixel((x, y)) == f1 or image.getpixel((x, y)) == f2:
                image2.putpixel((x, y), (255, 255, 255))
            elif image.getpixel((x, y)) in lesslist:
                image2.putpixel((x, y), (255, 255, 255))
            elif image.getpixel((x, y)) in linelist:
                image2.putpixel((x, y), (255, 255, 255))
            else:
                image2.putpixel((x, y), image.getpixel((x, y)))

    rgblist = []
    # 最后去除前面遗漏的线条
    for y in range(height):
        for x in range(width):
            rgb = image2.getpixel((x, y))
            if not rgb in rgblist:
                rgblist.append(rgb)

    def contrast1(zhongrgb, bianrgb):
        for each in bianrgb:
            if zhongrgb != each:
                return False
        return True

    if len(rgblist) > 10:
        linelist = []
        for rgb in rgblist:
            if rgb != (255, 255, 255):
                allnumber = 0
                nonumber = 0
                for y in range(height):
                    for x in range(width):
                        if 0 < x < (width - 1) and 0 < y < (height - 1):
                            zhongrgb = image2.getpixel((x, y))
                            if zhongrgb == rgb:
                                bianrgb = [
                                    image2.getpixel((x - 1, y - 1)), image2.getpixel((x, y - 1)),
                                    image2.getpixel((x + 1, y - 1)),
                                    image2.getpixel((x - 1, y)), image2.getpixel((x + 1, y)),
                                    image2.getpixel((x - 1, y + 1)), image2.getpixel((x, y + 1)),
                                    image2.getpixel((x + 1, y + 1))
                                ]
                                if contrast1(zhongrgb, bianrgb):
                                    allnumber += 1
                                else:
                                    nonumber += 1
                if (allnumber / (allnumber + nonumber)) > 0.5:
                    linelist.append(rgb)
        image3 = Image.new("RGB", (width, height))
        for y in range(height):
            for x in range(width):
                if image2.getpixel((x, y)) in linelist:
                    image3.putpixel((x, y), (255, 255, 255))
                else:
                    image3.putpixel((x, y), image2.getpixel((x, y)))
    else:
        image3 = image2

    # def contrast2(zhongrgb, bianrgb):
    #     rgb, number = Counter(bianrgb).most_common(1)[0]
    #     if number >= 7 and rgb != zhongrgb:
    #         return True
    #     else:
    #         return False

    # 首次增强字体
    # for i in range(5):
    #     image4 = Image.new("RGB", (width, height))
    #     for y in range(height):
    #         for x in range(width):
    #             if 0 < x < (width - 1) and 0 < y < (height - 1):
    #                 zhongrgb = image3.getpixel((x, y))
    #                 bianrgb = [
    #                     image3.getpixel((x - 1, y - 1)), image3.getpixel((x, y - 1)),
    #                     image3.getpixel((x + 1, y - 1)),
    #                     image3.getpixel((x - 1, y)), image3.getpixel((x + 1, y)),
    #                     image3.getpixel((x - 1, y + 1)), image3.getpixel((x, y + 1)),
    #                     image3.getpixel((x + 1, y + 1))
    #                 ]
    #                 if contrast2(zhongrgb, bianrgb):
    #                     image4.putpixel((x, y), Counter(bianrgb).most_common(1)[0][0])
    #                 else:
    #                     image4.putpixel((x, y), zhongrgb)
    #             else:
    #                 image4.putpixel((x, y), image3.getpixel((x, y)))
    #     image4.save('08' + str(i) + '.png')
    #     image3 = image4

    # 二值化
    image4 = Image.new("RGB", (width, height))
    for y in range(height):
        for x in range(width):
            rgb = image3.getpixel((x, y))
            if rgb == (255, 255, 255):
                image4.putpixel((x, y), (255, 255, 255))
            else:
                image4.putpixel((x, y), (0, 0, 0))
    image4.save('08.png')

    print('正在识别图片')
    # 腾讯云
    with open('08.png', 'rb') as f:
        img = base64.b64encode(f.read()).decode()

    cred = credential.Credential("", "")  # 填写自己的帐号信息
    httpProfile = HttpProfile()
    httpProfile.endpoint = "ocr.tencentcloudapi.com"
    clientProfile = ClientProfile()
    clientProfile.httpProfile = httpProfile
    client = ocr_client.OcrClient(cred, "ap-beijing", clientProfile)
    req = models.GeneralHandwritingOCRRequest()
    params = {"ImageBase64": img}
    req.from_json_string(json.dumps(params))
    response = json.loads(client.GeneralHandwritingOCR(req).to_json_string())
    print(response)
    wordlist = []
    # for each in response['TextDetections']:
    #     wordlist += list(each['DetectedText'])
    # if len(wordlist) == 9:
    #     print('识别成功')
    #     print(wordlist)
    #     answer = ''
    #     for word in words:
    #         if word in wordlist:
    #             answer += str(clicklist[wordlist.index(word)]) + '|'
    #         else:
    #             print('无法找到与 ' + word + ' 对应的文字')
    #             print('重新获取')
    #             raise ()
    #     print('识别答案成功')
    #     print(answer)
    #     url = 'http://match.yuanrenxue.com/api/match/8?page=' + str(page) + '&answer=' + answer
    #     headers = {
    #         'cookie': 'sessionid=' + sessionid
    #     }
    #     response = requests.get(url, headers=headers).json()
    #     print(response)
    #     for each in response['data']:
    #         numberanswer.append(each['value'])
    #     break
    # else:
    #     print('识别失败')
    #     print('重新获取')
#
# # 请求完成，开始统计
# answer = Counter(numberanswer).most_common(1)[0][0]
# print(answer)
# # 众数：7453
#
# # 删除缓存
# os.remove('08.png')


if __name__ == '__main__':
    main()