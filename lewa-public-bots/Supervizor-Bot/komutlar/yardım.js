module.exports = [{
    name: "yardım",
    $if: "v4",
    code : `
$channelSendMessage[$channelID;{newEmbed:{author:Normal - Kayıt Sistemi:$userAvatar[$clientID]}{thumbnail:$userAvatar[$authorID]}
{footer:© DarkLon Code:$userAvatar[$clientID]}{timestamp}{description:
> **Bu Sistem Hakkında**
Bu Kayıt Sisteminde, \`Kayıt Yetkilisi\` Rolünü Ayarlayın, Daha Sonra \`Erkek\` ve \`Kadın\` Üye Rolünü Ayarlayın, Sonra Tag'ı Ayarlayın. (zorunlu)

\`>>\` \`$getServerVar[prefix]normal-kayıt aç/kapat\` **| Normal Kayıt Sistemini Aç / Kapat.**
\`>>\` \`$getServerVar[prefix]kayıtlı-üye-rol\` **| Etiketlenen Rolü Üye Rolü Yapar.**
\`>>\` \`$getServerVar[prefix]kayıt-yetkili-rol\` **| Kayıt Yetkilisini Ayarlar.**
\`>>\` \`$getServerVar[prefix]kayıt-kanalı-ayarla\` **| Kayıtın Yapılacağı Kanalı Ayarlar.**
\`>>\` \`$getServerVar[prefix]kayıt-log-ayarla\` **| Kayıtların Log Tutulacağı Kanalı Ayarlar.**

}
{color:010101}}]



$channelSendMessage[$channelID;{newEmbed:{author:Pre - Kayıt Sistemi:$userAvatar[$clientID]}{thumbnail:$userAvatar[$authorID]}
{footer:© DarkLon Code:$userAvatar[$clientID]}{timestamp}{description:
> **Bu Sistem Hakkında**
Bu Kayıt Sisteminde, \`Kayıt Yetkilisi\` Rolünü Ayarlayın, Daha Sonra \`Erkek\` ve \`Kadın\` Üye Rolünü Ayarlayın, Sonra Tag'ı Ayarlayın. (zorunlu)

\`>>\` \`$getServerVar[prefix]pre-kayıt aç/kapat\` **| Pre Kayıt Sistemini Aç / Kapat.**
\`>>\` \`$getServerVar[prefix]kullanıcı-sayacı-sıfırla <@etiket>\` **| Etiketlenen Kullanıcının Kayıt Ettiği Üye Sayısını Sıfırlar.**
\`>>\` \`$getServerVar[prefix]sunucu-sayacı-sıfırla\` **| Sunucuda Yapılan Toplam Kayıt Sayısını Sıfırlar.**
\`>>\` \`$getServerVar[prefix]tag-ayarla\` **| Sunucuya Yeni Katılan Üyelerin İsminin Başına Verilecek Sembolü Ayarlar.**
\`>>\` \`$getServerVar[prefix]isim-yaş-arası-sembol-ayarla\` **| Kullanıcıların İsim Ve Yaşları Arasındaki Sembolü Ayarlar.**
\`>>\` \`$getServerVar[prefix]erkek-üye-rol-ayarla\` **| Erkek Üyelere Verilecek Rolü Ayarlar.**
\`>>\` \`$getServerVar[prefix]kız-üye-rol-ayarla\` **| Kız Üyelere Verilecek Rolü Ayarlar.**
\`>>\` \`$getServerVar[prefix]kayıt-yetkili-rol\` **| Kayıt Yetkilisini Ayarlar.**
\`>>\` \`$getServerVar[prefix]kayıt-kanalı-ayarla\` **| Kayıtın Yapılacağı Kanalı Ayarlar.**
\`>>\` \`$getServerVar[prefix]kayıt-log-ayarla\` **| Kayıtların Log Tutulacağı Kanalı Ayarlar.**
}
{color:010101}}]
$deleteIn[10s]
$deleteCommand

`},{//ayarlar
    name: "ayarlar",
    code: `
$channelSendMessage[$channelID;{newEmbed:{author:$username[$clientID] - Ayarlar:$userAvatar[$clientID]}{thumbnail:$userAvatar[$authorID]}
{footer:© DarkLon Code:$userAvatar[$clientID]}{timestamp}{description:
> **Bilgilendirme**
\`>>\` Bu Sunucuda **$replaceText[$getServerVar[toplamkayıtsayısı];1;0]** Kullanıcı Kayıt Edilmiş.
\`>>\` Bu Sistem **$getServerVar[sistemaktifsunucusayısı]** Sunucuda Aktif Durumda.
\`>>\` Toplam **$getVar[yapılantümkayıtlarınsayısı]** Kayıt İşlemi Gerçekleşmiş.


> **Normal Kayıt - Sistemi** ( $replaceText[$replaceText[$getServerVar[normalkayıt];açık; <:m_open_open:989917392257843200>];kapalı; <:d_open_closed:989917287899332639>] )
\`>>\` **Kayıt Yetkilisi Rolü -->** $replaceText[<@&$getServerVar[kayıtyetkilisi]>;<@&>;\`Ayarlanmamış\`]
\`>>\` **Kayıtlı Üye Rol -->** $replaceText[<@&$getServerVar[kayıtlıüyerol]>;<@&>;\`Ayarlanmamış\`]
\`>>\` **Kayıt Kanalı -->** $replaceText[<#$getServerVar[kayıtkanalı]>;<#>;\`Ayarlanmamış\`]
\`>>\` **Kayıt Log -->** $replaceText[<#$getServerVar[kayıtlog]>;<#>;\`Ayarlanmamış\`]


> **Pre Kayıt - Sistemi** ( $replaceText[$replaceText[$getServerVar[prekayıt];açık; <:m_open_open:989917392257843200>];kapalı; <:d_open_closed:989917287899332639>] )
\`>>\` **Kayıt Yetkilisi Rolü -->** $replaceText[<@&$getServerVar[kayıtyetkilisi]>;<@&>;\`Ayarlanmamış\`]
\`>>\` **Kayıtlı Erkek Üye Rol -->** $replaceText[<@&$getServerVar[kayıtlıerkeküyerol]>;<@&>;\`Ayarlanmamış\`]
\`>>\` **Kayıtlı Kadın Üye Rol -->** $replaceText[<@&$getServerVar[kayıtlıkadınüyerol]>;<@&>;\`Ayarlanmamış\`]
\`>>\` **Kayıt Kanalı -->** $replaceText[<#$getServerVar[kayıtkanalı]>;<#>;\`Ayarlanmamış\`]
\`>>\` **Kayıt Log -->** $replaceText[<#$getServerVar[kayıtlog]>;<#>;\`Ayarlanmamış\`]
\`>>\` **İsim Yaş Arasına Konulacak Sembol -->** \`$replaceText[$getServerVar[isimyaştagı];•; • (Başlangıç Ayarı)]\`
\`>>\` **Verilecek Tag -->** \`$replaceText[$getServerVar[kayıttag];★; ★ (Başlangıç Ayarı)]\`
}
{color:010101}}]

$deleteIn[10s]
$deleteCommand
$onlyForRoles[$getServerVar[kayıtyetkilisi];]
`}]