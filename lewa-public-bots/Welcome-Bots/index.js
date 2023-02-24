const Aoi = require("aoi.js")
var fs = require('fs')
const bot = new Aoi.Bot({
    token: "BOT_TOKEN1",
    prefix: "$getVar[prefix]",
    intents: "all"
})

const bot2 = new Aoi.Bot({
    token: "BOT_TOKEN2",
    prefix: "$getVar[prefix]",
    intents: "all"
})

const bot3 = new Aoi.Bot({
    token: "BOT_TOKEN3",
    prefix: "$getVar[prefix]",
    intents: "all"
})

const bot4 = new Aoi.Bot({
  token: "BOT_TOKEN4",
  prefix: "$getVar[prefix]",
  intents: "all"
})

/*
BOT_TOKEN = DEVELOPER PORTALDAKİ BOTLARINIZIN TOKENLERİDİR

lütfen tokenlerinizi düzgün bir biçimde giriniz.

destek için discord sunucumuza katılabilirsiniz.

*/

const loader = new Aoi.LoadCommands(bot)
loader.load(bot.cmd,'./komutlar/')


const http = require('http');
const port = 8080;
const hostname = 'localhost';
// Creating Server
const server = http.createServer((req,res)=>{
	res.end("Project Actived")
});

// Making the server to listen to required
// hostname and port number
server.listen(port,hostname,()=>{

	// Callback
	console.log(`Server running at http://${hostname}:${port}/`);
});





//VOICE / MUSIC RELATED CONFIGURATION
const voice = new Aoi.Voice(bot, {
    soundcloud: {
      //clientId: "SoundCloud clientID", //remove the double slash if you want soundcloud
    },
    cache: {
      cacheType: "Memory",//Disk | None
      enabled: true,
    },
  }, false); //true or false for pruneMusic


const voice2 = new Aoi.Voice(bot2, {
    soundcloud: {
      //clientId: "SoundCloud clientID", //remove the double slash if you want soundcloud
    },
    cache: {
      cacheType: "Memory",//Disk | None
      enabled: true,
    },
  }, false); //true or false for pruneMusic


const voice3 = new Aoi.Voice(bot3, {
    soundcloud: {
      //clientId: "SoundCloud clientID", //remove the double slash if you want soundcloud
    },
    cache: {
      cacheType: "Memory",//Disk | None
      enabled: true,
    },
  }, false); //true or false for pruneMusic


const voice4 = new Aoi.Voice(bot4, {
    soundcloud: {
      //clientId: "SoundCloud clientID", //remove the double slash if you want soundcloud
    },
    cache: {
      cacheType: "Memory",//Disk | None
      enabled: true,
    },
  }, false); //true or false for pruneMusic




// --------------  VARİABLELER --------------- //
bot.variables({
prefix: "t",
welcome1: "SESLİ_KANAL_ID"
})

bot2.variables({
prefix: "t",
welcome2: "SESLİ_KANAL_ID"
})

bot3.variables({
prefix: "t",
welcome3: "SESLİ_KANAL_ID"
})

bot4.variables({
prefix: "t",
welcome4: "SESLİ_KANAL_ID"
})



//event
bot.onMessage()
bot.onJoin()
bot.onLeave()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onInteractionCreate()
//2
bot2.onMessage()
bot2.onJoin()
bot2.onLeave()
bot2.onGuildJoin()
bot2.onGuildLeave()
bot2.onInteractionCreate()
//3
bot3.onMessage()
bot3.onJoin()
bot3.onLeave()
bot3.onGuildJoin()
bot3.onGuildLeave()
bot3.onInteractionCreate()
//4
bot4.onMessage()
bot4.onJoin()
bot4.onLeave()
bot4.onGuildJoin()
bot4.onGuildLeave()
bot4.onInteractionCreate()
//event




//------------ REBOOT -----------//
bot.readyCommand({
  channel: "",
  code: `
$log[$userTag[$clientID] || İsmiyle Bot Aktif]
$joinVc[$getVar[welcome1]]
`
})

bot2.readyCommand({
    channel: "",
    code: `
  $log[$userTag[$clientID] || İsmiyle Bot Aktif]
  $joinVc[$getVar[welcome2]]
  `
  })

bot3.readyCommand({
    channel: "",
    code: `
  $log[$userTag[$clientID] || İsmiyle Bot Aktif]
  $joinVc[$getVar[welcome3]]
  `
  })

bot4.readyCommand({
    channel: "",
    code: `
  $log[$userTag[$clientID] || İsmiyle Bot Aktif]
  $joinVc[$getVar[welcome4]]
  `
  })






//--------------------STATUS----------------//
//bot1 durum
bot.status({
    text: "P I E D R A - İs Coming",
    type: "WATCHING",
    status: "dnd",
    time: 7
})
//bot2 durum
bot2.status({
    text: "P I E D R A - İs Coming",
    type: "WATCHING",
    status: "dnd",
    time: 7
})
//bot3 durum
bot3.status({
    text: "P I E D R A - İs Coming",
    type: "WATCHING",
    status: "dnd",
    time: 7
})
//bot4 durum
bot4.status({
  text: "P I E D R A - İs Coming",
  type: "WATCHING",
  status: "dnd",
  time: 7
})

