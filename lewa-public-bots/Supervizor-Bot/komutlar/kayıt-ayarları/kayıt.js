module.exports = [{
    name: "kayıt",
    $if: "v4",
    code : `
$if[$getServerVar[normalkayıt]==açık]
$setUserVar[kayıtedilecekyaş;$noMentionMessage[2];$authorID]
$setUserVar[kayıtedilecekisim;$noMentionMessage[1];$authorID]
$setUserVar[kayıtedilecek;$mentioned[1];$authorID]
$color[1;010101]
$description[1;**<@$mentioned[1]> / *$userTag[$mentioned[1]]* Adlı Kullanıcıyı, 
\`$getServerVar[kayıttag] $noMentionMessage[1] $getServerVar[isimyaştagı] $noMentionMessage[2]\` Olarak Kayıt Etmek İstediğine Eminmisin?**]
$addButton[1;Kayıt Etme;danger;kayıtetme;no;]
$addButton[1;Kayıt Et;success;kayıtet;no;]

$onlyIf[$isNumber[$noMentionMessage[2]]!=false;{newEmbed:{description::exclamation: <@$authorID> Kullanıcı Yaşına **Rakam** Girmeniz Gerek!}{color:010101}}]
$onlyIf[$noMentionMessage[2]!=;{newEmbed:{description::exclamation: <@$authorID> Kullanıcının Yaşını Girmen Gerek!}{color:010101}}]
$onlyIf[$noMentionMessage!=;{newEmbed:{description::exclamation: <@$authorID> Kullanıcının Adını Ve Yaşını Girmen Gerek!}{color:010101}}]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description::exclamation: <@$authorID> Kayıt Etmek İçin Kayıtsız Bir Kullanıcı **Etiketlemeniz** Gerekiyor.}{color:010101}}]
$onlyIf[$getServerVar[kayıtlıüyerol]!=;{newEmbed:{description::exclamation: <@$authorID> **Kayıtlı Üyelere Verilecek Rol** Ayarlı Durumda Değil!}{color:010101}}]
$endif



$if[$getServerVar[prekayıt]==açık]
$setUserVar[kayıtedilecekyaş;$noMentionMessage[2];$authorID]
$setUserVar[kayıtedilecekisim;$noMentionMessage[1];$authorID]
$setUserVar[kayıtedilecek;$mentioned[1];$authorID]
$color[1;010101]
$description[1;**<@$mentioned[1]> / *$userTag[$mentioned[1]]* Adlı Kullanıcıyı, 
\`$getServerVar[kayıttag] $noMentionMessage[1] $getServerVar[isimyaştagı] $noMentionMessage[2]\` Olarak Kayıt Etmek İstediğine Eminmisin?**]
$addButton[1;İptal;2;kayıtiptal;no;]
$addButton[1;Kız Üye;danger;kayıtkız;no;]
$addButton[1;Erkek Üye;1;kayıterkek;no;]

$onlyIf[$isNumber[$noMentionMessage[2]]!=false;{newEmbed:{description::exclamation: <@$authorID> Kullanıcı Yaşına **Rakam** Girmeniz Gerek!}{color:010101}}]
$onlyIf[$noMentionMessage[2]!=;{newEmbed:{description::exclamation: <@$authorID> Kullanıcının Yaşını Girmen Gerek!}{color:010101}}]
$onlyIf[$noMentionMessage!=;{newEmbed:{description::exclamation: <@$authorID> Kullanıcının Adını Ve Yaşını Girmen Gerek!}{color:010101}}]
$endif



$onlyIf[$getServerVar[kayıtlog]!=;{newEmbed:{description::exclamation: <@$authorID> **Kayıt Log** Ayarlı Durumda Değil!}{color:010101}}]
$onlyIf[$getServerVar[kayıtkanalı]!=;{newEmbed:{description::exclamation: <@$authorID> **Kayıt Kanalı** Ayarlı Durumda Değil!}{color:010101}}]
$onlyForRoles[$getServerVar[kayıtyetkilisi];{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece Sunucudaki **KAYIT YETKİLİLERİ** Kullanabilir.}
{color:010101}{delete:4s}}]
$onlyIf[$getServerVar[kayıtyetkilisi]!=;{newEmbed:{description::exclamation: <@$authorID> **Kayıt Yetkilisi** Ayarlı Durumda Değil!}{color:010101}}]

`},{
    name: "normal-kayıt",
    aliases: ['n-kayıt','normalkayıt','n-kayıt','nk','nk','normal k'],
    $if: "v4",
    code: `
$if[$message==]
$description[1;:exclamation: Lütfen Bir Tetikleyici Gir. Örneğin,
\`\`\`\n$getVar[prefix]normal-kayıt aç/kapat\n\`\`\`]
$color[1;010101]
$endif

$if[$message[1]==aç]
$setVar[sistemaktifsunucusayısı;$sum[$getVar[sistemaktifsunucusayısı];1]]
$setServerVar[normalkayıt;açık]
$description[1;<@$authorID> Adlı Yetkili Tarafından **NORMAL KAYIT** Sistemi \`Aktif\` Duruma Getirildi!]
$color[1;010101]
$onlyIf[$getServerVar[normalkayıt]!=açık;{newEmbed:{description::exclamation: <@$authorID> Bu Sistem Zaten **Aktif** Durumda!}{color:010101}}]
$endif

$if[$message[1]==kapat]
$setVar[sistemaktifsunucusayısı;$sub[$getVar[sistemaktifsunucusayısı];1]]
$setServerVar[normalkayıt;kapalı]
$description[1;<@$authorID> Adlı Yetkili Tarafından **NORMAL KAYIT** Sistemi \`Kapalı\` Duruma Getirildi!]
$color[1;010101]
$onlyIf[$getServerVar[normalkayıt]!=kapalı;{newEmbed:{description::exclamation: <@$authorID> Bu Sistem Zaten **Kapalı** Durumda!}{color:010101}}]
$endif

$onlyIf[$getServerVar[prekayıt]!=açık;{newEmbed:{description::exclamation: <@$authorID> Bunu **PRE KAYIT** Sistemi Açıkken Yapamazsın.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`
},{
    name: "pemium-kayıt",
    aliases: ['p-kayıt','prekayıt','p-kayıt','pk','pk','pre k','pre-kayıt'],
    $if: "v4",
    code: `
$if[$message==]
$description[1;:exclamation: Lütfen Bir Tetikleyici Gir. Örneğin,
\`\`\`\n$getVar[prefix]pre-kayıt aç/kapat\n\`\`\`]
$color[1;010101]
$endif


$if[$message[1]==aç]
$setVar[sistemaktifsunucusayısı;$sum[$getVar[sistemaktifsunucusayısı];1]]
$setServerVar[prekayıt;açık]
$description[1;<@$authorID> Adlı Yetkili Tarafından **PRE KAYIT** Sistemi \`Aktif\` Duruma Getirildi!]
$color[1;010101]
$onlyIf[$getServerVar[prekayıt]!=açık;{newEmbed:{description::exclamation: <@$authorID> Bu Sistem Zaten **Aktif** Durumda!}{color:010101}}]
$endif
    
$if[$message[1]==kapat]
$setVar[sistemaktifsunucusayısı;$sub[$getVar[sistemaktifsunucusayısı];1]]
$setServerVar[prekayıt;kapalı]
$description[1;<@$authorID> Adlı Yetkili Tarafından **PRE KAYIT** Sistemi \`Kapalı\` Duruma Getirildi!]
$onlyIf[$getServerVar[prekayıt]!=kapalı;{newEmbed:{description::exclamation: <@$authorID> Bu Sistem Zaten **Kapalı** Durumda!}{color:010101}}]
$color[1;010101]
$endif

$onlyIf[$getServerVar[normalkayıt]!=açık;{newEmbed:{description::exclamation: <@$authorID> Bunu **NORMAL KAYIT** Sistemi Açıkken Yapamazsın.}{color:010101}}]
$onlyBotPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Ayarları Yapabilmem İçin Bana **YÖNETİCİ** İzni Vermen Gerek.}{color:010101}}]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **YÖNETİCİ** İznine Sahip Kişiler Kullanabilir.}{color:010101}}]
`
},{//kayıt-erkek
    type: "interaction",
    prototype: "button",
    name: "kayıterkek",
    code: `
$setServerVar[toplamkayıtsayısı;$sum[$getServerVar[toplamkayıtsayısı];1]] 
$setVar[yapılantümkayıtlarınsayısı;$sum[$getVar[yapılantümkayıtlarınsayısı];1]]
$setUserVar[kullanıcınınyaptığıkayıtsayısı;$sum[1;$getUserVar[kullanıcınınyaptığıkayıtsayısı]];$authorID] 

$giveRole[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıtlıerkeküyerol]]
$giveRole[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[xy]]
$changeNickname[$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıttag] $getUserVar[kayıtedilecekisim;$authorID] $getServerVar[isimyaştagı] $getUserVar[kayıtedilecekyaş;$authorID]]
$interactionUpdate[;{newEmbed:{description:<a:onay:1014643548559249511> <@$authorID>, <@$getUserVar[kayıtedilecek;$authorID]> / **$userTag[$getUserVar[kayıtedilecek;$authorID]]** Adlı Kişiyi <@&$getServerVar[kayıtlıerkeküyerol]>, <@&$getServerVar[xy]> Rolleriyle Kayıt Etti.}
{color:010101}};}]


$channelSendMessage[$getServerVar[kayıtlog];<@$getUserVar[kayıtedilecek;$authorID]> Aramıza Katıldı, Hoş Geldin! 🎉]




$onlyIf[$hasRoles[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıtlıerkeküyerol]]!=true;{newEmbed:{description::exclamation:<@$authorID> **Bu Kullanıcı Daha Önce \`$roleName[$getServerVar[kayıtlıerkeküyerol]]\` Rolü Zaten Almış!**}{color:010101}}]

$onlyIf[$getServerVar[kayıtlıerkeküyerol]!=;{newEmbed:{description::exclamation: <@$authorID> Bu Sunucuda **KIZ ÜYE** Rolü Ayarlanmamış!}{color:010101}}]
$onlyIf[$getUserVar[kayıtedilecek;$authorID]!=;{newEmbed:{description::exclamation: <@$authorID> Üzgünüm Bu Kullanıcıyı Kayıt Etmek İçin Komutu Siz Kullanmamışsınız.}{color:010101}{delete:8s}}]
$onlyForRoles[$getServerVar[kayıtyetkilisi];{newEmbed:{description::exclamation: <@$authorID> Bunu Sadece **KAYIT YETKİLİLERİ** Kullanabilir.}
{color:010101}{delete:4s}}]
`},{//kayıt-kız
    type: "interaction",
    prototype: "button",
    name: "kayıtkız",
    code: `
$setServerVar[toplamkayıtsayısı;$sum[$getServerVar[toplamkayıtsayısı];1]] 
$setVar[yapılantümkayıtlarınsayısı;$sum[$getVar[yapılantümkayıtlarınsayısı];1]]
$setUserVar[kullanıcınınyaptığıkayıtsayısı;$sum[1;$getUserVar[kullanıcınınyaptığıkayıtsayısı]];$authorID] 

$giveRole[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıtlıkadınüyerol]]
$giveRole[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[xx]]
$changeNickname[$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıttag] $getUserVar[kayıtedilecekisim;$authorID] $getServerVar[isimyaştagı] $getUserVar[kayıtedilecekyaş;$authorID]]
$interactionUpdate[;{newEmbed:{description:<a:onay:1014643548559249511> <@$authorID>, <@$getUserVar[kayıtedilecek;$authorID]> / **$userTag[$getUserVar[kayıtedilecek;$authorID]]** Adlı Kişiyi <@&$getServerVar[kayıtlıkadınüyerol]>, <@&$getServerVar[xx]> Rolleriyle Kayıt Etti.}
{color:010101}};}]


$channelSendMessage[$getServerVar[kayıtlog];<@$getUserVar[kayıtedilecek;$authorID]> Aramıza Katıldı, Hoş Geldin! 🎉]


$onlyIf[$hasRoles[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıtlıerkeküyerol]]!=true;{newEmbed:{description::exclamation:<@$authorID> **Bu Kullanıcı Daha Önce \`$roleName[$getServerVar[kayıtlıerkeküyerol]]\` Rolü Zaten Almış!**}{color:010101}}]
$onlyIf[$getServerVar[kayıtlıkadınüyerol]!=;{newEmbed:{description::exclamation: <@$authorID> Bu Sunucuda **KIZ ÜYE** Rolü Ayarlanmamış!}{color:010101}}]
$onlyIf[$getUserVar[kayıtedilecek;$authorID]!=;{newEmbed:{description::exclamation: <@$authorID> Üzgünüm Bu Kullanıcıyı Kayıt Etmek İçin Komutu Siz Kullanmamışsınız.}{color:010101}{delete:8s}}]
$onlyForRoles[$getServerVar[kayıtyetkilisi];{newEmbed:{description::exclamation: <@$authorID> Bunu Sadece **KAYIT YETKİLİLERİ** Kullanabilir.}
{color:010101}{delete:4s}}]
`},{//kayıt-iptal
    type: "interaction",
    prototype: "button",
    name: "kayıtiptal",
    code: `
$interactionUpdate[;{newEmbed:{description:<@$authorID> Tarafından İşlem **İptal** Edildi!}{color:010101}};}]
$onlyIf[$getUserVar[kayıtedilecek;$authorID]!=;{newEmbed:{description::exclamation: <@$authorID> Üzgünüm Bu Kullanıcıyı Kayıt Etmek İçin Komutu Siz Kullanmamışsınız.}{color:010101}{delete:8s}}]
`},{//normal-kayıt-kayıt-et
    type: "interaction",
    prototype: "button",
    name: "kayıtet",
    code: `

$setServerVar[toplamkayıtsayısı;$sum[$getServerVar[toplamkayıtsayısı];1]] 
$setVar[yapılantümkayıtlarınsayısı;$sum[$getVar[yapılantümkayıtlarınsayısı];1]]
$setUserVar[kullanıcınınyaptığıkayıtsayısı;$sum[1;$getUserVar[kullanıcınınyaptığıkayıtsayısı]];$authorID] 

$giveRole[$guildID;$getUserVar[kayıtedilecek;$authorID];$getServerVar[kayıtlıüyerol]]
$changeNickname[$getUserVar[kayıtedilecek;$authorID];$getUserVar[kayıtedilecekisim;$authorID] | $getUserVar[kayıtedilecekyaş;$authorID]]
$interactionUpdate[;{newEmbed:{description:<@$authorID>, <@$getUserVar[kayıtedilecek;$authorID]> / **$userTag[$getUserVar[kayıtedilecek;$authorID]]** Adlı Kişiyi <@&$getServerVar[kayıtlıüyerol]> Rolleriyle Kayıt Etti. **(Normal Kayıt)**}
{color:010101}};}]

$channelSendMessage[$getServerVar[kayıtlog];<@$getUserVar[kayıtedilecek;$authorID]> Aramıza Katıldı, Hoş Geldin! 🎉]

$onlyIf[$getUserVar[kayıtedilecek;$authorID]!=;{newEmbed:{description::exclamation: <@$authorID> Üzgünüm Bu Kullanıcıyı Kayıt Etmek İçin Komutu Siz Kullanmamışsınız.}{color:010101}{delete:8s}}]
$onlyForRoles[$getServerVar[kayıtyetkilisi];{newEmbed:{description::exclamation: <@$authorID> Bunu Sadece **KAYIT YETKİLİLERİ** Kullanabilir.}
{color:010101}{delete:4s}}]
`},{//normal-kayıt-kayıt-etme
    type: "interaction",
    prototype: "button",
    name: "kayıtetme",
    code: `

$setUserVar[kayıtedilecekyaş;;$authorID]
$setUserVar[kayıtedilecekisim;;$authorID]
$setUserVar[kayıtedilecek;;$authorID]
$interactionUpdate[;{newEmbed:{description:<a:onay:1014643548559249511> <@$authorID>, <@$getUserVar[kayıtedilecek]> Kişiyinin Kayıt İşlemini İptal Etti.}
{color:010101}};}]
$onlyIf[$getUserVar[kayıtedilecek;$authorID]!=;{newEmbed:{description::exclamation: <@$authorID> Üzgünüm Bu Kullanıcıyı Kayıt Etmek İçin Komutu Siz Kullanmamışsınız.}{color:010101}{delete:8s}}]
$onlyForRoles[$getServerVar[kayıtyetkilisi];{newEmbed:{description::exclamation: <@$authorID> Bunu Sadece **KAYIT YETKİLİLERİ** Kullanabilir.}
{color:010101}{delete:4s}}]
`}]