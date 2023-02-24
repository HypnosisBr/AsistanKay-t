module.exports = [{
    name: "tag-ayarla",
    aliases: ['tagayarla'],
    $if: "v4",
    code : `
$setServerVar[kayıttag;$message[1]]
$description[1;<@$authorID> Tarafından **TAG** Başarı İle **$message[1]** Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$getServerVar[kayıttag]!=$message[1];{newEmbed:{description::exclamation: <@$authorID> Ayarlamak İstediğiniz **Tag** Önceki İle Aynı.}{color:010101}}]
$onlyIf[$message[1]!=;{newEmbed:{description::exclamation: <@$authorID> Ayarlamak İstediğiniz Tag'ı Girmeniz Gerekiyor.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`},{
    name: "isim-yaş-arası-sembol-ayarla",
aliases: ['iy-arası-sembol-ayarla','iyarasısembolayarla','isimyaşarasısembolayarla','iy-arası-sembol'],
$if: "v4",
code : `
$setServerVar[isimyaştagı;$message[1]]
$description[1;<@$authorID> Tarafından **İSİM - YAŞ ARASI SEMBOL** Başarı İle **$message[1]** Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$getServerVar[isimyaştagı]!=$message[1];{newEmbed:{description::exclamation: <@$authorID> Ayarlamak İstediğiniz **İSİM - YAŞ ARASI SEMBOL** Önceki İle Aynı.}{color:010101}}]
$onlyIf[$message[1]!=;{newEmbed:{description::exclamation: <@$authorID> Ayarlamak İstediğiniz Tag'ı Girmeniz Gerekiyor.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`}]