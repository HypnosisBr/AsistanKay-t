module.exports = [{
    name: "y-sayacı-sıfırla",
    aliases: ['yetkili-sayacı-sıfırla','kullanıcı-sayacı-sıfırla','kullanıcısayacısıfırla'],
    $if: "v4",
    code : `
$setUserVar[kullanıcınınyaptığıkayıtsayısı;1;$mentioned[1]]
$setServerVar[toplamkayıtsayısı;$sub[$getUserVar[kullanıcınınyaptığıkayıtsayısı];$getServerVar[toplamkayıtsayısı]]]
$description[1;✅ <@$mentioned[1]> / **$userTag[$mentioned[1]]** Adlı Kullanıcının Yapmış Olduğu Tüm Kayıt Verileri <@$authorID> Tarafından Silindi!]
$color[1;010101]

$onlyIf[$getUserVar[kullanıcınınyaptığıkayıtsayısı;$mentioned[1]]<1;{newEmbed:{description::exclamation: <@$authorID> Bu Kullanıcı Zaten Kimseyi Kayıt Etmemiş!}{color:010101}}]
$onlyIf[$getUserVar[kullanıcınınyaptığıkayıtsayısı;$mentioned[1]]!=1;{newEmbed:{description::exclamation: <@$authorID> Bu Kullanıcı Zaten Kimseyi Kayıt Etmemiş!}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **Yönetici** İznine Sahip Kullanıcılar Kullanabilir.}{color:010101}}]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description::exclamation: <@$authorID> Lütfen Bir Kullanıcı Etiketleyin! (kendiniz hariç).}{color:010101}}]
    `}]