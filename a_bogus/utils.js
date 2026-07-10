/*
 * Copyright AngelToms
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @Author: AngelToms
 * ab算法实现，生成a_bogus
 */

// 先测试是否包含a_bogus，不存在依次执行下列动作
G_DEBUG = "debug";
G_RELEASE = "release";
programVersion = G_DEBUG;

// 模拟环境检测
EnvTestTurnOn = false;
// 它是一个性能API方法，返回一个DOMHighResTimeStamp（代表 "高分辨率时间戳"），简单地说，这是一个以毫秒为单位的时间值，
// 在两个时间点之间的小数部分。
// performance.now()最常见的用例是监控一段代码的执行时间。现实生活中的用例可以包括视频、音频、游戏和其他媒体的基准测试和监控性能。
// 模拟执行performance
// 不需要了，已去掉了在创建U数组中的代码
PerformanceTestTurnOn = false;
// 刚刚进入页面时取时间戳enterPageTs
// 这个时间戳是判断a_bogus是否存在后，不存在马上取的时间戳，最早的时间戳
enterPageTs = +Date.now();

var AB_ARRAY_SIZE = 256;
var DY_SALT = "dhzx";
// 用于生成a_bogus的大数组
U = [];

var sdkVersion = "1.0.1.19-fix.01";
var aid = 6383;
var pageId = 7571;

onwheelx = {
    "value": "0X21",
    "writable": false,
    "enumerable": true,
    "configurable": true
};

innerScreen = {
    "innerWidth": 2048, // 会判断是否是800
    "innerHeight": 960, // 会判断是否是600
    "outerWidth": 2554,
    "outerHeight": 1386,
    "availWidth": 2560,
    "availHeight": 1392,
    "sizeWidth": 2560,
    "sizeHeight": 1440,
    "platform": "Win32"
};

// 随机函数+数组变化
// 这个数组存在问题或者更新了，用后面那个算法
// function random(inval) {
//     in0 = inval[0];
//     in1 = inval[1];

//     r = Math.random() * 65535;

//     u1 = (r & 255 & 170) | (in0 & 85);
//     u2 = (r & 255 & 85) | (in0 & 170);
//     u3 = (((r >> 8) & 255) & 170) | (in1 & 85);
//     u4 = (((r >> 8) & 255) & 85) | (in1 & 170);

//     if (programVersion === G_DEBUG) {
//         console.log("random :: ", [u1, u2, u3, u4]);
//     }
//     return [u1, u2, u3, u4];
// }


function random(inObj) {
  inval = inObj["0"];
  inval1 = inObj["1"];

  in0 = inval[0];
  in1 = inval[1];

  flag = 0;
  r = Math.random() * 65535;

  r1 = r & 255;
  r2 = (r >> 8) & 255;

  if (inObj["length"] > 1) {
    if (inval1 != void 0) {
      flag = inObj["1"];
    }
  } else {
    flag = 0;
  }

  if (flag === 1) {
    r2 = (Math.random * 40) >> 0;
  }

  if (flag === 2) {
    // 忽略环境检测
    r1 = (Math.random() * 240) >> 0;
    if (r1 > 109) {
      r1 = r1 + (r1 % 2);
      r1 += 1;
    }

    // 忽略环境匹配
    r2 = ((Math.random * 255) >> 0) & 77;

    // 调试时发现如果关于类似navigator.pemrissions["microphone"] === "granted"不匹配
    // r2不进行任何操作直接返回
    // 下面代码是命中的情况，因为实际情况应该就是命中的
    r2 |= 1 << 1;
    r2 |= 1 << 4;
    r2 |= 1 << 5;
    r2 |= 1 << 7;
  }

  u1 = (r1 & 170) | (in0 & 85);
  u2 = (r1 & 85) | (in0 & 170);
  u3 = (r2 & 170) | (in1 & 85);
  u4 = (r2 & 85) | (in1 & 170);
  return [u1, u2, u3, u4];
}

function getTxUri(url, method) {
    if (method == 'post') {
        return url + DY_SALT;
    } else {
        return "" + DY_SALT;
    }
}

// 以下代码等价于  var keyArray = String.fromCharCode(0.00390625, 1, 14);
// ## 调试时发现无区别的刷新，某些请求会以以下为key：
// [0.00390625, 1, 0] 、[0.00390625, 1, 12]
// key的出现次序是: [0.00390625, 1, 0] 、[0.00390625, 1, 12]、[0.00390625, 1, 14]
function createKey() {
    var keyArray = [];

    var magic = 1;
    // 即1/256 = 0.00390625
    magic /= AB_ARRAY_SIZE;
    keyArray.push(magic);
    // 即1%256
    magic = 1;
    magic %= AB_ARRAY_SIZE;
    keyArray.push(magic);
    // 即14%256
    magic = 14;
    magic %= AB_ARRAY_SIZE;
    keyArray.push(magic);

    return String.fromCharCode.apply(String, keyArray);
};

// 逆向得到的，魔改了部分的rc4
function dyRc4(key, text) {
    // 初始化 S-Box（0~255）
    var S = new Uint8Array(AB_ARRAY_SIZE);
    var K = new Uint8Array(AB_ARRAY_SIZE);

    var maxSIndex = AB_ARRAY_SIZE - 1;
    for (var i = 0; i < AB_ARRAY_SIZE; i++) {
        // 这里改动了一下，这里是初始化Sbox
        S[i] = maxSIndex - i;
        K[i] = key.charCodeAt(i % key.length);
    }

    if (programVersion === G_DEBUG) {
        console.log("rc4 init :: ", S);
    }

    // 这里改动了一下，这里是密钥变化轮
    var j = 0;
    for (var i = 0; i < AB_ARRAY_SIZE; i++) {
        j = (j * S[i] + j + K[i]) % AB_ARRAY_SIZE;
        [S[i], S[j]] = [S[j], S[i]]; // 交换 S[i] 和 S[j]
    }

    if (programVersion === G_DEBUG) {
        console.log("rc4 ex :: ", S);
    }

    // 伪随机数生成算法（PRGA）
    var i = 0, k = 0;
    var cipher = new Uint8Array(text.length);
    // 新变量
    var ucipher = "";

    for (let n = 0; n < text.length; n++) {
        i = (i + 1) % AB_ARRAY_SIZE;
        k = (k + S[i]) % AB_ARRAY_SIZE;
        [S[i], S[k]] = [S[k], S[i]]; // 交换 S[i] 和 S[k]

        let rnd = S[(S[i] + S[k]) % AB_ARRAY_SIZE]; // 生成密钥流字节
        cipher[n] = text.charCodeAt(n) ^ rnd; // XOR 操作

        // 这里是变化的地方
        ucipher += String.fromCharCode(cipher[n]);
    }

    if (programVersion === G_DEBUG) {
        console.log("rc4 degist :: ", cipher);
        console.log("rc4 ucode :: ", ucipher);
    }

    return ucipher;
}


// 标准的base64实现和这个存在区别，标准的base64以每3个字符为一个单位进行处理，但逆向的逻辑和标准算法实现是一致的
function dyBase64(ucode, mindex, pad) {
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

    if (programVersion === G_DEBUG) {
        console.log("UAE code length: ", ucode.length);
        console.log("UAE map table: ", uaTable);
    }

    var uaEncode = "";
    var i = 0;
    // var step = 3;
    while (i < ucode.length) {
        var c1 = ucode.charCodeAt(i++);
        var c2 = _c2 = ucode.charCodeAt(i++);
        var c3 = _c3 = ucode.charCodeAt(i++);

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

        c = (c1 | c2) | c3;

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

        if (programVersion === G_DEBUG) {
            console.log("UAE step origin val :: ", c1, c2, c3, c, ch1, ch2, ch3, ch4);
            console.log("UAE step encode val :: ", uaEncode);
        }
    }

    return uaEncode;
}

function makeVersionArray(ver) {
    var verArray = [];
    var array = ver.split(".");
    verArray.length = array.length;
    for (var i = 0; i < array.length; i++) {
        array[i] = ~array[i];
        array[i] = ~array[i];
        verArray[i] = array[i];
    }
    if (programVersion === G_DEBUG) {
        console.log("sdk version :: ", verArray);
    }
    return verArray;
}

// 对U88数组进行转换，后面函数用，放在下面函数前面声明
function u88Transform(array) {
    narray = [];
    var i = 0;
    var E1 = 145, E2 = 110, E3 = 66, E4 = 189, E5 = 44, E6 = 211;
    while (i < array.length) {
        if ((i + 2) < array.length) {
            var x = (Math.random() * 1000) & 255; // 有随机数，不可逆，即使随机数只有 0 - 255
            a = (x & E1) | (array[i] & E2);
            b = (x & E3) | (array[i + 1] & E4);
            c = (x & E5) | (array[i + 2] & E6);
            d = (array[i] & E1) | (array[i + 1] & E3) | (array[i + 2] & E5);

            narray.push(a);
            narray.push(b);
            narray.push(c);
            narray.push(d);
        }
        else {
            narray.push(array[i]);
            if (array[i + 1] != void 0) {
                    narray.push(array[i + 1]);
            } 
        }
        i += 3;
    }

    if (programVersion === G_DEBUG) {
        console.log("new magic array :: ", narray);
    }

    return narray;
}


// 先测试是否包含a_bogus，不存在依次执行下列动作
// 测试执行的逻辑在此行代码: n.apply(d, e), 因此在此处下条件断点(e == 'a_bogus')
// 执行结果 v[++p] = m(false), 继续执行方法逻辑
// 这里面步骤每一步都非常关键，前面步骤是后续生成大数组的基础数据
// 非DEBUG模式只需要输入参数uri，其他参数为0即可
// uri格式：uri = "device_platform=webapp&aid=6383&channel=channel_pc_web&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&support_h265=1&support_dash=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=135.0.0.0&browser_online=true&engine_name=Blink&engine_version=135.0.0.0&os_name=Windows&os_version=10&cpu_core_num=20&device_memory=8&platform=PC&downlink=0.55&effective_type=3g&round_trip_time=500&webid=7482403095261316617&uifid=c4a29131752d59acb78af076c3dbdd52744118e38e80b4b96439ef1e20799db0e06c5be9532d94f0b7725e552b444440ba2c1788bfe5c8a70c5c57ab949d98c92463baa114bc91665f6b6f521e7d9a95ab08e303534db5095aeb069825e1f5e2bf4a4d0f4046a281efabce92529f452a210f0f0177b5e702cbf977dbc27d98980ac8f88aee8c3a95a21b96af00089db82838edad8a54dca3f57bbbc31132d6bed21846d5a9268a6f4485626786e98bd17c3347439baef5c777c1c3db74544de5&msToken=FWM9NpNgsrUHOtqnF7YmwQU9Y3hIIZOuTf65COJG4V8VyNeaU89328CcMbM_rImYIwdj2AJKjX9CZT_tbM4HxaObL5GW2izSWid3HFUiZYSeu-jIt1om8zSvQAO4Ztm2zIFSfGvtX6Hjq_zZCCxcb2lWeyJbOaRD5TZ5mE7aYo0xjPwUsNmKX7s%3Ddhzx";
// DEBUG模式需要参数ts
// DEBUG模式下，这些参数是在调试时从浏览器watch中获得的变量
// 此目的可以用于观察对比很多变量是否和浏览器生成一致
// 其他变量就自由生成了，因为很多变量是经过random的，无法达到和浏览器输出同样的值
// 但算法没有问题，服务端应该可以通过验证
// 程序中很多值是经过一些列检测计算得到的，虽在程序中写死，但不影响最终结果，因为这些值是在真实环境中一步一步跟踪下来得到的值
function makeABogus(uri, ts) {

    if (programVersion === G_DEBUG && ts !== 0) {
        enterPageTs = ts;
    }

    if (programVersion === G_DEBUG) {
        console.log("enter page ts :: ", enterPageTs);
    }

    // 调试时，进入ab算法真正的开始是U[12]=11，后续才走下面的逻辑

    // 刚刚进入页面时，时取时间戳enterPageTs
    // 之后在创建大数组U时，创造第一个U[0]时，U[0]是一个包含22项元素的数组，其中U[0][2] = "dhzx",
    // U[0][3] 就是 Date.now() - 1, 即下面的代码_ink
    // 通过Object.defineProperty定义了ink，如下：
    // ink_obj = {};
    // var dnow = Date.now(); // 1753084107074
    // dsub = dnow - 1;
    // // 定义ink，即 {"ink": 1753084107073 }
    // 但是源码是通过如下形式定义的
    // Object.defineProperty(ink_obj, "ink", {
    //         value: dsub,
    //         writable: !0,
    //         configurable: !0,
    //         enumerable: !0
    // }); 
    // 这里略
    // 这里用下面等价代码实现{"ink": 1753084107073 }
    _ink = +Date.now() - 1;
    // 即navigator.ink
    navigator.vendorSubs = { ink: _ink }; // 实际这里不需要定义，直接用_ink的值就行
    ink = navigator.vendorSubs.ink;


    // U0 和 U1 实际对应两个Object
    // U0创建时间早于U1
    // U1是正式进入生成ab算法时传递的参数

    // U[0] 是一个长度为22的数组，U[0][0 - 4]项如下所列
    // U[0][5] 是判断浏览器封装, 结构如下： {
    //     "name": "Chrome",
    //     "isChrome": f,
    //     "isEdge": f,
    //     "isFirefox": f,
    //     "isHuawei": f,
    //     "isIE": f,
    //     "isOpera": f,
    //     "isOther": f,
    //     "isSafari": f
    // }
    // U[0][6 - 21] 是指向虚拟机入口X的函数
    U[0] = [];
    U[0].length = 22;
    U[0][0] = {};
    U[0][1] = { "length": 0 };
    U[0][2] = DY_SALT;
    U[0][3] = enterPageTs;
    U[0][4] = 1; // 开始值为0，正式进入ab生成vm函数时会++，后面这个值还会增加，到ab生成完值为36
    // U[0][5] 后略

    // 没有用到, 通过跟踪程序，U[1]大多数据都是写死的，其他值是外部数据是固定的(如pageId, aid, sdkversion, uri，useragent等)
    // 而U[2 - 10] 来源于此
    U[1] = [];
    U[1].length = 9;
    U[1][0] = 1;
    U[1][1] = 0;
    U[1][2] = 8;
    U[1][3] = uri;
    U[1][4] = "";
    U[1][5] = navigator.userAgent;
    U[1][6] = pageId;
    U[1][7] = aid;
    U[1][8] = sdkVersion;

    // 写死，在进入函数前直接取的，作为参数传入
    U[2] = 1;
    U[3] = 0;
    U[4] = 8;

    if (uri.endsWith(DY_SALT)) {
        U[5] = uri;
    } else {
        U[5] = uri + DY_SALT;
    }

    U[6] = "";
    U[7] = navigator.userAgent.trim();
    U[8] = pageId;
    U[9] = aid;
    U[10] = sdkVersion;
    // 中间一系列 环境检测、 performance操作略
    // uri + dhzx, dhzx 两遍sm3后
    // bdms.js文件 key: "sum", value: function(t, r) 处下断点
    var urlSm3Array = sm3DigestTwice(U[5]);
    haltSm3Array = sm3DigestTwice(U[0][2]);
    var uaCrypt = dyRc4(createKey(), U[7]);

    uaEncode = dyBase64(uaCrypt, "s3", null);
    uaeSm3Array = sm3Digest(uaEncode);

    // 调试跟踪时，这个值是后面被赋值的
    // U21算完之后，U11才被赋值为navigator.vendorSubs
    // 接着判断U11.ink不为null和undefined后
    // 把U11.ink赋值给U22
    U[11] = navigator.vendorSubs;

    // 在刚刚进入ab生成算法时，U12是被值为11的
    // 后面对U13做了检测, 看U13, 没命中把U12赋值为3
    U[12] = 3;

    // 调试时实际它走的这样的代码，但是我们程序是构建的，因此就像下面那样赋值
    // 先测试window.onwheelx是否存在，再测试window.onwheelx['_Ax']是否存在
    // if (window.onwheelx) {
    //     if (window.onwheelx['_Ax']) {
    //         U13 = Object.getOwnPropertyDescriptor(window.onwheelx, "_Ax");
    //     }
    // }
    window.onwheelx = onwheelx;
    U[13] = window.onwheelx;
    // 调试时代码实际对其作了如下验证，通过验证U12被赋值为3，否则应该还是11
    // 我们直接对U12赋值为3了，因此下面代码忽略，但保留注释
    // is_hit_u13 = (U[13]  === null);
    // if (!is_hit_u13) {
    //     is_hit_u13 = (U[13]  === (void 0));
    // }
    // if (!is_hit_u13) {
    //     is_hit_u13 = (U[13] ["writable"]);
    // }
    // if (is_hit_u13 === false) {
    //     U[12] = 3;
    // } else {
    //     U[12] = 11; // 不变
    // }

    // 这里又取时间
    U[14] = +Date.now();

    // U[15]
    // t = {
    //     "reg": [
    //         1937774191,
    //         1226093241,
    //         388252375,
    //         3666478592,
    //         2842636476,
    //         372324522,
    //         3817729613,
    //         2969243214
    //     ],
    //     "chunk": [],
    //     "size": 0
    // }
    U[15] = []; // sm3算法魔术和chunk, 无用, 这里无需赋值，如果赋值则为t
    // U16是做了一系列的环境检测后计算得到的值，但是如果没有匹配任何计算的值就是1
    // 一共做了7个大类别的检测，对每种检测结果，按顺序 << (n - 1), 最后把这些结果|上上一次的值，第一次|1
    // 上面的意思是，举例说明：
    // 如果当前检测第1种，没匹配就为false，通过+false把其转换为0， 然后0 << (1-1)即 0 << 0 = 0, 然后0|1 = 1;
    // 我们这里称其为 env_mask = 0 | 1; 假设都没命中，都为false，取值都为0
    // 以此类推得：env_mask = ((0 << 0) | 1) | (0 << 1) | (0 << 2) | (0 << 3) | (0 << 4) | (0 << 5) | (0 << 6)
    // 最终值为1
    U[16] = 1; // 这里写死, 推导过程见上面注释

    // 生成类似creatUxx，都是做一些检测得到之后在组合计算
    // J132(vr -> N)
    // 执行取track.mode
    // J232(u -> I -> M)
    // 后面三个函数均取对应Object.data, rear 取值不为0存入新数组[]
    // 但三个取值均为0
    // 第一次执行 v1 = 1 << 1
    // 第二次 v2 = (2 << 1 | v1)
    // 第三次 v3 = (3 << 1) | v2
    // 最后生成值14
    // 这个我们无法干预，就只能目前写死14
    // 但我的一次调试时为12， 这个12不确定是否影响算法，我们就取14
    U[17] = 14;
    U[18] = urlSm3Array;
    U[19] = haltSm3Array;
    U[20] = uaEncode;
    U[21] = uaeSm3Array;
    // 出处见U11
    U[22] = ink;
    // 调试时发现是直接取值，写死的
    U[23] = [3, 82];
    // 也是写死的，直接取值的
    // 评论代码是magic
    U[24] = 41;
    U[25] = makeVersionArray(sdkVersion);

    var G1 = [void 0];
    var z = Date;
    var utc = +"1721836800000";
    // 源代码这样创建了一个数组，空的，3个元素
    var gDate = new (Function.bind.apply(z, G1));
    var gNow = gDate.getTime();
    U[26] = ((gNow - utc) / 1000 / 60 / 60 / 24 / 14) >> 0; // >> 0  移除小数点
    U[27] = 6;

    // 这里用到了enter page ts，仅这里用到了
    U[28] = (U[14] - U[0][3] + 3) & 255;
    U[29] = U[14] & 255;
    U[30] = (U[14] >> 8) & 255;
    U[31] = (U[14] >> 16) & 255;
    U[32] = (U[14] >> 24) & 255;
    U[33] = (U[14] / 256 / 256 / 256 / 256) & 255;
    U[34] = (U[14] / 256 / 256 / 256 / 256 / 256) & 255;
    U[35] = (U[16] % 256) & 255;
    U[36] = (U[16] / 256) & 255;

    // 慢速调试时得[34, 0, 0, 0, 129];
    // 数组中的129是直接取的，其他值是经过了一些所谓的环境计算判断，但无所谓
    // 实际可以为任意值，数组长度也不一定，我这个版本是[0, 0, 0, 0, 129]，一直跑不会出现问题
    // U[37] = creatUxx(); // 返回结果同下
    // 这里就取[0, 0, 0, 0, 129]
    U[37] = [0, 0, 0, 0, 129]; 
    U[38] = U[37][4] & 255;
    U[39] = (U[37][4] >> 8) & 255;
    U[40] = U[37][0];
    U[41] = U[37][1];
    U[42] = U[37][2];
    U[43] = U[37][3];
    U[44] = U[17] & 255;
    U[45] = (U[17] >> 8) & 255;
    U[46] = (U[17] >> 16) & 255;
    U[47] = (U[17] >> 24) & 255;
    U[48] = U[18][9];
    U[49] = U[18][18];
    U[50] = 3;
    U[51] = U[18][U[50]];
    // 这里应该包含一个分支用于计算U[52]的另一种情况
    u51 = U[51];
    // if (u51 != 11) { // u51 === 11 = false, 但也没见用
    //     u51 = U[37][4];
    //     u51 &= 2;
    // }

    U[52] = U[19][10];
    U[53] = U[19][19];
    U[54] = 4;
    U[55] = U[19][U[54]];
    u55 = U[55];
    // if (u55 != 8) { // u55 === 8 = false，但也没见用
    //     u55 = U[37][4];
    //     u55 &= 4;
    // }

    U[56] = U[21][11];
    U[57] = U[21][21];
    U[58] = 5;
    U[59] = U[21][U[58]];
    u59 = U[59];
    // if (u59 != 12) { // u59 === 12 = false，但也没见用
    //     u59 = U[37][4];
    //     u59 &= 8;
    // }

    U[60] = U[22] & 255;
    U[61] = (U[22] >> 8) & 255;
    U[62] = (U[22] >> 16) & 255;
    U[63] = (U[22] >> 24) & 255;
    U[64] = (U[22] / 256 / 256 / 256 / 256) & 255;
    U[65] = (U[22] / 256 / 256 / 256 / 256 / 256) & 255;
    U[66] = U[12];
    U[67] = U[8] & 255;
    U[68] = (U[8] >> 8) & 255;
    U[69] = (U[8] >> 16) & 255;
    U[70] = (U[8] >> 24) & 255;
    U[71] = U[9] & 255;
    U[72] = (U[9] >> 8) & 255;
    U[73] = (U[9] >> 16) & 255;
    U[74] = (U[9] >> 24) & 255;

    // 下面数据可以动态取，也可以用全局的innerScreen
    // innerScreen是写死的，但是从调试时获取的，不影响结果
    // 本身这些值就是动态的
    innerWinow = Object.defineProperty({}, "innerWidth", {
        value: window.innerWidth >> 0, // 2048, 会判断是否是800
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "innerHeight", {
        value: window.innerHeight >> 0, // 960, 会判断是否是600
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "outerWidth", {
        value: window.outerWidth >> 0, // 2554
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "outerHeight", {
        value: window.outerHeight >> 0, // 1386
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "availWidth", {
        value: window.screen.availWidth >> 0, // 2560
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "availHeight", {
        value: window.screen.availHeight >> 0, // 1392
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "sizeWidth", {
        value: ((window.screen.width >> 0) == 0) ? 2560 : (window.screen.sizeWidth >> 0), // 2560
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "sizeHeight", {
        value: ((window.screen.height >> 0) == 0) ? 1440 : (window.screen.sizeHeight >> 0), // 1440
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    innerWinow = Object.defineProperty(innerWinow, "platform", {
        value: navigator.platform, // Win32
        writable: !0,
        configurable: !0,
        enumerable: !0
    });

    U[75] = innerWinow;

    U[76] = "";
    keys = Object.keys.apply(Object, [U[75]]);
    for (var key in keys, innerWinow) {
        U[76] += innerWinow[key] + "|";
    }
    U[76] = U[76].substring(0, U[76].length - 1);

    U[77] = [];
    for (var i = 0; i < U[76].length; i++) {
        U[77].push(U[76].charCodeAt(i));
    }

    U[78] = U[77].length;
    U[79] = U[78] & 255;
    U[80] = (U[78] >> 8) & 255;
    U[81] = ((U[14] + 3) & 255) + ",";

    U[82] = [];
    for (var i = 0; i < U[81].length; i++) {
        U[82].push(U[81].charCodeAt(i));
    }

    U[83] = U[82].length;
    U[84] = U[83] & 255;
    U[85] = (U[83] >> 8) & 255;

    // 模拟检测，可不执行, performance
    // 有时候的检测和performance内容不尽相同
    var inObj1 = {0:[U[25][0], U[25][1]], length:1};
    var inObj2 = {0:[U[25][0], U[25][1]], 1:2, length:2};
    U[86] = random(inObj1).concat(random(inObj2));

    // 类似一个hash
    // 这里无 37（event), 50, 54, 58三项是写死的
    // 75， 76 window相关， 77 在后面， 78是77长度
    // 81是时间差串，82后有，83是82长度
    U[87] = U[86][0] ^ U[86][1] ^ U[86][2] ^ U[86][3] ^ U[86][4] ^ U[86][5] ^ U[86][6] ^ U[86][7] ^
        U[24] ^ U[26] ^ U[27] ^ U[28] ^ U[29] ^ U[30] ^ U[31] ^ U[32] ^ U[33] ^ U[34] ^
        U[35] ^ U[36] ^ U[38] ^ U[39] ^ U[40] ^ U[41] ^ U[42] ^ U[43] ^ U[44] ^ U[45] ^
        U[46] ^ U[47] ^ U[48] ^ U[49] ^ U[51] ^ U[52] ^ U[53] ^ U[55] ^ U[56] ^ U[57] ^
        U[59] ^ U[60] ^ U[61] ^ U[62] ^ U[63] ^ U[64] ^ U[65] ^ U[66] ^ U[67] ^ U[68] ^
        U[69] ^ U[70] ^ U[71] ^ U[72] ^ U[73] ^ U[74] ^ U[79] ^ U[80] ^ U[84] ^ U[85];


    // 摘自别人对我视频的评论，这个排序对应下面tlist先后顺序
    // sort_index = [
    //     0x09, 0x12, 0x1c, 0x20, 0x2c, 0x04, 0x29, 0x13, 0x0a, 0x17,
    //     0x0c, 0x25, 0x18, 0x27, 0x03, 0x16, 0x23, 0x15, 0x05, 0x2a,
    //     0x01, 0x1b, 0x06, 0x28, 0x1e, 0x0e, 0x21, 0x22, 0x02, 0x28,
    //     0x0f, 0x2d, 0x1d, 0x19, 0x10, 0x0d, 0x08, 0x26, 0x1a, 0x11,
    //     0x24, 0x14, 0x0b, 0x00, 0x1f, 0x07, 0x2e, 0x2f, 0x30, 0x31
    // ]
    tlist = [U[34], U[44], U[56], U[61], U[73], U[29], U[70], U[45], U[35], U[49],
    U[38], U[66], U[51], U[68], U[28], U[48], U[64], U[47], U[30], U[71],
    U[26], U[55], U[31], U[69], U[59], U[40], U[62], U[63], U[27], U[72],
    U[41], U[74], U[57], U[52], U[42], U[39], U[33], U[67], U[53], U[43],
    U[65], U[46], U[36], U[24], U[60], U[32], U[79], U[80], U[84], U[85]];

    // U88的生成涉及到是否是数组的判断, 是否是null，undefined
    // 如果是数组则拷贝的新数组，否则直接拿过来
    // 但是最终执行的还是concat，下面代码这么写，不影响逻辑
    // 因此注释的代码不需要了
    // u77 = U[77];
    // if(Array.isArray(Array, u77)) {
    //      newU77 = Array.apply(undefined, [U[77].length]);
    //      for(var i = 0; i < U[77].length]; i++) {
    //      newU77[i] = U[77][i];
    //      } 
    // } // 以此类推，略
    // U88的长度不是固定的，可能大于92，我测试和调试发现出现过92, 96, 98, 99
    U[88] = tlist.concat(U[77], U[82], [U[87]]);

    // 有人评论我，这个U89是4字节随机头部
    inObj = {0:U[23], 1:1, length:2};
    U[89] = random(inObj);
    // 调试运行时代码为String.fromCharCode.apply.apply(String.fromCharCode, [String, U[89]]);
    // 等价于下面代码，下面代码更简洁
    // 也等价于String.fromCharCode.apply(null, U[89]);
    // String.fromCharCode(num1, num2, /* …, */ numN)
    u89 = String.fromCharCode.apply(String, U[89]);
    U[89] = u89;

    U[90] = u88Transform(U[88]);

    // String.fromCharCode(num1, num2, /* …, */ numN)
    // 调试运行时代码为String.fromCharCode.apply.apply(String.fromCharCode, [null, [211]]);
    // 等价于下面代码，下面代码更简洁，
    nkey = String.fromCharCode(211);

    // 网上评论U86是8字节随机字节
    t1list = U[86]; 
    t1list = t1list.concat(U[90]);

    // 下面是调试运行时代码String.fromCharCode.apply.apply(String.fromCharCode, [null, t1list]);
    // 等价于下面代码，下面代码更简洁
    // 也等价于String.fromCharCode.apply(null, t1list);
    ncode = String.fromCharCode.apply(String, t1list);
    if (programVersion === G_DEBUG) {
        console.log("ncode :: ", ncode);
    }

    cryptNcode = dyRc4(nkey, ncode);
    U[91] = cryptNcode;

    U[92] = U[89] + U[91];

    // U93即a_bogus
    U[93] = dyBase64(U[92], "s4", null);


    if (programVersion === G_DEBUG) {
        console.log("Magic Array :: ", U);
    }

    if (programVersion === G_DEBUG) {
        console.log("a_bogus length :: ", U[93].length);
        console.log("a_bogus :: ", U[93]);
    }

    return U[93];

}

// 验证test, t1list, u90, u92都需要修改
function test() {
    nkey = String.fromCharCode(211);

    t1list = [129, 81, 32, 69, 33, 0, 170, 85];

    u90 = [16, 76, 200, 11, 88, 0, 235, 132, 0, 66,
        41, 0, 156, 193, 11, 129, 68, 95, 12, 133,
        101, 214, 12, 2, 200, 239, 54, 194, 188, 125,
        12, 2, 125, 2, 63, 188, 188, 70, 24, 11,
        144, 2, 94, 4, 195, 2, 40, 16, 135, 147,
        177, 178, 128, 67, 32, 0, 16, 41, 193, 4,
        61, 110, 36, 1, 149, 64, 26, 32, 32, 118,
        48, 56, 108, 49, 58, 48, 49, 60, 22, 112,
        180, 119, 48, 53, 237, 49, 27, 48, 40, 116,
        116, 62, 178, 119, 26, 52, 176, 62, 61, 112,
        179, 57, 30, 49, 236, 48, 49, 54, 166, 48,
        84, 60, 177, 116, 48, 53, 177, 60, 115, 84,
        249, 108, 63, 99, 35, 48, 56, 50, 35, 108,
        5, 28];

    t1list = t1list.concat(u90);

    console.log("t1list :: ", t1list);

    // 下面是调试运行时代码String.fromCharCode.apply.apply(String.fromCharCode, [null, t1list]);
    // 等价于下面代码，下面代码更简洁
    // 也等价于String.fromCharCode.apply(null, t1list);
    ncode = String.fromCharCode.apply(String, t1list);
    console.log("ncode :: ", ncode);

    cryptNcode = dyRc4(nkey, ncode);
    U[91] = cryptNcode;

    U[92] = "#WP\u0017" + U[91];

    // U93即a_bogus
    U[93] = dyBase64(U[92], "s4", "=");

    console.log("a_bogus length :: ", U[93].length);
    console.log("a_bogus :: ", U[93]);
}

