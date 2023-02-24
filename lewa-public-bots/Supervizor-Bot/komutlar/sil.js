module.exports = [{
    name: "sil",
    aliases: ['clear'],
    code: `

**$message** kadar mesajı uzaya uçurdum! 🚀
$deleteIn[5s]
$clear[$message[1]]
$deletecommand
$cooldown[5s;Tekrar kullanmak için **%time%** beklemelisin.]
$onlyIf[$message[1]<251;{newEmbed:{description::exclamation: <@$authorID> **251**'den yüksek bir rakam silemem.}{delete:4s}{color:RED}}]
$onlyIf[$isNumber[$message[1]]!=false;{newEmbed:{description::exclamation: <@$authorID> Geçerli bir sayı belirtin.}{delete:4s}{color:RED}}]
$onlyPerms[managemessages;{newEmbed:{description::exclamation: <@$authorID> Bunu sadece **Mesajları Yönet** iznine sahip kişiler kullanabilir.}{delete:4s}{color:RED}}]
`}]