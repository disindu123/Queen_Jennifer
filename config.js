const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
const SE = require('./Session');
// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
const SION = 'e';
DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v3.1.0',
    CHANNEL: 'https://t.me/remasterplugin',
    GANSTYLE: 'https://i.hizliresim.com/loUtAb.jpg',
    SESSION: 'PINKY_BOT-V10:;:' + process.env.PINKY_SESSION === undefined ? '' : process.env.PINKY_SESSION,
    SESSIONE: 'PINKY_BOT-V10:;:' + SION + SE.VERSION1 + SE.VERSION2 + "=",
    LANG: process.env.LANGUAGE === undefined ? 'en' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: '\n ```I Am Alive !!!```\n\n```Type``` *.help* ```for commands```',
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '918921483992,0' : process.env.YAK,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PASSWORD: process.env.BOT_PAS_CODE === undefined ? 'fafduty5bv6cv55vhjtr6d54039f7850c-2934-4a7d-b116-10baa3f8f2d6' : process.env.BOT_PAS_CODE,
    FULLEVA_PIN: process.env.FULLEVA_PIN === undefined ? 'on' : process.env.FULLEVA_PIN,
    FULLEVA_BUG: process.env.FULLEVA_BUG === undefined ? 'on' : process.env.FULLEVA_BUG,
    FULLEVA_NOR: process.env.FULLEVA_NOR === undefined ? 'on' : process.env.FULLEVA_NOR,
    ANTİLİNK: 'false',
    AUTOBİO: 'true',
    KICKMEMSG: 'default',
    OWNER: 'AiDarkEzio',
    ALL: 'Made By Pinky',
    MENTION:'94775704025@s.whatsapp.net',
    ADDMSG: 'default',
    MUTEMSG: 'default',
    BOT: '⊢‒‒‒ ⋈ PINKY ⋈ ‒‒‒⊣',
    NOLOG: 'true',
    THERI_KICK: 'false',
    SONGD: 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ',
    SONGU: 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ',
    TALKING_PINKY: 'true',
    BLOCKMSG: 'default',
    UNBLOCKMSG: 'default',
    UNMUTEMSG: 'default',
    GEAR: 'one',
    PROMOTEMSG: 'default',
    DEMOTEMSG: 'default',
    BANMSG: 'default',
    AFKMSG: 'default',
    WEL_GIF: 'https://i.imgur.com/nErXUGj.mp4',
    BYE_GIF: 'https://i.imgur.com/Z1jCYGN.mp4',
    HANDLERS: '^[./;]',
    TAGPLK: 'Note this',
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '5a28a571-1818-4dcc-a8ee-a9aad632f067' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? 'Ws4CDzVR2wZYpAbhVpBfUj43' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "917012074386-1631435717",
    SUPPORT3: "919072790587-1635775355",
    SUPPORT4: "905511384572-1625319286"
};
