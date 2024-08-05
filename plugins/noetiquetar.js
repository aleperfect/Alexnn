let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*[ ⚠️ ] no etiquetes a unos de mis creadores si tienes alguna consulta o duda hablale a su privado solo por tema de 𝗚𝗛𝗢𝗦𝗧 𝗕𝗢𝗧*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@5959843037848$/i
export default handler
