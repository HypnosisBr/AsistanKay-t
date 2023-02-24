module.exports = [{
    name: "r-bilgi",
    $if: "v4",
    code : `
<a:confety_piedra:1015540405577711686> Aramıza Hoş Geldin **P I E D R A**, Seni Burada Görmek Güzel.
Yanlardaki Teyit (<#1014090543225114644>)  Kanallarından Yetkililere İsmini ve Yaşını Belirterek Sunucumuza Giriş Yapabilirsin.
Tagımızı (<a:piedra_gif:1015540462037246002>) Alarak Bizi Destekleyebilir ve Tag'a Sahip Kişilere Özel Ayrıcalıklardan Yararlanabilirsin!

Yapmaman Gerekenler <#1015549572703076402> Kanalında Yazıyor! (Her üye kabul etmiş sayılır.)
$addReactions[<a:piedra_gif:1015540462037246002>]
$onlyForIDs[$botOwnerID;]
`},{
    name:"kurallar",
    $if: "v4",
    code:`
> **Sunucu Kuralları** <a:piedra_gif:1015540462037246002>
\`$getServerVar[kayıttag]\` Sunucu düzenini ve disiplinini bozmak veya bozmaya çalışmak yasaktır.

\`$getServerVar[kayıttag]\` Sunucu üyelerini tarik etmek ve kaos'a sebep olmak yasaktır.

\`$getServerVar[kayıttag]\` Herkese açık kanallarda +18 içerik paylaşmak yasaktır.

\`$getServerVar[kayıttag]\` Herkese açık kanallarda ağır(ailevi) küfür etmek, argo kullanmak yasaktır.

\`$getServerVar[kayıttag]\` Sesli odalarda üyeleri rahatsız etmek yasaktır.

\`$getServerVar[kayıttag]\` Raid, spam, flood, aşırı CAPS ...vs yasaktır.

\`$getServerVar[kayıttag]\` Baskın atmak veya  atmaya çalışmak yasaktır.

\`$getServerVar[kayıttag]\` Siyaset, din, dil, ırkçılık... yapmak yasaktır.

\`$getServerVar[kayıttag]\` Kişilerin özel bilgilerini paylaşmak yasaktır. (Kişilerin rahatsız olma durumunda kalıcı olarak karantinaya atılması söz konusudur.)

\`$getServerVar[kayıttag]\` Baskın yapmak veya tarik etmek yasaktır.

\`$getServerVar[kayıttag]\` Ses değiştirme programı, soundpad, vs. kullanmak yasaktır.

\`$getServerVar[kayıttag]\` Sunucu kanallarında ya da sunucu üyelerine özelden izinsiz reklam yapılması yasaktır.

\`$getServerVar[kayıttag]\` Sunucu üyelerini sunucu içerisinden veya özelden rahatsız etmek yasaktır.

\`$getServerVar[kayıttag]\` Kural ihlali yapan kullanıcıların mesajları silinir, discord sunucusundan süreli/süresiz olacak şekilde karantinaya atılır.

||@everyone @here||
$addReactions[<a:piedra_gif:1015540462037246002>]
$onlyForIDs[$botOwnerID;]
    `
  }]