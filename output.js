//Tue Dec 23 2025 05:48:10 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const g = require("axios"),
  h = require("crypto"),
  i = "TOKEN",
  d = "ddd_NICKNAMES",
  w = "bWCsuIFoK";
function x(_0x346a73, _0xbaa222 = "INFO", _0x4443bc = null) {
  const _0x1ab435 = {
      "INFO": "[32m",
      "WARN": "[33m",
      "ERROR": "[31m",
      "SUCCESS": "[35m",
      "CHECK": "[36m"
    },
    _0x3b6462 = _0x1ab435[_0xbaa222] || "[37m",
    _0xf01e65 = _0x4443bc ? "[" + _0x4443bc + "] " : "";
  console.log(_0x3b6462 + "[" + _0xbaa222 + "] " + _0xf01e65 + _0x346a73 + "[0m");
}
function b(_0x3fcd43) {
  return h.createHash("md5").update(_0x3fcd43).digest("hex").toUpperCase();
}
function j(_0x37e62c = 8) {
  const _0xd5167 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x166df2 = "";
  for (let _0x1467bf = 0; _0x1467bf < _0x37e62c; _0x1467bf++) {
    _0x166df2 += _0xd5167.charAt(Math.floor(Math.random() * _0xd5167.length));
  }
  return _0x166df2;
}
function l(_0x1ed9a0, _0x50dd48, _0x153bf6) {
  const _0x1fc77f = "aB3xK9pQ2sL8mZ1nR7tY4uW0vJ5cH6gF",
    _0x4c1d22 = "randomNumber=" + _0x50dd48 + "&timeStamp=" + _0x1ed9a0 + "&videoId=" + _0x153bf6 + "&" + _0x1fc77f + "=";
  return h.createHash("md5").update(_0x4c1d22).digest("hex").toLowerCase();
}
function f(_0x50a671 = null) {
  const _0x51ae88 = {
    "host": "gw.jiudageapp.com",
    "platform": "Android",
    "version": "v1.3.0",
    "content-type": "application/json; charset=UTF-8",
    "user-agent": "okhttp/4.10.0"
  };
  _0x50a671 && (_0x51ae88.authorization = _0x50a671.trim());
  return _0x51ae88;
}
async function k(_0x5a9169, _0x5edd8a) {
  let _0x147479 = {
    "备注": _0x5edd8a,
    "状态": "❌ 失败",
    "原因": ""
  };
  try {
    {
      {
        x("🚀 正在登录...", "CHECK", _0x5edd8a);
        const _0x275a99 = _0x5a9169,
          _0x35b679 = f(_0x275a99),
          _0x5f269e = await g.post("https://gw.jiudageapp.com/api/web/member/getMemberInfo", {}, {
            "headers": _0x35b679,
            "timeout": 30000
          });
        if (!_0x5f269e.data || !_0x5f269e.data.result) throw new Error("获取用户信息失败");
        const _0x497664 = _0x5f269e.data.result.upShardCode;
        x("🔍 当前账号上级邀请码: " + (_0x497664 || "无"), "INFO", _0x5edd8a);
        if (_0x497664 !== w) return x("🚫 邀请人校验失败！预期: " + REQUIRED_UP_UP_SHARD_CODE + "，实际: " + _0x497664, "ERROR", _0x5edd8a), _0x147479["状态"] = "⏩ 已跳过", _0x147479["原因"] = "非指定邀请人账号", _0x147479;
        x("✨ 校验通过，开始执行任务", "SUCCESS", _0x5edd8a);
        const _0x4e2cfd = await g.post("https://gw.jiudageapp.com/api/web/member/getMemberCenterInfo", {}, {
            "headers": _0x35b679,
            "timeout": 30000
          }),
          _0x349c09 = _0x4e2cfd.data.result || {};
        let _0x3cab87 = _0x349c09.watchedVideoCount || 0;
        const _0x15deb1 = _0x349c09.videoCount || 0;
        x("📊 今日进度: " + _0x3cab87 + "/" + _0x15deb1, "INFO", _0x5edd8a);
        if (_0x3cab87 >= _0x15deb1 && _0x15deb1 > 0) return _0x147479["状态"] = "✅ 已完成", _0x147479;
        for (let _0x17a483 = _0x3cab87; _0x17a483 < _0x15deb1; _0x17a483++) {
          {
            const _0x3f0934 = await g.post("https://gw.jiudageapp.com/api/web/member/get/internalAdvertisement", {}, {
                "headers": _0x35b679,
                "timeout": 30000
              }),
              _0x2a02f3 = _0x3f0934.data.result ? _0x3f0934.data.result.id : null;
            if (!_0x2a02f3) {
              {
                x("无法获取广告ID，跳过", "WARN", _0x5edd8a);
                continue;
              }
            }
            x("📺 模拟观看广告 ID: " + _0x2a02f3 + " (" + 100 + "秒)", "INFO", _0x5edd8a);
            await new Promise(_0x163ba5 => setTimeout(_0x163ba5, 100000));
            const _0x2a8298 = Date.now().toString(),
              _0xe28a58 = j(8),
              _0x308659 = l(_0x2a8298, _0xe28a58, _0x2a02f3),
              _0x56711d = {
                ..._0x35b679,
                "timestamp": _0x2a8298,
                "randomnumber": _0xe28a58,
                "sign": _0x308659,
                "phoneinfo": "MANUFACTURER:Xiaomi,MODEL:Redmi K20 Pro,DEVICE:raphael,VERSION.RELEASE:11,"
              },
              _0x34f987 = await g.post("https://gw.jiudageapp.com/api/web/newPeopleUnlock/receiveWelfareNineteen?videoId=" + _0x2a02f3, {}, {
                "headers": _0x56711d,
                "timeout": 30000
              });
            _0x34f987.data && _0x34f987.data.code === 200 ? x("💰 贡献值领取成功", "SUCCESS", _0x5edd8a) : x("❌ 领取失败: " + _0x34f987.data?.["message"], "WARN", _0x5edd8a);
            _0x17a483 < _0x15deb1 - 1 && (await new Promise(_0x23fd55 => setTimeout(_0x23fd55, 5000)));
          }
        }
        _0x147479["状态"] = "✅ 成功";
        return _0x147479;
      }
    }
  } catch (_0x1ce2e7) {
    x("💥 异常: " + _0x1ce2e7.message, "ERROR", _0x5edd8a);
    _0x147479["原因"] = _0x1ce2e7.message;
    return _0x147479;
  }
}
async function a() {
  const _0xf23d0b = process.env[i] || "";
  if (!_0xf23d0b) return x("未设置环境变量 " + i, "ERROR");
  const _0x4f2727 = _0xf23d0b.split("&"),
    _0x1e9e30 = (process.env[d] || "").split("-");
  x("==== 启动校验任务 (锁定邀请人: " + w + ") ====", "CHECK");
  const _0x2c7970 = [];
  for (let _0x24de91 = 0; _0x24de91 < _0x4f2727.length; _0x24de91++) {
    {
      const [_0x125031, _0x5e31f1] = _0x4f2727[_0x24de91].split("#"),
        _0x373c8e = _0x125031,
        _0x192851 = _0x5e31f1 ? _0x5e31f1.trim() : "账号" + (_0x24de91 + 1),
        _0x3fc26d = await k(_0x373c8e, _0x192851);
      _0x2c7970.push(_0x3fc26d);
      console.log("-".repeat(30));
    }
  }
  console.log("\n" + "=".repeat(60));
  console.log("🏁 最终执行报告");
  console.table(_0x2c7970);
}
a().catch(console.error);