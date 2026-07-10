#/*
# * Copyright AngelToms
# * SPDX-License-Identifier: Apache-2.0
# */

#/**
# * @Author: AngelToms
# * 还原后的x-bogus算法python版
# */

from urllib import parse
from urllib.parse import parse_qsl

import hashlib
from xbogus import xbogus_fun

if __name__ == "__main__":
    for i in range(0, 100):
        oparams = "live_id=1,aid=6383,version_code=180800,webcast_sdk_version=1.0.14-beta.0,room_id=7496375252281215780,sub_room_id=,sub_channel_id=,did_rule=3,user_unique_id=7482403095261316617,device_platform=web,device_type=,ac=,identity=audience"
        sign_key_md5 = hashlib.md5(oparams.encode()).digest()
        sign = xbogus_fun(1, False, 0, None, sign_key_md5)
        print ("sign: ", sign)

