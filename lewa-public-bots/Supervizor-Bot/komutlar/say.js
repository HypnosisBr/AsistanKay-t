module.exports = [{
    name: "say",
    $if: "v4",
    code : `
$forEachMember[1;{"tagsay": "$getServerVar[kayıttag]"};tagsay;]
$author[1;$serverName[$guildID];$serverIcon[$guildID]]
$description[1;
\` ❯ \` Sesli Kanalda **$get[seslikanalüyesayısı]** Üye Bulunuyor.
\` ❯ \` Sunucuda Toplam **$membersCount** Üye Bulunuyor. (**$sum[$membersCount[$guildID;online];$membersCount[$guildID;idle];$membersCount[$guildID;dnd]]** Aktif)
\` ❯ \` Toplam $replaceText[$djsEval[message.guild.roles.cache.filter(x => x.id == '$getServerVar[kayıtlıkadınüyerol]').map(x =>  " **"+ x.members.size + "** " );yes];';] Kadın, $replaceText[$djsEval[message.guild.roles.cache.filter(x => x.id == '$getServerVar[kayıtlıerkeküyerol]').map(x =>  " **"+ x.members.size + "** " );yes];';] Erkek Üyemiz Bulunuyor.
\` ❯ \` $replaceText[$djsEval[message.guild.roles.cache.filter(x => x.id == '$getServerVar[tagrolü]').map(x =>  " **"+ x.members.size + "** " );yes];';] Kişi (**$getServerVar[kayıttag]**) Tagımızı Alarak Bizi Desteklemiş.
\` ❯ \` Sunucumuzda **$serverBoostCount** Boost Bulunuyor. ($replaceText[$serverBoostLevel;NONE;0 Seviye])
]
$color[1;010101]
$let[seslikanalüyesayısı;$djsEval[client.channels.cache.reduce((acc, ch) => acc + (ch.isVoice() ? ch.members.size : 0), 0);yes]]
$onlyForRoles[$getServerVar[kayıtyetkilisi];]
`},{
    name:"tagsay",
    type:"awaited",
    $if: "v4",
    code:`
$if[$checkContains[$toLowercase[$username[$authorID]];$getServerVar[kayıttag]]==true]
$if[$hasRoles[$guildID;$authorID;$getServerVar[tagrolü]]==false]
\`\`\`\n$userTag | Tag almış, rolü verildi!\n\`\`\`
$giveRole[$guildID;$authorID;$getServerVar[tagrolü]]
$endif
$else

$if[$hasRoles[$guildID;$authorID;$getServerVar[tagrolü]]==true]
<@$authorID> tag'a sahip değil, rolü alındı!
$takeRole[$guildID;$authorID;$getServerVar[tagrolü]]
$endif
$endif

    `
  }]  