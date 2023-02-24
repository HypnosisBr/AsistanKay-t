module.exports = {
    name: "kayıt-yetkili-rol",
    aliases: ['kayıt-yetkili','kayıt-yetkilisi','kyetkili','kyetkilirolayarla','kayıtyetkilisirolüayarla','ky-rol-ayarla','k-yetkilisi-ayarla','kayıt-yetkilisi-ayarla'],
    $if: "v4",
    code : `
$setServerVar[kayıtyetkilisi;$mentionedRoles[1]]   
$description[1;<@$authorID> Tarafından **KAYIT SORUMLUSU / YETKİLİSİ** Rolü <@&$mentionedRoles[1]> / **$roleName[$mentionedRoles[1]]** Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$mentionedRoles[1]!=undefined;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Rol** Etiketlediğinizden Emin Olun.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`}