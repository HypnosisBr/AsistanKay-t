module.exports = [{
    name: "erkek-üye-rol-ayarla",
    aliases: ['erkeküyerolayarla','e-üye-rol','e-üye-rol-ayarla','eüyerol','erkek-üye-rol'],
    $if: "v4",
    code : `
$setServerVar[kayıtlıerkeküyerol;$mentionedRoles[1]]   
$description[1;<@$authorID> Tarafından **ERKEK ÜYE** Rolü <@&$mentionedRoles[1]> / **$roleName[$mentionedRoles[1]]** Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$mentionedRoles[1]!=undefined;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Rol** Etiketlediğinizden Emin Olun.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`},{
    name: "kız-üye-rol-ayarla",
    aliases: ['kızüyerolayarla','k-üye-rol','k-üye-rol-ayarla','küyerol','kadın-üye-rol','kadın-üye-rol-ayarla','kız-üye-rol'],
    $if: "v4",
    code : `
$setServerVar[kayıtlıkadınüyerol;$mentionedRoles[1]]   
$description[1;<@$authorID> Tarafından **KIZ ÜYE** Rolü <@&$mentionedRoles[1]> / **$roleName[$mentionedRoles[1]]** Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$mentionedRoles[1]!=undefined;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Rol** Etiketlediğinizden Emin Olun.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`}]