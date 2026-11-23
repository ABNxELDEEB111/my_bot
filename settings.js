// ═══════════════════════════════════════════════
// ✅ أسماء البوت (تُستخدم عشوائياً في الرسائل)
// ═══════════════════════════════════════════════
global.botNames = [
  '𝘽𝙊𝙏 ABNxEL个DEEB',
  '𝗕𝗢𝗧 ABNxEL个DEEB',
  'Bᴏᴛ ABNxEL个DEEB',
  '𝐁𝐎𝐓 AВNхEL个DEEВ',
  '𝙱𝙾𝚃 AВNхEL个DEEВ',
  'BOT AВNхEL个DEEВ',
  '𝔹𝕆𝕋 AВNхEL个DEEВ',
  '𝙱𝙾𝚃 ABNxEL个DEEB',
];

// ═══════════════════════════════════════════════
global.botImage = [
'https://files.catbox.moe/9kb2na.jpg',
];
// ═══════════════════════════════════════════════
// ✅ القنوات والمجموعات
// ═══════════════════════════════════════════════
global.my = {


  // ✅ اسم القناة الظاهر في الترويسة
  canalName: '⚔️ ABNxEL个DEEB',

  // ✅ رابط جروب الدعم',
};

const config
  botName: "ABNxEL个DEEB",
  prefix: ".",

  botname: "⚔️ BOT ABNxEL个DEEB",
  wm: "⚔️ 𝙱𝙾𝚃 ABNxEL个DEEB",
  author: "© EL_DEEB",
  dev: "© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 EL_DEEB",
  packname: "👨🏻‍🦯ABNxEL个DEEB",
  etiqueta: "👨🏻‍🦯々ＫＩＭＯ๛ＥＬＤＥＥＢ々",
  textbot: "👨🏻‍🦯々ＫＩＭＯ๛ＥＬＤＥＥＢ々 — بوت واتساب عربي متكامل. ⚔️",

  // أرقام المالك (بدون + وبدون مسافات)
  ownerNumber: [
    "201229823737",
  ],
  coOwners: [],

  // ⭐ البريميوم اليدوي: أرقام بدون + وبدون @، وأسماء مستخدمين بدون @
  // الحجوزات المضافة بالأمر تُحفظ في قاعدة البيانات مع تاريخ انتهاء.
  premium: {
    numbers: [],
    usernames: [],
  },

  sessionDir: "./sessions/main",

  // البوت يعمل داخل المجموعات فقط: رسائل الخاص تُتجاهل تماماً
  // (لا تُقرأ، لا تُعالَج، لا تُخزَّن، ولا يأتي عليها أي رد).
  groupsOnly: true,

  readMessages: true,
  autoReconnect: true,
  maxReconnectAttempts: 10,
  reconnectDelay: 5000,

  logLevel: "info",
};

// حقوق موحّدة يقرأها البوت كقيمة احتياطية.
global.botname = config.botname;
global.packname = config.packname;
global.wm = config.wm;
global.author = config.author;
global.etiqueta = config.etiqueta;

export default config;
