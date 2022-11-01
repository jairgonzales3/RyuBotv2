import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/naa.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/PtpmTEU.jpeg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
┌「@ffxryu.18」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${taguser}💖✨
├❏ 📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
├❏ 🔋𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
├❏ 📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
└────ׂ─ׂ─ׂ─ׂ───
╭─────────────┈
│◦➛ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS 
│◦➛☃️️ᩭ✎UNIRTE AL LOS💖 GRUPOS 
│◦➛🌹️ᩭ✎OFICIALES DEL BOT DE👩‍🏫✨
│◦➛🌆𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐆𝐫𝐚𝐭𝐢𝐬 𝟏
│◦➛🍀ᩭ✎https://chat.whatsapp.com/BOAp22xLodrAvxbLG0AD4z
│◦➛☘️𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐆𝐫𝐚𝐭𝐢𝐬 𝟐
│◦➛✨ᩭ✎https://chat.whatsapp.com/LuHSCjQuCe8G5ucRCQxkJr
│◦➛@ffxryu.18
╰────────────┈⊷
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: '𝐌𝐄𝐍𝐔' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: '𝐄𝐒𝐓𝐀𝐃𝐎' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '@ffxryu.18',
body: null,
thumbnail: img,
sourceUrl: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^linkgc|grupos|grupos|grupos|grupos|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
