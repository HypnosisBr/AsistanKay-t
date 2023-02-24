const Aoi = require("aoi.js")
const config = require("./config.json")
var fs = require('fs')
const bot = new Aoi.Bot({
    token: config.token,
    prefix: config.prefix, //veya  -->  "$getVar[prefix]"
    intents: "all" //bunu "all" yaptıktan sonra developer portaldanda intentlerin "hepsini" açmalısınız.
})


const loader = new Aoi.LoadCommands(bot)
loader.load(bot.cmd,'./komutlar/')



//JOIN_VOICE
const voice = new Aoi.Voice(bot, {
    soundcloud: {},
    cache: {
      cacheType: "Memory",//Disk | None
      enabled: true,
    },
  }, false); //true or false for pruneMusic




// --------------  VARİABLELER --------------- //
bot.variables({
prefix: "!",
joinchannel: "SESLI_KANAL_ID",
yaktif: "0",
tagrolü: "TAGROL_ID",
tagdaeksilecek: "0",
normalkayıt: "kapalı",
prekayıt: "kapalı",

kayıtedilecek: "",
kayıtedilecekyaş: "",
kayıtedilecekisim: "",
kayıtyetkilisi: "",
kayıtlıüyerol: "",
kayıtlıerkeküyerol: "",
kayıtlıkadınüyerol: "",
kayıtkanalı: "",
kayıtlog: "",
kayıttag: "★",
isimyaştagı: "•",

normalkayıtemojisi: "▫️",
prekayıtemojisi: "▫️",
toplamkayıtsayısı: "1",
kullanıcınınyaptığıkayıtsayısı: "1",
sistemaktifsunucusayısı: "1",
yapılantümkayıtlarınsayısı: "1",

snipe: "",
snipek: "",
snipekk: "",


xx: "",
xy: "",

çekilişbildirim: "ROL_ID",
etkinlikbildirim: "ROL_ID",
sewvar: "ROL_ID",
sewyok: "ROL_ID",
lgbt: "ROL_ID",
sewyapmıyorum: "ROL_ID",

Boğa: "ROL_ID",
İkizler: "ROL_ID",
Yengeç: "ROL_ID",
Aslan: "ROL_ID",
Başak: "ROL_ID",
Terazi: "ROL_ID",
Koç: "ROL_ID",
Akrep: "ROL_ID",
Yay: "ROL_ID",
Oğlak: "ROL_ID",
Kova: "ROL_ID",
Balık: "ROL_ID"
//ROL_ID   leri silip sunucunuzdaki rollerin ID lerini girmeniz gerekiyor.
})




//event
bot.onMessage()
bot.onJoin()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onInteractionCreate()
bot.onMessageDelete()
//event



//Snipe
bot.deletedCommand({
  channel: "$channelID", 
  code:`
$setChannelVar[snipe;$message]
$setChannelVar[snipek;$channelUsed]
$setChannelVar[snipekk;$authorID]
`
})



//------------------ Join - Leave ------------------//
bot.joinCommand({
  channel: "$getServerVar[kayıtkanalı]",
  $if: "v4",
  code: `

$if[$getServerVar[normalkayıt]==açık]
**$serverName[$guildID]** sunucumuza hoş geldin! <@$authorID> <@&$getServerVar[kayıtyetkilisi]> 🎉

Hesabın \`$creationDate[$authorID]\` tarihinde oluşturulmuş **$replaceText[$replaceText[$checkContains[$creationDate[$authorID;time];year;month];true;<:onayland:1014643550044049500> Güvenli!];false;<:onaylanmad:1014643551545606204> Güvenli Değil!]**
Seninle beraber **$membersCount** <:m_members:1014651009047461919> kişiye ulaştık.

Sunucu kurallarımız <#1014102955038875659> kurallar kanalında belirtilmiştir, lütfen okumayı unutmayın.
*__Solda ki sesli kanallara geçerek teyit verip kayıt olabilirsiniz.__* <a:agiris:1014644087862870037>

$changeNickname[$authorID;$getServerVar[kayıttag] Kayıtsız]
$onlyIf[$getServerVar[prekayıt]!=kapalı;]
$endif


$if[$getServerVar[prekayıt]==açık]
**$serverName[$guildID]** sunucumuza hoş geldin! <@$authorID> <@&$getServerVar[kayıtyetkilisi]> 🎉

Hesabın \`$creationDate[$authorID]\` tarihinde oluşturulmuş **$replaceText[$replaceText[$checkContains[$creationDate[$authorID;time];year;month];true;<:onayland:1014643550044049500> Güvenli!];false;<:onaylanmad:1014643551545606204> Güvenli Değil!]**
Seninle beraber **$membersCount** <:m_members:1014651009047461919> kişiye ulaştık.

Sunucu kurallarımız <#1014102955038875659> kurallar kanalında belirtilmiştir, lütfen okumayı unutmayın.
*__Solda ki sesli kanallara geçerek teyit verip kayıt olabilirsiniz.__* <a:agiris:1014644087862870037>
$changeNickname[$authorID;$getServerVar[kayıttag] Kayıtsız]
$onlyIf[$getServerVar[prekayıt]!=kapalı;]
$endif
`
})



//BU KOMUT SLASHLI KAYIT SİSTEMİ İÇİNDİR, KULLANMAK İÇİN INTENTLERİNİZİ AÇMAYI UNUTMAYIN!!!
bot.command({
  name: "create",
  code: `
  s
$createApplicationCommand[$guildID;kayıtkur;Kayıt Sistemini Ayarla;true;slash;yetkilirolü:Bir Rol Etiketle:true:9;erkeküyerolü:Bir Rol Etiketle:true:9;erkeküyerol2:Bir Rol Etiketle(ErkekÜyeRolü2):true:9;kadınüyerolü:Bir Rol Etiketle:true:8;kadınüyerol2:Bir Rol Etiketle(KadınÜyeRolü2):true:9;kayıtkanalı:Bir Kanal Etiketle:true:7;kayıtlog:Bir Kanal Etiketle:true:7;isimyaşsembolü:Bir Sembol Gir! Örn --> " | ":true:3;tagayarla:Bir Sembol Gir! Örn --> " ★ ":true:3]

$onlyForIDs[$botOwnerID;]`
})

  

//------------ reboot -----------//
bot.readyCommand({
  channel: "",
  code: `
$log[$userTag[$clientID] || İsmiyle Bot Aktif]
$joinVc[$getVar[joinchannel]]
`
})





//--------------------STATUS----------------//
bot.status({
    text: config.status,
    type: "WATCHING",
    status: "dnd",
    time: 7
})

bot.status({
    text: config.status1,
    type: "PLAYING",
    status: "dnd",
    time: 7
})

bot.status({
    text: config.status2,
    type: "LISTENING",
    status: "dnd",
    time: 7
})

bot.status({
    text: config.status3,
    type: "WATCHING",
    status: "dnd",
    time: 7
})