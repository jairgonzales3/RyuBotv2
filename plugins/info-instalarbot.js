let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯π gracias por π₯³solicitar la instalaciΓ³n π€ del bot gracias por tu preferencia te dejarΓ© los requisitos para π©βπ»instalar el bot cualquier duda puedes contactarme a mi nΓΊmero personal en caso de si  necesitas ayuda para instalar π€΄
βββββΧβΧβΧβΧβββ
βγπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
ββhttp://wa.me/51955095498
βββββΧβΧβΧβΧβββ
βγππππππππ: ππππ’ :γ
ββhttps://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
βββββΧβΧβΧβΧβββ
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
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['instalarbot','script']
export default handler
