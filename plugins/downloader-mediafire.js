import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
β­βββββΒ°.β‘.Β°β§βββββ
βπ*π½πΎπΌπ±ππ΄:* ${filename}
βπ*πΏπ΄ππΎ:* ${filesizeH}
βπ΄*ππΈπΏπΎ:* ${ext}
β°βββββΒ°.β‘.Β°β§βββββ`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π³π΄ππ²π°ππΆπ°π π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄',
body: 'β«·α­Κα΄α΄α΄s-Κα΄α΄-α΄α΄οΉβ',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
