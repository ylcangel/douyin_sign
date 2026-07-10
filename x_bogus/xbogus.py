#/*
# * Copyright AngelToms
# * SPDX-License-Identifier: Apache-2.0
# */

#/**
# * @Author: AngelToms
# * 还原后的x-bogus算法python版
# */

import hashlib
import random
from arc4 import ARC4

# 自实现rc4
def rc4_bytes(key: bytes, data: bytes) -> bytes:
    S = list(range(256))
    j = 0
    for i in range(256):
        j = (j + S[i] + key[i % len(key)]) % 256
        S[i], S[j] = S[j], S[i]

    i = j = 0
    result = bytearray()
    for byte in data:
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        S[i], S[j] = S[j], S[i]
        k = S[(S[i] + S[j]) % 256]
        result.append(byte ^ k)

    return bytes(result).decode('iso-8859-1') # 保持与 JS charCodeAt 相同的字节值（0–255）

# 调用库实现的rc4
def rc4(key, text):
    arc4 = ARC4(key)
    cipher = arc4.encrypt(text)
    return cipher.decode('iso-8859-1') # 保持与 JS charCodeAt 相同的字节值（0–255）

qlist = {
            'bogusIndex': 0x0,
            'msNew_tokenList': [],
            'moveList': [],
            'clickList': [],
            'keyboardList': [],
            'activeState': [],
            'aidList': []
        }

ucode = {
                'ubcode': 0 # 可以作为默认
        }

def action_valid():
    bits = [random.getrandbits(1) for _ in range(8)]
    ucode['ubcode'] = bits[0] | bits[1] | bits[2] | bits[3] | bits[4] | bits[5] | bits[6] | bits[7]
    ucode['ubcode'] &= ~126
    qlist['envcode'] = 1 # 跟踪时为1，也可能只能为0

# 核心算法
# 参数 protocol=1, revent_flag=false arg3=0, in_salt=null
# 仅data是选取的uri的md5值
def xbogus_fun(protocol, revent_flag, arg3, in_salt, data):
    action_valid()

    in_salt = in_salt or ''
    in_salt_md5 = hashlib.md5(in_salt.encode('utf-8')).digest()

    if data is None:
        data = '00000000000000000000000000000000'.encode()

    uArray = bytearray(9)

    # 测试了1000次，发现x1的值只能是64或者80
    pad_string = (protocol << 6) | (revent_flag << 5) | ((int(random.random() * 100) & 1) << 4) | 0

    qlist['bogusIndex'] += 1
    bogusIndex = qlist['bogusIndex'] & 0x3f  # 最多64种可能 [0 - 63]
    uArray[0] = (arg3 << 6) | bogusIndex

    # 实际实现代码必须去掉命中情况
    # {directSign: false, consistent: false, location: false, switch: false, 
    #    dom: false, debugger: false, node: false, phantom: false, 
    #    webdriver: false, incognito: false, hook: false, test: true}
    # 即 qlist['envcode'] &= ~0x7ff; // 即qlist['envcode']只能为0
    # 但由于调试时param_sw.test好像直接设置的1，因此qlist['envcode']大概率为1，跟踪源码时为1
    # 可以直接取反 qlist['envcode'] &= ~0x7fe;
    uArray[1] = (qlist['envcode'] >> 8) & 255  # 高8位命中
    uArray[2] = qlist['envcode'] & 255         # 低8位命中
    uArray[3] = ucode['ubcode']                # 来源于action_valid, 必须为0, 否则即命中； 前三位是检测数据(还谈不上风控数据)
    in_salt_md5_md5_array = hashlib.md5(in_salt_md5).digest()
    uArray[4] = in_salt_md5_md5_array[14]  # 固定不变
    uArray[5] = in_salt_md5_md5_array[15]  # 固定不变
    data_md5_array = hashlib.md5(data).digest() # 实际数据
    uArray[6] = data_md5_array[14]  # 仅这两位有效
    uArray[7] = data_md5_array[15]  # 仅这两位有效
    uArray[8] = int(random.random() * 255) & 255  # 最多256种可能 [0 - 255], 应该是作为padding使用，无意义

    #   第1位是索引(0-63)，第2，3，4位是测试数据(谈不上风控数据)，第5，6位数据固定，认为是padding数据，第7，8位是有效位，是实际的校验位
    #   第9位为无效数据，padding位
    return xcrypto(pad_string, uArray)

# xcrypto算法只是把上面的数据uArray进行了再次封装,变成：
# base64(| magic(1位) | key(1位) | rc4(data(9位) + data_hash(1位))))  ==> 最后由12位生成16位数据
def xcrypto(pad_string, ostring):
    length = len(ostring)
    # 用bytearray代替ArrayBuffer + Uint8Array
    uarray = bytearray(length + 1)
    ieor = 0

    for i in range(length):
        uarray[i] = ostring[i]
        ieor ^= ostring[i]

    uarray[length] = ieor
    # 生成随机 key，0-255整数
    random_key = random.randint(0, 255)
    # 下面两行代码任意一行均可以
    # crypted_text = rc4_bytes(bytes([random_key]), bytes(uarray))
    crypted_text = rc4(bytes([random_key]), bytes(uarray))

    # 构造返回字符串
    result = ''
    result += chr(pad_string) # magic
    result += chr(random_key) # key
    result += crypted_text # data

    return dy_base64(result, 's1')


def dy_base64(data: str, mindex: str, pad: str = "=") -> str:
    # 编码字母表
    letter0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    letter1 = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="
    letter2 = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="
    letter3 = "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe"
    letter4 = "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe"

    # 构造映射表
    map_table = {
        "s0": letter0,
        "s1": letter1,
        "s2": letter2,
        "s3": letter3,
        "s4": letter4,
    }

    ua_table = map_table[mindex]
    ua_encode = ""

    data_bytes = data.encode('iso-8859-1')  # 保持与 JS charCodeAt 相同的字节值（0–255）

    i = 0
    while i < len(data_bytes):
        c1 = data_bytes[i]
        i += 1

        c2 = data_bytes[i] if i < len(data_bytes) else None
        i += 1

        c3 = data_bytes[i] if i < len(data_bytes) else None
        i += 1

        b1 = (c1 & 0xff) << 16
        b2 = ((c2 & 0xff) << 8) if c2 is not None else 0
        b3 = (c3 & 0xff) if c3 is not None else 0

        combined = b1 | b2 | b3

        ch1 = (combined >> 18) & 0x3f
        ch2 = (combined >> 12) & 0x3f
        ch3 = (combined >> 6) & 0x3f
        ch4 = combined & 0x3f

        ua_encode += ua_table[ch1]
        ua_encode += ua_table[ch2]

        if c2 is not None:
            ua_encode += ua_table[ch3]
        else:
            ua_encode += pad

        if c3 is not None:
            ua_encode += ua_table[ch4]
        else:
            ua_encode += pad

    return ua_encode



