module.exports = [{
    name: "snipe",
    aliases: ['s'],
    $if: "v4",
    code : `
$author[1;$username;$authorAvatar]
$description[1;
<:m_nokta:1015530671097249852> Mesaj İçeriği: **$getChannelVar[snipe]**
<:m_nokta:1015530671097249852> Mesaj Sahibi: <@$getChannelVar[snipekk]> / **$userTag[$getChannelVar[snipekk]]**]
$color[1;$getRoleColor[$highestRole[$authorID;$guildID;id]]]
$onlyIf[$getChannelVar[snipekk]!=;{newEmbed:{description:<:b_warn:1014645575091765359> Silinen Bir Mesaja Ulaşamadım}{color:010101}}]
$onlyForRoles[$getServerVar[kayıtyetkilisi];{newEmbed:{description:<:b_warn:1014645575091765359> Bunun İçin **Yetkili** Olman Gerekiyor!}{color:010101}}]
$onlyBotPerms[managemessages;{newEmbed:{description:<:b_warn:1014645575091765359> Botun mesajları yönetme izni yok}{color:010101}}] 
`}]  