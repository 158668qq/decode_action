//Tue Dec 23 2025 04:02:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const j = require("axios");
const l = require("crypto");
const P = require("querystring");
const k = require("fs");
const E = require("path");
const U = E.join(__dirname, ".ddd_run_status.json");
const b = {
  WATCH_DURATION_MODE: "auto",
  FIXED_WATCH_SEC: 30,
  INTERVAL_SEC: 5,
  RETRY_COUNT: 3,
  TIMEOUT: 30000,
  ACCOUNT_INTERVAL_SEC: 30,
  SUBMIT_METHOD: "POST",
  PROFIT_WAIT_SEC: 4,
  DEBUG_MODE: false
};
const H = "Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36";
process.env.DDD_DEBUG && (b.DEBUG_MODE = process.env.DDD_DEBUG.toLowerCase() === "true" || process.env.DDD_DEBUG === "1", console.log("[配置] DEBUG模式: " + (b.DEBUG_MODE ? "已开启" : "已关闭")));
function Q() {
  const C = new Date();
  const Y = C.getFullYear();
  const q = String(C.getMonth() + 1).padStart(2, "0");
  const f = String(C.getDate()).padStart(2, "0");
  return Y + "-" + q + "-" + f;
}
function X() {
  if (!k.existsSync(U)) {
    {
      return {};
    }
  }
  try {
    {
      const q = k.readFileSync(U, "utf-8");
      const f = JSON.parse(q);
      const T = Q();
      const F = {};
      for (const [s, B] of Object.entries(f)) {
        {
          B.date === T && (F[s] = B);
        }
      }
      if (Object.keys(F).length !== Object.keys(f).length) {
        {
          R(F);
        }
      }
      return F;
    }
  } catch (a) {
    {
      c1("加载运行状态失败: " + a.message, "WARN");
      return {};
    }
  }
}
function R(t) {
  try {
    {
      k.writeFileSync(U, JSON.stringify(t, null, 2), "utf-8");
    }
  } catch (q) {
    c1("保存运行状态失败: " + q.message, "WARN");
  }
}
function A(t) {
  const Y = X();
  return Y[t]?.["completed"] === true;
}
function c0(t) {
  const Y = X();
  const q = new Date();
  Y[t] = {
    date: Q(),
    completed: true,
    finishTime: q.toTimeString().split(" ")[0]
  };
  R(Y);
  c1("账号已标记为今日完成，下次运行将跳过", "INFO");
}
function c1(f, T = "INFO") {
  const B = {
    hour12: false
  };
  const x = new Date().toLocaleTimeString("zh-CN", B);
  const i = {
    SUCCESS: "[32m",
    ERROR: "[31m",
    WARN: "[33m",
    INFO: "[36m",
    CHECK: "[35m"
  };
  const V = {
    SUCCESS: "✅",
    ERROR: "❌",
    WARN: "⚠️",
    INFO: "ℹ️",
    CHECK: "🔍"
  };
  const w = i[T] || "[36m";
  const o = V[T] || "ℹ️";
  const p = "[0m";
  console.log(w + "[" + x + "] " + o + " " + f + p);
}
function c2(t) {
  const Y = Object.entries(t).filter(([, T]) => {
    {
      const F = String(T).trim();
      return T != null && F !== "";
    }
  });
  const q = Y.sort(([T], [F]) => T.localeCompare(F));
  const f = q.map(([T, F]) => P.escape(T) + "=" + P.escape(String(F))).join("&");
  return l.createHash("md5").update(f, "utf8").digest("hex");
}
function c3(C) {
  return l.createHash("md5").update(C).digest("hex").toUpperCase();
}
function c4(t) {
  const C = {
    ZJmmx: "utf-8",
    KuGvh: function (Y, q, f) {
      return Y(q, f);
    },
    QPJQD: "WARN",
    wcCGD: function (Y, q, f) {
      return Y(q, f);
    },
    xZjFy: function (Y, q) {
      return Y + q;
    },
    ivvPZ: "ERROR",
    EEvHb: "========================================\n",
    APQuS: function (Y, q) {
      return Y === q;
    },
    mCNhy: "EwwAd",
    nABUO: "jCyci",
    zLgvL: function (Y, q) {
      return Y === q;
    },
    tbOmK: "LFkSa",
    SKNwD: "FayaZ",
    nVNyi: "authorization",
    cgKwp: function (Y, q) {
      return Y === q;
    },
    cPLqg: function (Y, q) {
      return Y !== q;
    },
    qAIlw: "iIHUg",
    mErQR: "fRHtx",
    TMiWs: function (Y, q) {
      return Y === q;
    },
    EMtYz: "cEwYw",
    zHuqc: "nCSmN",
    hrzcT: "password",
    gSxZO: "unknown"
  };
  if (t.includes("#")) {
    {
      const q = t.split("#");
      if (q.length === 2) {
        {
          return "authorization";
        }
      }
      if (q.length === 3) {
        {
          if (q[1].length === 11 && /^\d+$/.test(q[1])) {
            {
              return "password";
            }
          }
        }
      }
    }
  }
  return "unknown";
}
async function c5(T, F, s) {
  const B = {
    fiJQC: "广告信息不完整",
    GHLXw: function (x, d, i) {
      return x(d, i);
    },
    dbxUa: "WARN",
    LSKEv: function (x, d, i) {
      return x(d, i);
    },
    nzBkk: "[DEBUG] 完整返回信息:",
    TzYNa: function (x, d, i) {
      return x(d, i);
    },
    BsuWe: "今日任务已完成！",
    EcHUo: "SUCCESS",
    zzCzf: function (x, d) {
      return x(d);
    },
    Egwbx: function (x) {
      return x();
    },
    YuLLg: function (x) {
      return x();
    },
    HrOnm: "INFO",
    VsFkb: function (x, d, i) {
      return x(d, i);
    },
    zankP: function (d, i) {
      return d !== i;
    },
    PlUyw: "gOXDA",
    TOmXv: "Android",
    fqKra: "v1.5.6",
    Gdbog: "application/json",
    REgNV: function (x, d, i, a) {
      return x(d, i, a);
    },
    wokvF: "POST",
    EsNKW: function (d, i) {
      return d === i;
    },
    vjAUm: function (d, i) {
      return d === i;
    },
    tNRsO: "QSOPZ",
    tcBNm: function (d, i) {
      return d === i;
    },
    YWtIu: function (d, i) {
      return d === i;
    },
    glloM: "KvMXv",
    SOvRv: "zHIBy",
    JVVFn: "锁头码验证通过",
    llziS: "PiOMx",
    ZpsCP: "QZHEB",
    HhOpk: function (d, i) {
      return d !== i;
    },
    EBHwl: "YotFC",
    hqjFL: "JKNPD",
    YoRdO: "获取会员信息失败",
    Zxkfp: function (d, i) {
      return d === i;
    },
    FqzJd: "zFnGE"
  };
  try {
    {
      const i = {
        platform: "Android",
        version: "v1.5.6",
        Authorization: T,
        "User-Agent": F,
        "Content-Type": "application/json"
      };
      const a = await c8("https://gw.jiudageapp.com/api/web/member/getMemberInfo", i, "POST");
      if (a.code === 200) {
        {
          const V = a.result || {};
          const w = V.upShardCode || "";
          if (!s || w === s) {
            {
              const p = {
                success: true,
                message: "锁头码验证通过",
                currentCode: w
              };
              return p;
            }
          } else {
            {
              const S = {
                success: false,
                message: "锁头码验证失败: 当前锁头码 " + w + " 需要: " + s,
                currentCode: w,
                requiredCode: s
              };
              return S;
            }
          }
        }
      } else {
        {
          const n = {
            success: false,
            message: a.message || "获取会员信息失败"
          };
          return n;
        }
      }
    }
  } catch (m) {
    {
      const L = {
        success: false,
        message: "锁头码验证异常: " + m.message
      };
      return L;
    }
  }
}
async function c6(T, F, s) {
  try {
    {
      const x = c3(F);
      const i = {
        phone: T,
        password: x
      };
      const V = {
        platform: "Android",
        version: "v1.5.6",
        "User-Agent": s,
        "Content-Type": "application/json"
      };
      const w = await c8("https://gw.jiudageapp.com/api/web/auth/pwdLogin", V, "POST", i);
      if (w.code === 200) {
        {
          const p = w.result || {};
          const S = p.upShardCode || "";
          const u = p.token || "";
          const Z = {
            success: true,
            message: "密码验证成功",
            userInfo: p,
            upShardCode: S,
            token: u
          };
          return Z;
        }
      } else {
        {
          const n = {
            success: false,
            message: w.message || "密码登录失败"
          };
          return n;
        }
      }
    }
  } catch (L) {
    {
      const W = {
        success: false,
        message: "密码登录异常: " + L.message
      };
      return W;
    }
  }
}
function c7() {
  return Math.floor(Math.random() * 1000000).toString();
}
async function c8(t, C, Y = "POST", q = null) {
  const f = {
    oHwPT: function (F, s) {
      return F * s;
    },
    ZEQbg: function (F, s) {
      return F === s;
    },
    PRdKH: "atsgF",
    vUzPb: "fFlja",
    tlwRO: "Content-Type",
    ITrRz: "content-type",
    XyXie: function (F, s, B) {
      return F(s, B);
    },
    kzEyJ: function (F, s) {
      return F + s;
    },
    bGUMC: "ERROR",
    VawEu: "md5",
    HbNWB: "hex",
    MJtfR: function (F, s) {
      return F(s);
    },
    SzGkC: function (F, s) {
      return F != s;
    },
    SRVUf: function (F, s) {
      return F !== s;
    },
    fJpkH: function (F, s) {
      return F >= s;
    },
    tjMgt: function (F, s) {
      return F === s;
    },
    EqWhi: "rKnao",
    ZStXr: "eEXXY",
    GyNna: "Brlni",
    QBLPV: "POST",
    HJkqc: function (F, s) {
      return F || s;
    },
    VFpaj: function (F, s) {
      return F === s;
    },
    FKnCA: "odHZG",
    DuqCj: "FGpem",
    ahbAc: "REIty",
    bBeij: function (F, s) {
      return F === s;
    },
    IbmBH: function (F, s) {
      return F === s;
    },
    mipbu: "SmtwN",
    mQInA: "QfVYC",
    PkFbv: "WARN"
  };
  let T = b.RETRY_COUNT;
  while (T >= 0) {
    {
      try {
        {
          const F = {
            url: t,
            method: Y,
            headers: C,
            data: Y === "POST" ? q || "" : undefined,
            timeout: b.TIMEOUT,
            validateStatus: B => B >= 200 && B < 600
          };
          if (Y === "POST" && (!q || q === "")) {
            {
              F.transformRequest = [(x, d) => {
                {
                  delete d["Content-Type"];
                  delete d["content-type"];
                  return x;
                }
              }];
            }
          }
          const s = await j(F);
          return s.data;
        }
      } catch (d) {
        {
          const a = d.response?.["data"]?.["message"] || d.message;
          if (T === 0) {
            {
              throw new Error("请求失败：" + a);
            }
          }
          c1("请求失败（剩余" + T + "次重试），等待5秒...", "WARN");
          await new Promise(w => setTimeout(w, 5000));
          T--;
        }
      }
    }
  }
}
async function c9(t) {
  c1("等待 " + t + " 秒...", "INFO");
  await new Promise(Y => setTimeout(Y, t * 1000));
}
async function cc(C) {
  const q = (await c8("https://gw.jiudageapp.com/api/web/member/getMemberCenterInfo", C)) || {};
  const {
    result: f
  } = q;
  const T = {
    current: f?.["contribution"] || 0,
    total: f?.["unlockContribution"] || 0,
    watched: f?.["watchedVideoCount"] || 0,
    totalTask: f?.["videoCount"] || 0,
    taskState: f?.["unlockTaskState"] || 0,
    _raw: q
  };
  return T;
}
async function cg(C, Y, q) {
  const f = {
    UurUo: function (F, s) {
      return F * s;
    },
    BhJyE: function (F, s) {
      return F === s;
    },
    jINBS: "锁头码验证通过",
    cxJya: function (F, s, B) {
      return F(s, B);
    },
    XlKZK: "未找到 DDD 环境变量",
    EIIAm: "ERROR",
    XxfCf: function (F, s, B) {
      return F(s, B);
    },
    vEMBR: "请检查: 1.青龙面板中是否有DDD环境变量",
    rRzSX: "password",
    atDEf: "领取失败",
    PadUE: function (F) {
      return F();
    },
    spZbN: "true",
    GUbgj: function (F, s) {
      return F === s;
    },
    QrOKB: "已开启",
    qgmoF: "已关闭",
    uwnIR: "Content-Type",
    eesri: "content-type",
    EHZPv: "获取会员信息失败",
    utSrw: "zh-CN",
    mpmuP: "[32m",
    ZYRPb: "[31m",
    DAQPx: "[33m",
    nHjIl: "[36m",
    OTNZs: "[35m",
    aFKki: "INFO",
    nkzAY: "[0m",
    nTPcB: "utf-8",
    AZwVK: "WARN",
    ynSdT: function (F, s) {
      return F(s);
    },
    JLKVG: function (F, s) {
      return F + s;
    },
    pWmiU: function (F, s) {
      return F(s);
    },
    XRptr: function (F, s, B) {
      return F(s, B);
    },
    SrLLr: "任务状态异常（非进行中状态）",
    NlZBF: "[DEBUG] 完整返回信息:",
    pDSMj: "authorization",
    vfWGa: function (F, s, B) {
      return F(s, B);
    },
    OsIoH: "md5",
    RSFIw: "hex",
    xmkay: function (F, s) {
      return F(s);
    },
    adRkf: "GUCsk",
    PKYmp: function (F, s, B) {
      return F(s, B);
    },
    aOrJk: "该账号今日已完成任务，跳过执行",
    vkyzZ: "========================================\n",
    vNhKj: "DKuWd",
    TDIuF: "gw.jiudageapp.com",
    QXUvx: "Android",
    aAJRT: "v1.5.6",
    gsxbI: "application/json",
    PnBFu: "*/*",
    cdXiP: "获取任务信息...",
    aTmao: "CHECK",
    EsKkL: function (F, s) {
      return F(s);
    },
    CQvJx: function (F, s) {
      return F !== s;
    },
    sVHGk: function (F, s) {
      return F === s;
    },
    PUaLO: "jiOxw",
    gqAxB: "usxgV",
    bmtEr: function (F, s, B) {
      return F(s, B);
    },
    pKYNj: "AZbvZ",
    SkLAw: function (F, s, B) {
      return F(s, B);
    },
    JCogX: function (F, s) {
      return F <= s;
    },
    HKkOS: "LHijn",
    KOleX: function (F, s, B) {
      return F(s, B);
    },
    TiRvt: "今日任务已完成！",
    oOaWE: "SUCCESS",
    rPYUw: function (F, s) {
      return F(s);
    },
    zwJxS: function (F, s) {
      return F - s;
    },
    tRCIk: function (F, s, B) {
      return F(s, B);
    },
    HBQXF: function (F, s) {
      return F < s;
    },
    wWvIJ: "KpLfE",
    aZdzq: "WfLUV",
    EVmKK: function (F, s, B) {
      return F(s, B);
    },
    Pzwjo: "qIEsc",
    GfIZR: function (F, s) {
      return F === s;
    },
    rpzGo: "object",
    zllet: function (F, s) {
      return F === s;
    },
    AhmTv: "qGXze",
    znGnG: "Epztn",
    rgPUl: function (F, s) {
      return F > s;
    },
    eRiyH: function (F, s) {
      return F === s;
    },
    CRdgf: "SYsuC",
    OgThB: "mBKGM",
    VBior: function (F, s) {
      return F === s;
    },
    lAvax: "jANKW",
    yzBWO: "广告信息不完整",
    qYDwf: "无标题",
    Gjpsm: function (F, s) {
      return F === s;
    },
    NORcI: "auto",
    aUmIH: function (F, s) {
      return F !== s;
    },
    pmulU: "HuyUT",
    bbNly: function (F, s) {
      return F !== s;
    },
    csFcj: "eDQDf",
    eadVp: function (F, s) {
      return F !== s;
    },
    kYQkb: "VZhIQ",
    gkPSA: "WhiZA",
    SSiej: function (F, s) {
      return F(s);
    },
    aHmNj: "HEAD",
    SRMYX: function (F, s) {
      return F / s;
    },
    BasFJ: function (F, s) {
      return F / s;
    },
    DBqBH: "content-length",
    rDOCm: function (F, s) {
      return F * s;
    },
    GLqPu: function (F, s, B) {
      return F(s, B);
    },
    nFaZr: function (F, s) {
      return F !== s;
    },
    KQZuC: "fqiIJ",
    oeJwz: "RDeML",
    huIGN: function (F, s, B) {
      return F(s, B);
    },
    iehmV: "EWuat",
    yyRrl: "zxuZm",
    vlNmw: function (F, s, B) {
      return F(s, B);
    },
    ULZHQ: function (F, s, B) {
      return F(s, B);
    },
    hohQD: function (F, s) {
      return F(s);
    },
    eJjhf: "观看完成",
    GwDwV: function (F) {
      return F();
    },
    kmGUT: function (F, s) {
      return F(s);
    },
    xLeQT: "okhttp/4.10.0",
    hjcrj: function (F, s, B, x, d) {
      return F(s, B, x, d);
    },
    zaIHk: function (F, s) {
      return F === s;
    },
    bqYrF: "ImCMB",
    OQnCe: "HQDth",
    LLBCW: function (F, s) {
      return F(s);
    },
    AAphm: function (F, s) {
      return F === s;
    },
    HwkFk: "DEkkR",
    xSeNC: function (F, s) {
      return F(s);
    },
    ovklD: "IjGZi",
    laHPM: function (F, s, B) {
      return F(s, B);
    },
    Srkjl: function (F, s) {
      return F < s;
    },
    wNcME: "oygwl",
    Olfok: function (F, s) {
      return F(s);
    },
    uASqI: function (F, s, B) {
      return F(s, B);
    },
    pchbL: "获取最终任务状态...",
    YJZuC: function (F, s, B) {
      return F(s, B);
    },
    jGoUQ: function (F, s) {
      return F + s;
    },
    mDXZS: function (F, s) {
      return F === s;
    },
    SelnH: "yPoQa"
  };
  console.log("\n" + "=".repeat(50));
  c1("账号 " + (C + 1) + " 开始执行", "INFO");
  console.log("=".repeat(50));
  const T = l.createHash("md5").update(Y).digest("hex").substring(0, 16);
  if (A(T)) {
    {
      c1("该账号今日已完成任务，跳过执行", "INFO");
      console.log("========================================\n");
      return true;
    }
  }
  try {
    {
      const B = {
        Host: "gw.jiudageapp.com",
        platform: "Android",
        version: "v1.5.6",
        Authorization: Y,
        "User-Agent": q,
        "Content-Type": "application/json",
        Accept: "*/*"
      };
      c1("获取任务信息...", "CHECK");
      const x = await cc(B);
      if (x.taskState !== 1) {
        {
          c1("任务状态异常（非进行中状态）", "ERROR");
          if (b.DEBUG_MODE) {
            {
              c1("[DEBUG] 任务详情: taskState=" + x.taskState + " | 已看=" + x.watched + "/" + x.totalTask + " | 贡献=" + x.current, "WARN");
              console.log("[DEBUG] 完整返回信息:", JSON.stringify(x, null, 2));
            }
          }
          return;
        }
      }
      c1("今日任务: " + x.watched + "/" + x.totalTask + " | 当前贡献: " + x.current, "INFO");
      if (x.totalTask <= x.watched) {
        {
          c1("今日任务已完成！", "SUCCESS");
          c0(T);
          return true;
        }
      }
      const d = x.totalTask - x.watched;
      c1("开始执行 " + d + " 个广告任务", "INFO");
      let a = 0;
      for (let S = 0; S < d; S++) {
        {
          const Z = x.watched + S + 1;
          console.log("\n" + "-".repeat(50));
          c1("广告 " + Z + "/" + x.totalTask, "INFO");
          try {
            {
              const G = await c8("https://gw.jiudageapp.com/api/web/member/get/internalAdvertisement", B);
              let m = {};
              if (G.result && typeof G.result === "object") {
                {
                  m = G.result;
                }
              } else {
                if (G.data && Array.isArray(G.data.list) && G.data.list.length > 0) {
                  {
                    m = G.data.list[0];
                  }
                }
              }
              if (!m.id && !m.videoId) {
                {
                  throw new Error("广告信息不完整");
                }
              }
              const L = m.id || m.videoId;
              c1("广告ID: " + L + " | " + (m.title || "无标题"), "INFO");
              let W = b.FIXED_WATCH_SEC;
              if (b.WATCH_DURATION_MODE === "auto") {
                {
                  try {
                    {
                      if (m.videoUrl) {
                        {
                          const cF = await j({
                            method: "HEAD",
                            url: m.videoUrl,
                            timeout: 10000
                          });
                          const cs = (cF.headers["content-length"] || 0) / 1024 / 1024;
                          W = Math.ceil(8 * cs);
                          W = Math.max(W, 10);
                          c1("视频大小: " + cs.toFixed(2) + "MB | 观看时长: " + W + "秒", "INFO");
                        }
                      } else {
                        W = 30;
                        c1("使用默认观看时长: " + W + "秒", "WARN");
                      }
                    }
                  } catch (cd) {
                    W = 30;
                    c1("使用默认观看时长: " + W + "秒", "WARN");
                  }
                }
              } else {
                {
                  c1("固定观看时长: " + W + "秒", "INFO");
                }
              }
              c1("开始观看广告...", "INFO");
              await c9(W);
              c1("观看完成", "SUCCESS");
              const J = String(Math.floor(Date.now()));
              const N = c7();
              const v = {
                timestamp: J,
                randomnumber: N,
                sign: c2({
                  videoId: L,
                  timeStamp: J,
                  randomNumber: N
                }),
                authorization: Y,
                version: "v1.5.6",
                platform: "Android",
                "user-agent": "okhttp/4.10.0"
              };
              const ct = await c8("https://gw.jiudageapp.com/api/web/newPeopleUnlock/receiveWelfareNineteen?videoId=" + L, v, b.SUBMIT_METHOD, "");
              if (!ct.success) {
                {
                  throw new Error(ct.message || "领取失败");
                }
              }
              c1("领取成功: +" + (ct.result?.["receiveContribution"] || 0) + " 贡献值", "SUCCESS");
              a++;
              await c9(b.PROFIT_WAIT_SEC);
              Z < x.totalTask && (await c9(b.INTERVAL_SEC));
            }
          } catch (co) {
            {
              const cp = co.message;
              c1("第 " + Z + " 个广告失败: " + cp, "ERROR");
              if (Z < x.totalTask) {
                {
                  await c9(b.INTERVAL_SEC);
                }
              }
            }
          }
        }
      }
      c1("获取最终任务状态...", "CHECK");
      const V = await cc(B);
      console.log("\n" + "=".repeat(50));
      c1("账号 " + (C + 1) + " 任务完成", "SUCCESS");
      c1("成功完成: " + a + "/" + d + " 个广告", "INFO");
      c1("最终状态: " + V.watched + "/" + V.totalTask + " | 贡献值: " + V.current, "INFO");
      console.log("=".repeat(50) + "\n");
      c0(T);
      return true;
    }
  } catch (cn) {
    {
      c1("账号 " + (C + 1) + " 执行异常: " + cn.message, "ERROR");
      console.log("========================================\n");
      return false;
    }
  }
}
function c7() {
  const C = {};
  C.cTbYe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  C.SHUkc = function (T, F) {
    return T < F;
  };
  C.gQMRq = function (T, F) {
    return T === F;
  };
  C.frBky = "aqxaj";
  C.fzdzG = "LPLYh";
  C.MFuJZ = function (T, F) {
    return T * F;
  };
  const Y = C;
  const q = Y.cTbYe;
  let f = "";
  for (let T = 0; Y.SHUkc(T, 8); T++) {
    Y.gQMRq(Y.frBky, Y.fzdzG) ? C++ : f += q[Math.floor(Y.MFuJZ(Math.random(), q.length))];
  }
  return f;
}
async function cy() {
  console.log("\n" + "=".repeat(50));
  c1("店铛铛青龙脚本开始执行", "INFO");
  console.log("=".repeat(50));
  const C = "f2m8PqcbK";
  let Y = [];
  c1("从环境变量读取账号...", "INFO");
  const q = process.env.DDD || "";
  if (q) {
    {
      const F = q.split(/\r?\n|\n/).filter(s => s.trim() !== "");
      Y.push(...F);
      c1("从 DDD 读取到 " + F.length + " 个账号", "INFO");
    }
  }
  if (Y.length === 0) {
    {
      c1("未找到 DDD 环境变量", "ERROR");
      c1("请检查: 1.青龙面板中是否有DDD环境变量", "ERROR");
      return;
    }
  }
  c1("检测到 " + Y.length + " 个账号", "INFO");
  let f = 0;
  for (let B = 0; B < Y.length; B++) {
    const x = Y[B].trim();
    const d = x.split("#");
    const a = c4(x);
    if (a === "authorization") {
      if (d.length < 2) {
        {
          c1("账号 " + (B + 1) + " 授权格式错误，跳过", "ERROR");
          continue;
        }
      }
      const V = d[0];
      const w = d[1];
      try {
        {
          c1("账号 " + (B + 1) + " (" + V + ") 开始授权登录...", "INFO");
          const p = await c5(w, H, C);
          if (!p.success) {
            {
              c1("账号 " + (B + 1) + " 锁头码验证失败: " + p.message, "ERROR");
              c1("锁头码不通过，结束执行", "ERROR");
              continue;
            }
          }
          c1("锁头码验证通过: " + p.message, "SUCCESS");
          const S = await cg(B, w, H);
          if (S) {
            {
              f++;
            }
          }
        }
      } catch (G) {
        c1("账号 " + (B + 1) + " 处理异常: " + G.message, "ERROR");
      }
    } else {
      if (a === "password") {
        if (d.length < 3) {
          c1("账号 " + (B + 1) + " 密码格式错误，跳过", "ERROR");
          continue;
        }
        const m = d[0];
        const L = d[1];
        const W = d[2];
        try {
          c1("账号 " + (B + 1) + " (" + m + ") 开始密码登录...", "INFO");
          const J = await c6(L, W, H);
          if (J.success) {
            c1("密码登录成功，获取到授权令牌", "SUCCESS");
            const N = "Bearer " + J.token;
            const v = await c5(N, H, C);
            if (!v.success) {
              c1("账号 " + (B + 1) + " 锁头码验证失败: " + v.message, "ERROR");
              c1("锁头码不通过，结束执行", "ERROR");
              continue;
            }
            c1("锁头码验证通过: " + v.message, "SUCCESS");
            const ct = await cg(B, N, H);
            ct && f++;
          } else {
            c1("账号 " + (B + 1) + " 密码登录失败: " + J.message, "ERROR");
          }
        } catch (cC) {
          c1("账号 " + (B + 1) + " 处理异常: " + cC.message, "ERROR");
        }
      } else {
        c1("账号 " + (B + 1) + " 格式错误，跳过", "ERROR");
        continue;
      }
    }
    B < Y.length - 1 && (c1("等待 " + b.ACCOUNT_INTERVAL_SEC + " 秒后处理下一个账号...", "INFO"), await c9(b.ACCOUNT_INTERVAL_SEC));
  }
  console.log("=".repeat(50));
  c1("店铛铛脚本执行完成", "SUCCESS");
  c1("成功完成: " + f + "/" + Y.length + " 个账号", "INFO");
  console.log("=".repeat(50));
}
require.main === module && cy().catch(t => {
  c1("程序异常: " + t.message, "ERROR");
  process.exit(1);
});
const cr = {
  main: cy
};
module.exports = cr;