module.exports = {
    name: "kayıtlı-üye-rol",
    aliases: ['kayıtlı-üye-rol-ayarla','kayıtlı üye rol ayarla', 'k-üye-rol','k-üye-rol-ayarla'],
    $if: "v4",
    code : `
$setServerVar[kayıtlıüyerol;$mentionedRoles[1]]   
$description[1;<@$authorID> Tarafından **KAYITLI ÜYELERE** Verilecek Rol <@&$mentionedRoles[1]> / **$roleName[$mentionedRoles[1]]** Olarak Ayarlandı!]
$color[1;010101]
$onlyIf[$rolePosition[$highestRole[$clientID;$guildID;id]]<$rolePosition[$mentionedRoles[1]];{newEmbed:{description::exclamation:Bu Rol Benden Yukarıda Olduğu İçin Hiçbir Kullanıcıya Vermem. Lütfen Rolümü Üste Çekin Veya Başka Bir Rol Etiketleyin.}
{color:010101}]
$onlyIf[$mentionedRoles[1]!=undefined;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir **Rol** Etiketlediğinizden Emin Olun.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`}