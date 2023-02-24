module.exports = {
    name: "kayıt-kanalı-ayarla",
    aliases: ['kayıt-kanal','k-kanal','k-kanal-ayarla','kayıt-kanal-ayarla'],
    $if: "v4",
    code : `
$setServerVar[kayıtkanalı;$mentionedChannels[1]]
$description[1;<@$authorID> Tarafından Başarıyla **KAYIT KANALI** <#$mentionedChannels[1]> Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$mentionedChannelsCount!=0;{newEmbed:{description::exclamation: Lütfen Geçerli Bir **Kanal** Etiketleyin!}{color:010101}}]
$onlyIf[$mentionedChannels[1]!=;{newEmbed:{description::exclamation: Lütfen Bir **Kanal** Etiketleyin!}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`}