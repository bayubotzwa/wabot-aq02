let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [089525518325]
│ • Telkomsel [081285866502]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay,Dana [089525518325]
│ • Saweria : -
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
