module.exports = [{
    name: "etkinlik-rolleri",
    aliases: ['e-rolleri','erolleri'],
    code: `
**Sunucumuzda Acil Durumlar Haricinde '\`everyone\` & \`here\`' Kullanılmamaktadır.**
**Etkinliklerden Haberdar Olmanız İçin Rol Seçmenizi Tavsiye Ederiz.**

> \`>\` <@&$getVar[etkinlikbildirim]>**: Sunucuda düzenlenen etkinliklerden haberdar olabilirsin.**
> \`>\` <@&$getVar[çekilişbildirim]>**: Düzenlenen çekilişlerden haberdar olabilirsin.**

$addButton[1;Çekiliş Katılımcısı;1;rolver-çekiliş;no;🎉]
$addButton[1;Etkinlik Katılımcısı;3;rolver-etkinlik;no;🎁]
$deleteCommand
$onlyForIDs[$botOwnerID;:exclamation: <@$authorID> **Bu Komut Sahibime Özel Dostum!**]
 `
  },{//çekiliş-katılımcısı
    type: "interaction",
    prototype: "button",
    name: "rolver-çekiliş",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[çekilişbildirim]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[çekilişbildirim]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[çekilişbildirim]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[çekilişbildirim]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[çekilişbildirim]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//etkinlik-katılımcısı
    type: "interaction",
    prototype: "button",
    name: "rolver-etkinlik",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[etkinlikbildirim]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[etkinlikbildirim]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[etkinlikbildirim]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[etkinlikbildirim]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[etkinlikbildirim]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`}]