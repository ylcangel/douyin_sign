/*
 * Copyright AngelToms
 * SPDX-License-Identifier: Apache-2.0
 */

// 环境检测部分代码
// 这个函数可以得到匹配的regs，并且能返回对应的名字
function fg_regs() {}

function beforeMkAb() {
  // 先测试是否包含a_bogus，不存在依次执行下列动作
  // 对应vm函数J0_get14_pr(),无参数，指令长度为12
  t1 = +Date.now();
  // 得到uri， 通过对URL.searchParams.toString()
  // 类似"device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&pc_libra_divert=Windows&update_version_code=170400&support_h265=1&support_dash=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=138.0.0.0&browser_online=true&engine_name=Blink&engine_version=138.0.0.0&os_name=Windows&os_version=10&cpu_core_num=20&device_memory=8&platform=PC&downlink=4&effective_type=4g&round_trip_time=50&webid=7482403095261316617&uifid=c4a29131752d59acb78af076c3dbdd52744118e38e80b4b96439ef1e20799db0e06c5be9532d94f0b7725e552b444440ba2c1788bfe5c8a70c5c57ab949d98c92463baa114bc91665f6b6f521e7d9a95ab08e303534db5095aeb069825e1f5e2bf4a4d0f4046a281efabce92529f452a210f0f0177b5e702cbf977dbc27d98980ac8f88aee8c3a95a21b96af00089db82838edad8a54dca3f57bbbc31132d6bed21846d5a9268a6f4485626786e98bd17c3347439baef5c777c1c3db74544de5&msToken=yVSQmgAPOmNENpmIx4HBNzrkB3e9HnHE6AqvZk47tvUgSG4tJyurEnHmkQ81hs8tYpe_3STFrVkx-Lz9rEkhsWFsnk0VgxrxRmJ5AvCM0zkCnfMKCgkeSxHMmsAYoD7jw46lcr-UYbRkR_1KySxYNbH1QEyaPWYKVo5tu-FAO3Gn0GDDIljjzoM%3D"
  uri = URLSearchParams.toString(); // 赋值给临时的U6
  // 先测试是否包含a_bogus，不包含则先做环境监测，太多了，不分析了，和功能无关
  // 类似这样的数据10206569.299999952
  var env_test_start = performance.now(); // 临时U5
  // 对应vm函数J0_get12_lr,code长度21
  // 取navigator
  navigator_proto = navigator.__proto__;
  ink_obj = {};
  var dnow = Date.now(); // 1753084107074
  dsub = dnow - 1;
  // 定义ink即：{"ink": 1753084107073 }
  ink = Object.defineProperty(ink_obj, "ink", {
    value: dsub,
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  navigator_proto.vendorSubs = ink;

  vp = typeof null; // 'object'
  vp = vp !== "string"; // true 没看到具体哪里用了，指令向后跳转
  ustr = ""; // 临时U7

  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
  userAgent = navigator.userAgent; // 临时U8
  // 取userAgent测试是否包含字符baiduboxapp,AlipayClient
  found = userAgent.indexOf("baiduboxapp"); // -1
  if (found >= 0) {
    // 我们这里没有匹配， 我们忽略它做什么
    // 这里继续向后跳转
  }

  found = userAgent.indexOf("AlipayClient");
  if (found >= 0) {
    // 同上
  }

  J0_get18_vr = {
    aid: 6383,
    pageId: 11881,
    boe: false,
    ddrt: 8.5,
    paths: {
      include: [
        { source: "^\\/webcast\\/" },
        { source: "^\\/aweme\\/v1\\/" },
        { source: "^\\/aweme\\/v2\\/" },
        { source: "\\/v1\\/message\\/send" },
        { source: "^\\/live\\/" },
        { source: "^\\/captcha\\/" },
        { source: "^\\/ecom\\/" },
      ],
      exclude: [{ source: "/monitor_browser/collect/batch" }],
    },
    track: {
      mode: 0,
      delay: 300,
      paths: [],
    },
    slU: "",
    dump: true,
    rpU: "",
    ic: 8.5,
  };

  pageId = J0_get18_vr["pageId"];
  aid = J0_get18_vr["aid"];
  sdkVersion = "1.0.1.19-fix.01";

  // J0_get13_cr, code长度为1834, 这个是生产ab的vm函数
  // 进入函数J0_get13_cr(1, 0, 8, uri, "", userAgent, pageId=11881, aid=6383, sdkVersion)

  // 这里就正式进入ab生成vm函数了
  // U4++
  U12 = 11; // 到此所有传入参数都被拷贝到U数组占位位置
  // 后面略，进入还原函数看
}

// 可用可不用
// 此方法不是性能优化，而是a_bogus执行过程中的逻辑
// 主要检测浏览器相关，测试是否使用了浏览器作弊
// 这些逻辑包含对环境等检测，通过检测的值组合生成Ux，例如U16
// makeABogus是把最终结果直接赋值给了U数组
function envDetectU16() {
  Date.now(); // 1753098511514

  // 以下是生成U16的逻辑
  // 满足下面条件才执行call方法
  if (typeof window !== "undefined");
  if (typeof navigator !== "undefined");
  if (typeof document !== "undefined");
  if (typeof location !== "undefined");
  if (typeof history !== "undefined");
  Object.prototype.toString.call(navigator) === "[object Navigator]"; // true
  Object.prototype.toString.call(document) === "[object HTMLDocument]"; // true
  Object.prototype.toString.call(location) === "[object Location]"; // true
  Object.prototype.toString.call(history) === "[object History]"; // true
  // 和这些方法
  doc_canvas = document.createElement("canvas");
  // 28个字节指令完成
  // [74,0,2,24,73,0,6,31,18,74,0,2,18,30,9,0,0,18,30,205,73,914,0,1,38,0,1,76]
  typeof doc_canvas.toDataURL() !== "function"; // false
  doc_canvas_str = doc_canvas.toDataURL().toString(); // "function toDataURL() { [native code] }"
  doc_canvas = doc_canvas_str.indexOf("[native code]"); // 23
  doc_canvas_index <= 0; // false

  // 重复
  typeof navigator.toString() !== "function"; // false
  nav_str = navigator.toString().toString(); // "function toString() { [native code] }"
  nav_index = nav_str.indexOf("[native code]"); // 22
  nav_index <= 0; // false

  if (typeof PluginArray !== "undefined") {
    plugins = navigator.plugins;
    if (plugins instanceof PluginArray);
  }

  mask = typeof MSPluginsCollection !== "undefined"; // 没有定义，就没有进一步检测
  mask = (+mask << 1) | 1;

  // 以下去非的操作均是测试是否存在该对象或者api
  !window.screen;
  !window.eval;
  !!navigator.connection; // NetworkInformation
  navigator.connection.rtt === 0; // 100, false

  // navigator.userAgentData.brands检测
  !navigator.userAgentData; // NavigatorUAData
  // navigator.userAgentData.brands得到如下数据：
  // [
  //         {
  //                 "brand": "Not)A;Brand",
  //                 "version": "8"
  //         },
  //         {
  //                 "brand": "Chromium",
  //                 "version": "138"
  //         },
  //         {
  //                 "brand": "Google Chrome",
  //                 "version": "138"
  //         }
  // ]
  navi_brands = navigator.userAgentData.brands;
  navi_brands === null;
  navi_brands === void 0;
  navi_brands.length === 0;

  // 屏幕测试
  window.innerWidth === 800; // 后续看了这个是否为true
  window.innerHeight === 600;
  window.outerWidth === 0; // 后续看了这个是否为true
  window.outerHeight === 0;

  // 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36
  !!navigator.appVersion; // 是否支持获取navigator.appVersion
  // HeadlessChrome检测
  // 这三项也形成了一个数组[false, false, false]
  navigator.appVersion.indexOf("HeadlessChrome") >= 0; // -1
  typeof navigator.userAgent !== "string";
  navigator.userAgent.indexOf("HeadlessChrome") >= 0;

  // 这里应该存在一个 << 1, 应该是这样，落掉了
  // 应该没拉下，因为上面补充了mask = (+mask << 1) | 1;
  //mask |= +(navigator.userAgent.indexOf("HeadlessChrome") >= 0) << 1;

  // webdriver相关检测
  is_hit_nav_webdriver = !navigator.webdriver === true; // false
  Object.getOwnPropertyDescriptor(navigator, "webdriver") !== void 0; // undefined

  // 对浏览器模拟器检测
  win_emulators = [
    "_selenium",
    "callSelenium",
    "_Selenium_IDE_Recorder",
    "_phantom",
    "__phantomas",
    "__nightmare",
    "callPhantom",
  ];

  is_hit_win_emu = win_emulators.some((e) => {
    if (window[e] || Object.getOwnPropertyDescriptor(window, e) !== undefined) {
      return true;
    }
  });

  is_hit_win_emu = false; // is_hit_win_emu必须为false
  // 继续下面检测

  doc_emu_cmds = [
    "__webdriver_evaluate",
    "__selenium_evaluate",
    "__webdriver_script_function",
    "__webdriver_script_func",
    "__webdriver_script_fn",
    "__fxdriver_evaluate",
    "__driver_unwrapped",
    "__webdriver_unwrapped",
    "__driver_evaluate",
    "__selenium_unwrapped",
    "__fxdriver_unwrapped",
    "_Selenium_IDE_Recorder",
    "_selenium",
    "calledSelenium",
    "_WEBDRIVER_ELEM_CACHE",
    "ChromeDriverw",
    "driver-evaluate",
    "webdriver-evaluate",
    "selenium-evaluate",
    "webdriverCommand",
    "webdriver-evaluate-response",
    "__webdriverFunc",
    "__webdriver_script_fn",
    "__$webdriverAsyncExecutor",
    "__lastWatirAlert",
    "__lastWatirConfirm",
    "__lastWatirPrompt",
    "$chrome_asyncScriptInfo",
    "$cdc_asdjflasutopfhvcZLmcfl_",
  ];

  is_hit_doc_emu = doc_emu_cmds.some((e) => {
    if (
      document[e] ||
      Object.getOwnPropertyDescriptor(document, e) !== undefined
    ) {
      return true;
    }
  });

  is_hit_doc_emu = false; // 同样is_hit_doc_emu必须为false

  // 必须均为false
  webdriver_detect = [is_hit_nav_webdriver, is_hit_win_emu, is_hit_doc_emu];
  webdriver_detect = webdriver_detect.filter((val) => {
    return val === true; // 没执行任何
  });

  mask |= +(webdriver_detect.length >= 3) << 2; // 结果还是为1

  // 和上面重复了??
  if (typeof PluginArray !== "undefined") {
    plugins = navigator.plugins;
    if (plugins instanceof PluginArray);
  }
  /// 重复略
  typeof MSPluginsCollection !== "undefined";

  !!window["_phantom"];
  !!window["callPhantom"];
  // !window['__nightmare']; // 跟太快了，这行不确定是否执行
  mask |= +!window.Audio << 3;

  // ##
  // 测试以下4项
  typeof window.globalThis["global"] !== "undefined";
  typeof window.globalThis["process"] === "undefined";
  "object" === "undefined";
  mask |=
    +(typeof window.globalThis["__non_webpack_require__"] !== "undefined") << 4;

  loc_href = location.href;
  re1 = RegExp("^((file|https?):\\/\\/localhost)", "i");
  re2 = RegExp(
    "^https?:\\/\\/([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})"
  );
  // 顺序执行取最后的值
  re1.test(loc_href); // false
  re2.test(loc_href); // false
  document.location !== window.location; // false
  mask |= +(location.valueOf(location) /* false*/ !== location) << 5;

  // 在一轮测试
  // 通过user agent测试是什么系统
  navigator.userAgent;
  osObj = Object.defineProperty({}, "name", {
    value: "Other",
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // 这里的fg_regs()全部是dy的vmp函数，这里无法具体化
  // 但是这些函数更确切说是变量是正则的集合
  osObj = Object.defineProperty(osObj, "isAndroid", {
    // 这些value对应正则表达式
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  osObj = Object.defineProperty(osObj, "isiOS", {
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  osObj = Object.defineProperty(osObj, "isLinux", {
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  osObj = Object.defineProperty(osObj, "isMacOS", {
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  osObj = Object.defineProperty(osObj, "isWindows", {
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  osObj = Object.defineProperty(osObj, "isHarmonyOS", {
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  osObj = Object.defineProperty(osObj, "isOther", {
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // osObj生成的是去掉is，并且按照字母排序的类似数组的东西
  // 抽取其中一个举例：
  // { name: "HarmonyOS", regs:['/droid ([\w.]+)\b.+(harmonyos)/i', '/OpenHarmony/i']}

  if (typeof globalThis["Symbol"] != "undefined") {
    !!globalThis["Symbol"].iterator.values; // 测试是否存在
  }

  // 执行  s n f e
  globalThis["Symbol"].iterator.values.call(osObj); // ArrayItetator

  obj1 = Object.defineProperty({}, "s", {
    // 似乎执行它得到ArrayIterator
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });
  // 执行完变成：任意项举例
  // { done: false, value: {name: "HarmonyOS", regs:['/droid ([\w.]+)\b.+(harmonyos)/i', '/OpenHarmony/i']}}

  obj1 = Object.defineProperty(obj1, "n", {
    // 执行iterator.next， 得到HarmonyOS()
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });
  // 这是程序中非 s n f e代码，
  // 取它的变量done的值然后取非，在取value
  // 在取regs
  // regs.some函数， some函数执行regs.test(userAgent), 测试匹配每一个reg
  // 重复调用n函数，去测试前面声明的osObj中的value的regs
  // 最后匹配到Windows，然后更新osObj.name = "Windows"

  obj1 = Object.defineProperty(Object, "f", {
    // 执行globalThis['Symbol'].iterator.return 释放资源， 释放后判断是否为undefined， null == undefined 为true， 释放后判断是否为undefined
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(obj1, "e", {
    // 这个函数似乎没执行??
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // 新一轮测试，测试是什么平台?
  navigator.Win32; // 可是没有定义, 后用的"Win32" ??
  platformObj = Object.defineProperty({}, "name", {
    value: "Other",
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // 这里的fg_regs()全部是dy的vmp函数，这里无法具体化
  platformObj = Object.defineProperty(platformObj, "isAndroid", {
    // 这些value对应正则表达式
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  platformObj = Object.defineProperty(platformObj, "isApple", {
    // 这些value对应正则表达式
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  platformObj = Object.defineProperty(platformObj, "isLinux", {
    // 这些value对应正则表达式
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  platformObj = Object.defineProperty(platformObj, "isWindows", {
    // 这些value对应正则表达式
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  platformObj = Object.defineProperty(platformObj, "isOther", {
    // 这些value对应正则表达式
    value: fg_regs(),
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  if (typeof globalThis["Symbol"] != "undefined") {
    !!globalThis["Symbol"].iterator.values; // 测试是否存在
  }

  globalThis["Symbol"].iterator.values.call(platformObj);

  // 同样 定义 s n f e
  obj1 = Object.defineProperty({}, "s", {
    // 似乎执行它得到ArrayIterator
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(obj1, "n", {
    // 执行iterator.next
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });
  // 这是程序中非 s n f e代码，
  // 取它的变量done的值然后取非，在取value
  // 在取regs
  // regs.some函数， some函数执行regs.test("Win32"), 测试匹配每一个reg
  // 重复调用n函数，去测试前面声明的osObj中的value的regs
  // 最后匹配到Windows，然后更新platformObj.name = "Windows"

  // f函数取U[8] U[9]都是false，这两个没跟，不知道怎么得到的
  obj1 = Object.defineProperty(Object, "f", {
    // 执行globalThis['Symbol'].iterator.return 释放资源， 释放后判断是否为undefined， null == undefined 为true， 释放后判断是否为undefined
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(obj1, "e", {
    // 这个函数似乎没执行??
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // 取osObj.isXXX
  osObj.isWindows; // 得到其对应的fg函数, 执行这个函数
  platformObj.isWindows; // 得到其对应的fg函数, 执行这个函数
  // 取platformObj.isXXX
  // 两个isWindows函数执行逻辑相同，都是下面这行代码; 其他相同，如isLinux返回Linux
  osObj.name === "Windows";
  platformObj.name === "Windows"; // true, 但还是对true取反，还是变成了false
  // 最终生成了5个false，逐个判断后无条件跳转了
  // 把最后一个false转换为数字， 即+false

  test_ret = [false, false, false, false, false];
  mask |= +test_ret[4] << 6;

  // 至此 U[16] = mask = 1，U[16]就是这样来的

  // ...
}

// 鼠标轨迹判断，防作弊
function envTrackU17() {
  // J132_get5_vr // 之前全局的json结构里面保存着aid，pageId等
  // 取其属性track得
  track = {
    mode: 0,
    delay: 300,
    paths: [],
  };
  track["mode"] !== 0; // false
  // J132_get6_N; 指令长度21，无参
  // 里面再次进入U18 vm， 指令长度82， 无参
  // J232_U 即为：
  // n :{ front:0,
  //   items:[{ // 长度为401，但没有第二项以后的元素
  //           "x": 211,
  //           "y": 1,
  //           "ts": 1763713216251
  //       }, {
  //           "x": 656,
  //           "y": 111,
  //           "ts": 1763713216369
  //       }],
  //     rear:2,
  //     trigger:2
  //  }
  // 大循环
  // 取n.data 不知道为什么是一个vm函数，长度为67，无参，然后进入这个函数
  // n.isEmpty() 这个还是vm函数，长度为8，无参
  // 循环1
  // n.front === n.rear // false， 取data，否则就是没有数据，返回
  // ta = []
  // front = n.front
  // ta.push(items[front])
  // front += 1;
  // 循环2
  // n.length() 是个vm函数，指令长度6，无参 逻辑是n.items.length 返回401
  // front %= n.items.length // 即 1 %= 401 值为1
  // rear = n.rear
  // 继续循环1的位置
  // front !== rear // true
  // ta.push(items[front])
  // front += 1;
  // 继续循环2的位置
  // n.length() 是个vm函数，指令长度6，无参 逻辑是n.items.length 返回401
  // 略
  // 在front !== rear比较时为false退出函数
  // 得到数组ta = [
  //     {
  //         "x": 211,
  //         "y": 1,
  //         "ts": 1763713216251
  //     },
  //     {
  //         "x": 656,
  //         "y": 111,
  //         "ts": 1763713216369
  //     }
  // ]
  // ta.length === 0
  // ta.length === 1
  // tv = 0
  // ta.reduce 是vm函数，长度为79
  // x = Math.pow([(ta[1].x - ta[0].x), 2])
  // y = Math.pow((ta[1].y - ta[0].y), 2])
  // rx = Math.sqrt(x)
  // ts = ta[1].ts - ta[0].ts;
  // rx = rx / ts;
  // tv += rx;
  // len = ta.length - 1;
  // tv = (tv / len) > 18; // false, 返回0
  // 进入U19 vm函数，长度24，无参
  // J232_get1_I

  // L1
  // 继续取n.data，走大循环逻辑
  // 此时n的items的前两项不见了，其他值均为0了，因此取data应该什么都没取到，返回一个空数组[]ta
  // ta.length 此时为0了，和0比较相等了，
  // 下面直接取的
  // v1 = 1, v2 = 2, v1 = v1 << v2 等于4，作为返回值

  // tv |= 4
  // 进入U20 vm函数，长度82，无参
  // J232_get3_M
  // 同上面L1逻辑
  // 但  v1 = 1, v2 = 3, v1 = v1 << v2 等于8，作为返回值

  // 在 tv |= 8, 最后调试时为12
  U17 = 12; // 普通为14
}

// 函数特征检测，某些函数的属性作为函数特征保存，而这些属性不用于运算逻辑
// 堆栈检测，是否包含非dy js文件、函数，特征等
// host检测，是否包含localhost，或者类似127.0.0.1这种数字host
function envDomPrintU37() {
  u37 = new Array();
  // triger map
  (J700Trigger = 0), (J700ItemsLength = 401);
  J700Trigger %= J700ItemsLength;
  J700Trigger %= 256;
  J700Trigger &= 255;

  (J770Trigger = 0), (J770ItemsLength = 101);
  J770Trigger %= J770ItemsLength;
  J770Trigger %= 256;
  J770Trigger &= 255;

  (J690Trigger = 0), (J690ItemsLength = 201);
  J690Trigger %= J690ItemsLength;
  J690Trigger %= 256;
  J690Trigger &= 255;

  (J132Trigger = 0), (J132ItemsLength = 101);
  J132Trigger %= J132ItemsLength;
  J132Trigger %= 256;
  J132Trigger &= 255;

  u37[0] = J700Trigger; // 0
  u37[1] = J770Trigger; // 0
  u37[2] = J690Trigger; // 0
  u37[3] = J132Trigger; // 0

  if (programVersion === G_DEBUG) {
    console.log("xxxxxxxxxx::: ", u37);
  }

  _u2 = u37; // 调试跟踪时对应执行时栈U2

  m = Array.isArray.apply(Array, [u37]); // 程序返回true，是一个数组对象

  if (programVersion === G_DEBUG) {
    console.log("xxxxxxxxxx::: ", m);
  }

  _u3 = u37; // 调试跟踪时对应执行时栈U3
  _u4 = u37[0]; // 调试跟踪时对应执行时栈U4
  _u5 = u37[1]; // 调试跟踪时对应执行时栈U5
  _u6 = u37[2]; // 调试跟踪时对应执行时栈U6
  _u7 = u37[3]; // 调试跟踪时对应执行时栈U7

  (v0 = document.all), (compareV = undefined);
  v0 = v0 === compareV; // 结果为false
  compareV = null;
  v1 = v0 === compareV; // 结果为false
  v2 = document.all.__proto__;
  v3 = HTMLAllCollection;
  compareV = v3.prototype;
  v2 = v2 !== compareV; // 结果为false

  v4 = document.all.toString.apply(document.all, []);

  v3 = v3 !== v4; // 结果为false, 但我这里不知道哪里拉下来，总返回true

  v4 = document["all"];
  v5 = document["all"];
  v4 = v4 !== v5;

  docEnvTest = [v0, v1, v2, !v3, v4]; // 这里v3是false, 这里手动改一下 !v3

  // 如果检测到，某些逻辑就不走了，下面代码是受影响的逻辑，v[p]即计算的false或者true，否则继续
  // 其他包括上述都同理
  // 31 === t ? (U = o[a++], v[p] ? a += U : --p) : (w = v[p--], v[p] = v[p] < w)
  if (programVersion === G_DEBUG) {
    console.log("xxxxxxxxxx::: ", docEnvTest);
  }

  docEnvTest = docEnvTest.filter((val) => {
    return val === true; // 这里实际会触发执行vmp函数
  });

  if (!docEnvTest.length) {
    // 即没有true的选项
    _u8 = false;
  }

  pattern1 = [RegExp, "^((file|https?):\\/\\/localhost)", "i"];
  G = [void 0, pattern1[1], pattern1[2]];
  reg1 = new (Function.bind.apply(pattern1[0], G))();

  pattern2 = [
    RegExp,
    "^https?:\\/\\/([0-9]{1,3}(\\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})",
    "i",
  ];
  G = [void 0, pattern2[1], pattern2[2]];
  reg2 = new (Function.bind.apply(pattern2[0], G))();

  pattern3 = [
    RegExp,
    "^(Module._compile|Object.Module|Module.load|Function.Module._load)",
    "i",
  ];
  G = [void 0, pattern3[1], pattern3[2]];
  reg3 = new (Function.bind.apply(pattern3[0], G))();
  if (programVersion === G_DEBUG) {
    console.log("xxxxxxxxxx ::: ", reg1, reg2, reg3);
  }
  // Error: Fail to construct 'URL': Invalid URL
  // at d (https://lf-c-flwb.bytetos.com/obj/rc-client-security/web/stable/1.0.1.19-fix.01/bdms.js:2:131912)
  // at X (https://lf-c-flwb.bytetos.com/obj/rc-client-security/web/stable/1.0.1.19-fix.01/bdms.js:2:131083)
  // at XMLHttpRequest.n (https://lf-c-flwb.bytetos.com/obj/rc-client-security/web/stable/1.0.1.19-fix.01/bdms.js:2:130952)
  // at XMLHttpRequest.<anonymous> (https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:306874)
  // at XMLHttpRequest.l [as send] (https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:299704)
  // at https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:345123
  // at new Promise (<anonymous>)
  // at https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:343014
  // at https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:349566
  // at l.request (https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:347911)

  // 类似上面的错误
  // 下面这行代码，我执行不了
  //err = Error.apply(void 0, "Fail to construct 'URL': Invalid URL");
  // 不过它等价于下面代码，都是在当前抛出一个异常
  err = new Error("Fail to construct 'URL': Invalid URL");

  var isErrNull = false;
  if (err === undefined || err === 0) {
    isErrNull = true;
  }
  // estack = err.toString().split("\n"); // 这里执行不了，就换一下，模拟一下代码吧
  estack =
    "Error: Fail to construct 'URL': Invalid URL\n " +
    "at d (https://lf-c-flwb.bytetos.com/obj/rc-client-security/web/stable/1.0.1.19-fix.01/bdms.js:2:131912)\n " +
    "at X (https://lf-c-flwb.bytetos.com/obj/rc-client-security/web/stable/1.0.1.19-fix.01/bdms.js:2:131083)\n " +
    "at XMLHttpRequest.n (https://lf-c-flwb.bytetos.com/obj/rc-client-security/web/stable/1.0.1.19-fix.01/bdms.js:2:130952)\n " +
    "at XMLHttpRequest.<anonymous> (https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:306874)\n " +
    "at XMLHttpRequest.l [as send] (https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:299704)\n " +
    "at https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:345123\n " +
    "at new Promise (<anonymous>)\n " +
    "at https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:343014\n " +
    "at https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:349566\n " +
    "at l.request (https://lf-webcast-platform.bytetos.com/obj/webcast-platform-cdn/webcast/douyin_live/9417.f277fc75.js:4552:347911)";

  if (programVersion === G_DEBUG) {
    console.log("xxxxxxxxxx::: ", estack);
  }
  estack = estack.split("\n");
  if (programVersion === G_DEBUG) {
    console.log("xxxxxxxxxx::: ", estack);
  }

  for (var i = 0; i < estack.length; i++) {
    test = estack[i];
    testUrl1 = reg1.test(test);
    testUrl2 = reg2.test(test);
    testUrl3 = reg3.test(test);
    if (programVersion === G_DEBUG) {
      console.log("xxxxxxxxxx::: ", testUrl1, testUrl2, testUrl3);
    }
  }
  // 返回值是false
  errEnvTest = [isErrNull, testUrl1, testUrl2, testUrl3];

  screenEvn = [false, false, false];
  var screen = Object.getOwnPropertyDescriptor.apply(Object, [
    window,
    "screen",
  ]);
  val = screen.value;
  val = !!val;

  var scrLen = Object.keys.apply(Object, [window.screen]).length; // 结果为[]

  if (screen === null || screen === undefined || val || scrLen != 0) {
    // 应该是Error, 检测
    screenEvn[0] = true;
  }

  var scr = window.screen;
  if (scr === null || screen === undefined) {
    // err
    screenEvn[1] = true;
  }

  scr = scr.__proto__;
  keys = Object.keys.apply(Object, [scr]);
  if (keys.length === 0) {
    // err
    screenEvn[2] = true;
  }

  var screenEnvTest = screenEvn.filter((val) => {
    return val === true;
  });

  if (screenEnvTest > 0) {
    // err
  }

  windowEnv = !!window.cefSharp; // 检测
  windowEnv = !!window.window; // // 检测
  windowEnv = !!window.eoapi; // // 检测
  windowEnv = !!window.eoWebBroserDispatcher; // // 检测

  // 调试时这个大对象对应U5
  objp = Object.defineProperty({}, "name", {
    value: "Other",
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // 这里的fg_regs()全部是dy的vmp函数，这里无法具体化
  objp = Object.defineProperty(objp, "isHuaWei", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isOpera", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isFirefox", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isEdge", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isIE", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isChrome", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isSafari", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  objp = Object.defineProperty(objp, "isOther", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(Object, "s", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(Object, "n", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(Object, "f", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  obj1 = Object.defineProperty(Object, "e", {
    value: "", //fg_regs()
    writable: !0,
    configurable: !0,
    enumerable: !0,
  });

  // 先后执行 s, n, e, f
  // 匹配浏览器的正则，可能一个浏览器有多个正则
  // 先匹配的HuaWei，后匹配Chrome成功, 最后填充这个对象的name为Chrome
  exRegs = [];

  // 这些都粗略跑过了，具体逻辑不还原了，很繁琐，频繁调用vmp函数
  // 在调用isXXXX方法取和name做对比，isXXXX方法返回的是对应浏览器的名字
  isHuaWei = _u9 = false; // _u9
  isHuaWeiS = _u10 = false; // _u10
  isHuaWeiN = _u11 = false; // _u11
  isHuaWeiE = _u12 = false; // _u12
  isHuaWeiF = _u13 = false; // _u13
  isChrome = _u14 = true; // _u14
  // 略

  _u15 = +_u14;
  _u15 = (+_u8 << 1) | +_u15;
  _u15 = (+_u9 << 2) | +_u15;
  _u15 = (+_u10 << 3) | +_u15;
  _u15 = (+_u11 << 4) | +_u15;
  _u15 = (+_u12 << 5) | +_u15;
  _u15 = (+_u13 << 6) | +_u15;
  _u15 = (+_u14 << 7) | +_u15; // 1 << 7 = 128, 128 | 1 = 129, 最后_u15为129

  // 其实得到如下的数据
  // 1: [0,0,0,0] ; 对应上面_u2
  // 2: [0,0,0,0] ; 对应上面_u3
  // 3:0, 4:0, 5:0, 6:0 ; 对应上面_u4 - _u7
  // 7 - 13 均为false ; 对应上面的_u8 - _u14

  // 这里是取_u4 - _u4，然后再concat上_u15，即得到[0,0,0,0,129]
  U37 = u37.concat([_u15]);

  console.log("U37 ::::: ", U37);
  return U37;
}

function _random(inObj) {
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


function decode_transform(narray) {
    const E1 = 145, E2 = 110, E3 = 66, E4 = 189, E5 = 44, E6 = 211;
    let array = [];

    let i = 0;

    // 处理完整的 4 字节块（对应原来的 3 字节）
    while (i + 3 < narray.length) {
        let a = narray[i];
        let b = narray[i + 1];
        let c = narray[i + 2];
        let d = narray[i + 3];

        // 关键逆公式（由 E1~E6 组合恢复 A0,A1,A2）
        let A0 = (a & E2) | (d & E1);
        let A1 = (b & E4) | (d & E3);
        let A2 = (c & E6) | (d & E5);

        array.push(A0, A1, A2);
        i += 4;
    }

    // 剩余尾部（1 或 2 字节）
    // 你的尾部逻辑是：
    // push(array[i]);
    // if (array[i+1] != undefined) push(array[i+1]);
    //
    // 所以逆向需要按 1:1 拆回
    let remain = narray.length - i;

    if (remain === 1) {
        array.push(narray[i]);
    } else if (remain === 2) {
        array.push(narray[i], narray[i + 1]);
    }

    return array;
}

