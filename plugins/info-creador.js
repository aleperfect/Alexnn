const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁  𝙴𝚂 wa.me/51968914403*

*Para mas informacion acerca del bot contactame*`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/usxr.alxb`},
    'mimetype': `application/${document}`,
    'fileName': `𝗚𝗛𝗢𝗦𝗧 𝗕𝗢𝗧`, 
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/usxr.alxb',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝗚𝗛𝗢𝗦𝗧 𝗕𝗢𝗧',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/usxr.alxb'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;