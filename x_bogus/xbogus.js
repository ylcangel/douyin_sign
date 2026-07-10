        
/*
 * Copyright AngelToms
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @Author: AngelToms
 * x-bogus算法去混淆后的部分js实现
 * 这里不是全部代码，给出的只是核心代码去混淆后的样子，整个算法是通过虚拟机间接调用的
 * 这些代码足以让你看清x-bogus的本来面目，足以完成技术学习和算法研究
 */


// 这段代码的作用是构建了两个数组：一个是用于十六进制编码的映射表（encode_array），一个是用于十六进制解码的反查表（decode_array）。
//  可用于加密/编码算法、调试输出、二进制转字符串等场景 
baseChar /**_0x100715 */ = '0123456789abcdef'['split'](''), encode_array = [], // 字节数据转 hex 字符串
//  decode_array 用于hex 字符串转回字节值
decode_array = [], i = 0; i < 256; i++)
encode_array[i] = baseChar[i >> 4 & 15] + baseChar[15 & i],
// 对应字符 '0' ~ '9' 的 ASCII 编码为 48~57
i < 16 && (i < 10 ? decode_array[48 + i] = i :
// 对应字符 'a' ~ 'f' 的 ASCII 编码为 97~102
decode_array[87 + i] = i);

var encode_code /**_0x55de18*/ = function (str /**_0x33a277*/) {
    // str.length()
    for (var last = str['length'], r = '', i = 0; i < last;)
        r += encode_array[str[i++]];
    return r;
},
decode_code /**_0x655940*/ = function (str/**_0x177456*/) {
    for (var len = str['length'] >> 1, last = len << 1, uArray = new Uint8Array(len), i = 0, codeIndex = 0; codeIndex < last;)
        uArray[i++] = decode_array[str['charCodeAt'](codeIndex++)] << 4 | decode_array[str['charCodeAt'](codeIndex++)];
    return uArray;
}, code_op /**_0x42e709*/ = {
    'encode': encode_code,
    'decode': decode_code
}, object_window /**_0x1e7721*/ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : 'undefined' != typeof self ? self : {};
// 主要做一些浏览器相关"环境检测"， 是否命中，最后更新qlist['envcode']
function risk_valid() /**_0x5863d1 */ { // xentry
    // searchTable(0x21c)
    // 484e4f4a403f524300341b3e336a785800000000dbd5951f000001b50114000111010012000000254700070014000145001b1101001200000125470007011400014500090211010143001400010d010e0001010e0002010e00031100010e0004010e0005010e0006010e0007010e0008010e0009010e000a010e000b000e000c1400020211010243001100021500051100021200053247005c021101031100024301490211010411000243014902110105430011000215000702110106430011000215000802110107430011000215000902110108430011000215000b0211010943001100021500030211010a4300110002150002030014000311000303012f170003354911000311000212000b03012b2f170003354911000311000212000a03022b2f170003354911000311000212000903032b2f170003354911000311000212000803042b2f170003354911000311000212000703052b2f17000335491100031100020700061303062b2f170003354911000311000212000503072b2f17000335491100031100020700041303082b2f170003354911000311000212000303092b2f1700033549110003110002120002030a2b2f170003354911010b12000d1100032f11010b07000d354911000242000e0e547b6a796a66587c627f686344650a6f62796e687f58626c650a6864657862787f6e657f086764686a7f62646506787c627f6863036f6466086f6e697e6c6c6e790465646f6e077b636a657f6466097c6e696f79627d6e7909626568646c65627f640463646460047f6e787f076e657d68646f6e
    return entry(searchTable(0x21c), {
        get 0x0() {
            return revent;
        },
        get 0x1() {
            return is_byted_param_sw;
        },
        get 0x2() {
            return xentry2;
        },
        get 0x3() {
            return xentry3;
        },
        get 0x4() {
            return xentry4;
        },
        get 0x5() {
            return xentry5;
        },
        get 0x6() {
            return xentry6;
        },
        get 0x7() {
            return xentry7;
        },
        get 0x8() {
            return xentry8;
        },
        get 0x9() {
            return xentry9;
        },
        get 0xa() {
            return xentry10;
        },
        get 0xb() {
            return qlist;
        },
        0xc: arguments
    }, this);
}

/**
 * 是一个 客户端行为验证函数，目的是：根据用户行为（如触摸事件、键盘事件等）计算出一个多维行为“指纹值”，
 * 返回一个 3 位的 base-32 编码字符串，用于上传给服务器验证客户端真实性。它是典型的反爬虫 / 反模拟操作代码，
 * 常出现在 Web 安全 SDK、滑块验证系统、广告防刷、风控模块等中。
 */
function action_valid() /**_0x26d461 */ {
    var is_touch_device = false, ubcode_v = 0; // 必须为0，否则命中
    try { // 判断是否支持 TouchEvent
        document && document['createEvent'] && (document['createEvent']('TouchEvent'), 
        is_touch_device = true);
    } catch (ex) { }
    // 返回 [平均速度, 标准差]
    // 如果触摸轨迹很快（平均速度 > 50），被认为是“滑动太快”→ kMoveFast
    var move_speed = move_validator(track_events, 1)
        // 同样返回 [均速, 标准差]
        // 如果速度太快（如连打），也会标记为异常 → kKeyboardFast
        , key_speed = move_validator(keydown_events, 5, !(0))
        , dv = 1; //  dv是位图标志（最终转为 base-32）
    !is_touch_device && is_support_touch && (dv |= 64,
        ubcode_v |= risk_event['kFakeOperations']),
        0 === track_events['length'] ? (dv |= 2,
            ubcode_v |= risk_event['kNoMove']) : move_speed[0] > 50 && (dv |= 16,
                ubcode_v |= risk_event['kMoveFast']),
        0 === mouse_events['length'] && (dv |= 4,
            ubcode_v |= risk_event['kNoClickTouch']),
        0 === keydown_events['length'] ? (dv |= 8,
            ubcode_v |= risk_event['kNoKeyboardEvent']) : key_speed[0] > 0.5 && (dv |= 32,
                ubcode_v |= risk_event['kKeyboardFast']),
        ucode['ubcode'] = ubcode_v;
    var rv = dv['toString'](32); // rv必须为1，否则就是命中
    return 1 === rv['length'] ? rv = '00' + rv : 2 === rv['length'] && (rv = '0' + rv),
        rv;
}        

// 和xentry12逻辑相似
function xcrypto(pad_string /**_0x30c511*/, ostring/**_0x35c283*/) /**_0x4145f8 */ {
    for (var len = ostring['length'], array = new ArrayBuffer(len + 1),
        uarray = new Uint8Array(array), ieor = 0, i = 0; i < len; i++)
        uarray[i] = ostring[i], ieor ^= ostring[i];
    uarray[len] = ieor;
    var random_key = 255 & Math['floor']((255) * Math['random']())
        , text = String['fromCharCode']['apply'](null, uarray)
        , crypted_text = RC4(String['fromCharCode'](random_key), text)
        , str = '';

    return str += String['fromCharCode'](pad_string),
        str += String['fromCharCode'](random_key),
        xentry1(str += crypted_text, 's1'); 
        // dyBase64(str += crypted_text, 's1');
}


function dyBase64(data, mindex, pad) {
    if (pad === null) {
        pad = "=";
    }

    var letter0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var letter1 = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=";
    var letter2 = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=";
    var letter3 = "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe";
    var letter4 = "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe";

    var mapTable = {};
    mapTable["s0"] = letter0;
    mapTable["s1"] = letter1;
    mapTable["s2"] = letter2;
    mapTable["s3"] = letter3;
    mapTable["s4"] = letter4;

    var uaTable = mapTable[mindex];
    var uaEncode = "";
    var i = 0;
    // var step = 3;
    while (i < data.length) {
        var c1 = data.charCodeAt(i++);
        var c2 = data.charCodeAt(i++);
        var _c2 = c2;
        var c3 = data.charCodeAt(i++);
        var _c3 = c3;

        c1 = (c1 & 255) << 16;

        if (isNaN(_c2)) {
            c2 = 0;
        } else {
            c2 = (c2 & 255) << 8;
        }

        if (isNaN(_c3)) {
            c3 = 0;
        } else {
            c3 = (c3 & 255);
        }

        var c = (c1 | c2) | c3;

        var ch1 = (c & 16515072) >> 18;
        var ch2 = (c & 258048) >> 12;
        var ch3 = (c & 4032) >> 6;
        var ch4 = (c & 63);

        uaEncode += uaTable.charAt(ch1);
        uaEncode += uaTable.charAt(ch2);

        if (!isNaN(_c2)) {
            uaEncode += uaTable.charAt(ch3);
        }

        if (!isNaN(_c3)) {
            uaEncode += uaTable.charAt(ch4);
        }

        if (isNaN(_c2)) {
            uaEncode += pad;
        }

        if (isNaN(_c3)) {
            uaEncode += pad;
        }
    }

    return uaEncode;
}

// 仅执行了md5算法，arg是参数
function xentry /**_0x5dd467 */(arg) {
    // 0x333 - 484e4f4a403f5243000027194f9666590000000044a16fed000000270700001400013e000a140002070001140001413d000d0211010011010243011400014111000142000200200d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d
    return entry(searchTable(0x333), {
        get 0x0() {
            return MD5_digest;
        },
        0x1: arguments,
        0x2: arg
    }, this);
}

// 通过和源码调试对比
// 参数 protocol=1, revent_flag=false arg3=0, in_salt=null,
// data 类型下面代码生成的md5字符串:
// let s = { // o = ",live_id=1,aid=6383,version_code=180800,webcast_sdk_version=1.0.14-beta.0,room_id=7493809356278909748,sub_room_id=,sub_channel_id=,did_rule=3,user_unique_id=7482403095261316617,device_platform=web,device_type=,ac=,identity=audience"
//         // 去掉逗号
//         "X-MS-STUB": tt()(o.substring(1)) // md5转ascii码小写
//     }
function xbogus_fun /**_0x1633f2*/(protocol, revent_flag, arg3, in_salt, data) {
    risk_valid(),
        action_valid(),
        void (0) !== in_salt && '' !== in_salt && (in_salt = '');
    // 空''执行md5得到d41d8cd98f00b204e9800998ecf8427e
    var in_salt_md5 /**_0x21ca02*/ = xentry(in_salt);
    data || (data = '00000000000000000000000000000000');

    var arrayBuffer /**_0x1fb174*/ = new ArrayBuffer(9);
    var uArray /**_0x1ffaa7*/ = new Uint8Array(arrayBuffer);
    // 测试了1000次，发现x1的值只能是64或者80
    var pad_string /**_0xeefda2*/ = 0 | protocol << 6 | revent_flag << 5 | (1 & Math['floor']((100) * Math['random']())) << 4 | 0;

    qlist['bogusIndex']++;
    var bogusIndex /**_0x5eb39b*/ = 0x3f & qlist['bogusIndex']; // 最多63中可能[1 - 63]
    uArray[0] = arg3 << 6 | bogusIndex;

    // 实际实现代码必须去掉命中情况
    // {directSign: false, consistent: false, location: false, switch: false, 
    //     dom: false, debugger: false, node: false, phantom: false, 
    //     webdriver: false, incognito: false, hook: false, test: true}
    // 即 qlist['envcode'] &= ~0x7ff; // 即qlist['envcode']只能为0
    // 但由于调试时param_sw.test好像直接设置的1，因此qlist['envcode']大概率为1，跟踪源码时也为1
    // 可以取反 qlist['envcode'] &= ~0x7fe;
    uArray[1] = qlist['envcode'] >> 8 & 255; // 高8位命中
    uArray[2] = 255 & qlist['envcode']; // 低8位命中
    uArray[3] = ucode['ubcode']; // 来源于action_valid, 必须为0, 否则即命中
    // 这行是我添加的
    // uArray[3] = 0; // 必须为0, 否则就是命中了
    var in_salt_md5_md5_array /**_0x13f487*/ = code_op['decode'](xentry(code_op['decode'](in_salt_md5)));
    uArray[4] = in_salt_md5_md5_array[14]; // 固定不变
    uArray[5] = in_salt_md5_md5_array[15]; // 固定不变
    var data_md5_array /**_0x136ce1*/ = code_op['decode'](xentry(code_op['decode'](data)));
    uArray[6] = data_md5_array[14]; // 仅这两位有效
    uArray[7] = data_md5_array[15]; // 仅这两位有效
    uArray[8] = 255 & Math['floor']((255) * Math['random']()); // 最多256种可能 [0 - 255]，应该是作为padding使用，无意义

    // 通过上述分析该算法最多产生的uArray的可能性是 64 * 256 种可能性
    // pad_string就两种可能64，80
    // 因此xcrypto最多产生 2 * 64 * 256种字符串，是可以预测的
    // 理论上如果数据不参与上报，随便从池子里拿出一个就可以用于sign签名
    // 我也验证了，脱机状态(无上传数据)，随机生成一个sign可以用于传输，不会报错
    // 补充：
    // 通过分析算法得到结论，uArray只有uArray[6], uArray[7]是变化的，uArray其他项虽然是变化的，但是可以预测
    // 前4项的值在一个区间， 5，6，9位为无效位
    // xcrypto算法只是把上面的数据uArray进行了再次封装,变成：
    // base64(| magic(1位) | key(1位) | rc4(data(9位) + data_hash(1位))))  ==> 最后由12位生成16位数据

    // 补充：
    // 上面分析是不知道算法的前提下碰撞的情况，是一种但我们回归算法本身校验，整个算法9个有效位
    // 第1位是索引(0-63)，第2，3，4位是测试数据(谈不上风控数据)，第5，6位数据固定，认为是padding数据，第7，8位是有效位，是实际的校验位
    // 第9位为无效数据，padding位
    // 实际上整个算法只校验了两个位，效率很高
    // 那在研究碰撞时，就容易多了，我们只要控制好有效位，第一位不断在0-63循环，基本这个算法就没用了，因此它的校验能力有些弱
    return xcrypto(pad_string, uArray);
}



// 实际跟踪进入函数，参数是0, null, md5的值
function XBogusKWebsocket /*_0x34c70a*/(arg1, arg2, data) {
    return { // kWebsocket
        'X-Bogus': xbogus_fun(protocol['kWebsocket'], revent['initialized'], arg1, null, data)
    };
}

// 参数data格式：{ "X-MS-STUB": md5(data) }
function frontierSign(data) /**_0x5c2014 */ {
    // 从参数取X-MS-STUB， 进入XBogusKWebsocket
    // 从参数取X-MS-PAYLOAD，进入xentry即md5，之后在进入XBogusKWebsocket
    return entry('484e4f4a403f524300362d0a5f00233c0000000029b6a730000000630214000103001400020700001400030700011400041101031100031347000d11010311000313140001450023110103110004134700130211010011010311000413430114000145000607000214000102110101110002021100014303140005110005420003096b1e7e601e606766710c6b1e7e601e63726a7f7c7277200303030303030303030303030303030303030303030303030303030303030303', {
        get 0x0() {
            return xentry;
        },
        get 0x1() {
            return XBogusKWebsocket;
        },
        0x2: arguments,
        0x3: data
    }, this);
}

function frontierSign(data) { // webmssdk中的frontierSign实际代码等同于这个，它没有调用entry，vm代码中不包含调用entry的逻辑
    return XBogusKWebsocket(0, null, data);
}


// 网页调用路径类似如下代码：
//    oparams = "xxxxx"
//     var hash = md5.create();
//     hash.update(oparams);
//     sign = hash.hex();

//     sparam = {};
//     sparam['X-MS-STUB'] = sign;

//     // xsign = window.byted_acrawler.frontierSign(sparm)["X-Bogus"];
//     xsign = window.supersdk.frontierSign(sparam)["X-Bogus"];
//     console.log(xsign);