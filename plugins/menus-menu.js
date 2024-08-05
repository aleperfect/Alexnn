import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┎━━━━━━━ ∙ʚ👻ɞ∙ ━━━━━━━┒
┃⭐ Creador : Alex
┃📲 wa.me/595984303784
┃https://chat.whatsapp.com/FrF7wyBbbaUFFMxAtfR9Dd
┖━━━━━━━ ∙ʚ👻ɞ∙ ━━━━━━━┚



 ╭━〔 ⚙️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⚙️ 〕
 ┃➤ 🟢 ${usedPrefix}enable
 ┃➤ 🔴 ${usedPrefix}disable
  ╰━━━━━━━━━━━━

 ╭━〔 ❄️ 𝐆𝐑𝐔𝐏𝐎𝐒 ❄️〕
 ┃➤  ${usedPrefix}menuff
 ┃➤  ${usedPrefix}comandosff
 ┃➤  ${usedPrefix}kick
 ┃➤  ${usedPrefix}grupo
 ┃➤  ${usedPrefix}promote
 ┃➤  ${usedPrefix}demote
 ┃➤  ${usedPrefix}demote
 ┃➤  ${usedPrefix}link
 ┃➤  ${usedPrefix}invocar
 ┃➤  ${usedPrefix}setwelcome
 ┃➤  ${usedPrefix}setbye
 ┃➤  ${usedPrefix}hidetag
 ┃➤  ${usedPrefix}fantasmas
 ╰━━━━━━━━━━━━

 ╭━〔 ⚠️ FREE FIRE ⚠️ 〕
 ┃➤ 🗺️ ${usedPrefix}menuff
 ┃➤ 🗺️ ${usedPrefix}bermuda
 ┃➤ 🗺️ ${usedPrefix}kalahari
 ┃➤ 🗺️ ${usedPrefix}alpes
 ┃➤ 🗺️ ${usedPrefix}purgatorio
 ┃➤ 🗺️ ${usedPrefix}nexterra
 ┃➤ 📋 ${usedPrefix}agendasemanal
  ╰━━━━━━━━━━━━

  ╭━〔 ⚔️ BUSCAR VS PLANTILLAS 🔱 〕
 ┃➤ 🌀 ${usedPrefix}buscarvsmasc
 ┃➤ ⚓ ${usedPrefix}buscarvsfem
 ┃➤ ✨ ${usedPrefix}bsfem
 ┃➤ 📍 ${usedPrefix}buscarvsmixto
 ┃➤ 👁️‍🗨️ ${usedPrefix}bsmixto
  ╰━━━━━━━━━━━━

 ╔══ ≪ REGLAS , LISTA , FICHA ≫ ══╗
║ 💻➺ ${usedPrefix}Masc
║ 💻➺ ${usedPrefix}Fem
║ 💻➺ ${usedPrefix}Masc¹
║ 💻➺ ${usedPrefix}Fem²
║ 💻➺ ${usedPrefix}CLK
║ 💻➺ ${usedPrefix}APOST
║ 💻➺ ${usedPrefix}mapa
║ 💻➺ ${usedPrefix}Ficha / Formulario Reclutamiento
║ 💻➺ ${usedPrefix}Nexterra
║ 💻➺ ${usedPrefix}Bermuda
║ 💻➺ ${usedPrefix}Kalahary
║ 💻➺ ${usedPrefix}Alpes
╰━━━━━━━━━━━━

╭━〔 LINKS - DRIVE DZN 💙 〕
 ║ 🎐${usedPrefix}SpamComu / Comunidades
 ║ 🎐 ${usedPrefix}Spam2
 ║ 🎐 ${usedPrefix}rcursosdzn
 ║ 🎐 ${usedPrefix}drivesdzn
 ║ 🎐 ${usedPrefix}dzn
 ║ 🎐 ${usedPrefix}ApkEdits
 ║ 🎐 ${usedPrefix}DriveEdits
╰━━━━━━━━━━━━

 ╭━〔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 🤍 〕
 ║ 🎐 ${usedPrefix}sticker | s imagen o video
 ║ 🎐 ${usedPrefix}sticker | s url de tipo jpg
 ║ 🎐 ${usedPrefix}emojimix 😺+😆
 ║ 🎐 ${usedPrefix}qc*
 ║ 🎐 ${usedPrefix}scircle | círculo imagen
 ║ 🎐 ${usedPrefix}semoji | emoji tipo emoji
 ║ 🎐 ${usedPrefix}attp texto
 ║ 🎐 ${usedPrefix}attp2 texto
 ║ 🎐 ${usedPrefix}ttp texto
 ║ 🎐 ${usedPrefix}ttp2 texto
 ║ 🎐 ${usedPrefix}ttp3 texto
 ║ 🎐 ${usedPrefix}ttp4 texto
 ║ 🎐 ${usedPrefix}ttp5 texto
 ║ 🎐 ${usedPrefix}ttp6 texto
 ║ 🎐 ${usedPrefix}dado
 ║ 🎐 ${usedPrefix}stickermarker efecto : responder a imagen
 ║ 🎐 ${usedPrefix}stickerfilter efecto : responder a imagen
 ║ 🎐 ${usedPrefix}cs : cs2
╰━━━━━━━━━━━━


 ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
┃➤ 🕹️ ${usedPrefix}mates
┃➤ 🕹️ ${usedPrefix}ppt
┃➤ 🕹️ ${usedPrefix}prostituto <@tag>
┃➤ 🕹️ ${usedPrefix}prostituta <@tag>
┃➤ 🕹️ ${usedPrefix}gay2 <@tag>
┃➤ 🕹️ ${usedPrefix}lesbiana <@tag>
┃➤ 🕹️ ${usedPrefix}pajero <@tag>
┃➤ 🕹️ ${usedPrefix}pajera <@tag>
┃➤ 🕹️ ${usedPrefix}puto <@tag>
┃➤ 🕹️ ${usedPrefix}puta <@tag>
┃➤ 🕹️ ${usedPrefix}manco <@tag>
┃➤ 🕹️ ${usedPrefix}manca <@tag>
┃➤ 🕹️ ${usedPrefix}rata <@tag>
┃➤ 🕹️ ${usedPrefix}negro <@tag>
┃➤ 🕹️ ${usedPrefix}negra <@tag>
┃➤ 🕹️ ${usedPrefix}fea <@tag>
┃➤ 🕹️ ${usedPrefix}feo <@tag>
┃➤ 🕹️ ${usedPrefix}adoptada <@tag>
┃➤ 🕹️ ${usedPrefix}adoptado <@tag>
┃➤ 🕹️ ${usedPrefix}love
┃➤ 🕹️ ${usedPrefix}los10
┃➤ 🕹️ ${usedPrefix}suitpvp
┃➤ 🕹️ ${usedPrefix}slot
┃➤ 🕹️ ${usedPrefix}simisimi
┃➤ 🕹️ ${usedPrefix}pregunta
┃➤ 🕹️ ${usedPrefix}ship5
┃➤ 🕹️ ${usedPrefix}abrazo
┃➤ 🕹️ ${usedPrefix}ship2
┃➤ 🕹️ ${usedPrefix}formarpareja
┃➤ 🕹️ ${usedPrefix}verdad
┃➤ 🕹️ ${usedPrefix}reto
┃➤ 🕹️ ${usedPrefix}cancion
┃➤ 🕹️ ${usedPrefix}pista
┃➤ 🕹️ ${usedPrefix}ruleta
┃➤ 🕹️ ${usedPrefix}zodiac
┃➤ 🕹️ ${usedPrefix}odio
┃➤ 🕹️ ${usedPrefix}ship
┃➤ 🕹️ ${usedPrefix}sorteo
┃➤ 🕹️ ${usedPrefix}minovia
┃➤ 🕹️ ${usedPrefix}minovio
┃➤ 🕹️ ${usedPrefix}kchero
┃➤ 🕹️ ${usedPrefix}kchero
 ╰━━━━━━━━━━━━


 ╭━〔 🎭 IMAGENES 🎭 〕
┃➤ 🖍️ ${usedPrefix}goku
┃➤ 🖍️ ${usedPrefix}vegeta
┃➤ 🖍️ ${usedPrefix}lora
┃➤ 🖍️ ${usedPrefix}cr7
┃➤ 🖍️ ${usedPrefix}spiderman
┃➤ 🖍️ ${usedPrefix}batman
┃➤ 🖍️ ${usedPrefix}hellokitty
┃➤ 🖍️ ${usedPrefix}charmander
 ╰━━━━━━━━━━━━
 

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
┃➤ 📥 ${usedPrefix}play
┃➤ 📥 ${usedPrefix}play.1
┃➤ 📥 ${usedPrefix}play2.2
┃➤ 📥 ${usedPrefix}ytv.2
┃➤ 📥 ${usedPrefix}yta.2
┃➤ 📥 ${usedPrefix}playlist
┃➤ 📥 ${usedPrefix}spotify
┃➤ 📥 ${usedPrefix}spotifydl
┃➤ 📥 ${usedPrefix}tiktok
┃➤ 📥 ${usedPrefix}instagram
┃➤ 📥 ${usedPrefix}mediafire
┃➤ 📥 ${usedPrefix}gdrive
┃➤ 📥 ${usedPrefix}twitter
┃➤ 📥 ${usedPrefix}yta
┃➤ 📥 ${usedPrefix}ytv
┃➤ 📥 ${usedPrefix}imagen
┃➤ 📥 ${usedPrefix}iaimagen
┃➤ 📥 ${usedPrefix}pinteres
┃➤ 📥 ${usedPrefix}igstory
 ╰━━━━━━━━━━━━


╭━〔  𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕
┃➤ 📍 ${usedPrefix}toimg
┃➤ 📍 ${usedPrefix}tomp3
┃➤ 📍 ${usedPrefix}toptt
┃➤ 📍 ${usedPrefix}tovideo
┃➤ 📍 ${usedPrefix}tts
 ╰━━━━━━━━━━━━

╭━〔 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕
┃➤ ❄️ ${usedPrefix}mensajefalso
┃➤ ❄️ ${usedPrefix}logos
┃➤ ❄️ ${usedPrefix}logocorazon
┃➤ ❄️ ${usedPrefix}ytcomment
┃➤ ❄️ ${usedPrefix}hornycard
┃➤ ❄️ ${usedPrefix}itssostupid
┃➤ ❄️ ${usedPrefix}pixelar
 ╰━━━━━━━━━━━━

╭━〔  𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕
┃➤ 🥀 ${usedPrefix}piropo
┃➤ 🥀 ${usedPrefix}consejo
┃➤ 🥀 ${usedPrefix}fraseromantica
 ╰━━━━━━━━━━━━

 ╭━〔 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨〕
┃➤ 🔍 ${usedPrefix}xnxxsearch
┃➤ 🔍 ${usedPrefix}google
┃➤ 🔍 ${usedPrefix}letra
┃➤ 🔍 ${usedPrefix}wikipedia
┃➤ 🔍 ${usedPrefix}ytsearch
┃➤ 🔍 ${usedPrefix}playstore
┃➤ 🔍 ${usedPrefix}mercadolibre
┃➤ 🔍 ${usedPrefix}pornhubsearch
 ╰━━━━━━━━━━━━

 ╭━〔  𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
┃➤ 🍃 ${usedPrefix}clima
┃➤ 🍃 ${usedPrefix}afk
┃➤ 🍃 ${usedPrefix}ocr
┃➤ 🍃 ${usedPrefix}calc
┃➤ 🍃 ${usedPrefix}del
┃➤ 🍃 ${usedPrefix}whatmusic
┃➤ 🍃 ${usedPrefix}qrcode
┃➤ 🍃 ${usedPrefix}traducir
 ╰━━━━━━━━━━━━

╭━〔  𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💰 〕
┃➤ 🍁 ${usedPrefix}verificar
┃➤ 🍁 ${usedPrefix}unreg
┃➤ 🍁 ${usedPrefix}minar
┃➤ 🍁 ${usedPrefix}buy
┃➤ 🍁 ${usedPrefix}work
┃➤ 🍁 ${usedPrefix}mendigar
┃➤ 🍁 ${usedPrefix}transfer
 ╰━━━━━━━━━━━━
 ╭━〔 OWNER 👻 〕
║ 💎➺ ${usedPrefix}join enlace
║ 💎➺ ${usedPrefix}unete enlace
║ 💎➺ ${usedPrefix}dardiamantes cantidad
║ 💎➺ ${usedPrefix}darxp cantidad
║ 💎➺ ${usedPrefix}addprem | userpremium @tag cantidad
║ 💎➺ ${usedPrefix}addprem2 | userpremium2 @tag cantidad
║ 💎➺ ${usedPrefix}addprem3 | userpremium3 @tag cantidad
║ 💎➺ ${usedPrefix}addprem4 | userpremium4 @tag cantidad
║ 💎➺ ${usedPrefix}idioma | language
║ 💎➺ ${usedPrefix}cajafuerte
║ 💎➺ ${usedPrefix}comunicar | broadcastall | bc texto
║ 💎➺ ${usedPrefix}broadcastchats | bcc texto
║ 💎➺ ${usedPrefix}comunicarpv texto
║ 💎➺ ${usedPrefix}broadcastgc texto
║ 💎➺ ${usedPrefix}comunicargrupos texto
║ 💎➺ ${usedPrefix}borrartmp | cleartmp
║ 💎➺ ${usedPrefix}delexp @tag
║ 💎➺ ${usedPrefix}deloptimuscoins @tag
║ 💎➺ ${usedPrefix}deldiamantes @tag
║ 💎➺ ${usedPrefix}reiniciar | restart
║ 💎➺ ${usedPrefix}Actualizar | update
║ 💎➺ ${usedPrefix}addprem | +prem @tag
║ 💎➺ ${usedPrefix}delprem | -prem @tag
║ 💎➺ ${usedPrefix}listapremium | listprem
║ 💎➺ ${usedPrefix}añadirdiamantes @tag cantidad
║ 💎➺ ${usedPrefix}añadirxp @tag cantidad
║ 💎➺ ${usedPrefix}añadircoins @tag cantidad
╰━━━━━━━━━━━━*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
