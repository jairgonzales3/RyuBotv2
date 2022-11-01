let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `┌「@ffxryu.18」
├❏ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐆𝐫𝐚𝐭𝐢𝐬 𝟏.
├❏ hola bien Bienvenid@s 
├❏ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐆𝐫𝐚𝐭𝐢𝐬 𝟏.
├❏──ׂ─ׂ─ׂ─ׂ───
├❏ ⇶Presentarse
├❏ ⇶con foto 
├❏ ⇶nombre 
├❏ ⇶edad 
└────ׂ─ׂ─ׂ─ׂ───
┌「𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐆𝐫𝐚𝐭𝐢𝐬 𝟏」
https://chat.whatsapp.com/BOAp22xLodrAvxbLG0AD4z
└────ׂ─ׂ─ׂ─ׂ───`
let buttonMessage= {
'document': { url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley` },
'mimetype': `application/${document}`,
'fileName': `@ffxryu.18`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/jairgonzales3/RyuBotv2',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['reclutamiento','reclutamiento']
export default handler
