## a_bogus
    抖音web a_bogus算法，对应版本V 1.0.1.19-fix.01， 本实现只提供js版本，其他语言实现请参照js代码自行实现，
	如存在纰漏，请自行修改！本代码已经删除了大量无关的代码（录课依赖，环境检测等），但保留了去混淆后的整个vm代码和解密vm payload代码，
	更详细的逻辑，请参考下面提供的视频链接观看完整内容。
	
### source
 - a_bogus/decode_vmcode.py python实现的解密整个vm payload代码
 - a_bogus/sm3.js 和ab关联的sm3算法
 - a_bogus/utils.js ab算法js实现
 - a_bogus/vm_decode.js 去混淆后的整个vm包含解释器代码
 - a_bogus/env_test.js 部分环境检测代码
 
## x_bogus
	抖音web直播间通讯sign算法实现
	
### source
 - x_bogus/xbogus.js 摘取去混淆后的webmsdk关于x-bogus算法关联的js实现代码，完全满足了解技术细节和学习目的
 - x_bogus/xbogus.py py实现的x-bogus算法
 - x_bogus/test_xbogus.py 模拟调用python实现的x-bougs算法


## 相关视频：
    https://space.bilibili.com/1332269071
    该视频集，提供完整逆向课程（ab算法，其他算法），同时后续会提供app相关课程
	
## 关于作者

网络ID: **AngelToms** <br />
邮箱: ylcangel@gmail.com <br />

B站: https://space.bilibili.com/1332269071<br />
github: https://github.com/ylcangel<br />
csdn: https://blog.csdn.net/ylcangel,已不更新<br />

## 声明
    请尊重作者的辛勤成果， 尊重开源，代码开源目的仅用于学习和技术交流，请勿用于其他目的，否则后果自负！