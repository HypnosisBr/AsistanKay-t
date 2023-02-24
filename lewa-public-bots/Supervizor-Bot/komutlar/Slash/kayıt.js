module.exports = [{
    name: "kayıtkur",
    type: "interaction",
    prototype: "slash",
    $if: "v4",
    code : `
$if[$hasPerms[$guildID;$authorID;admin]==false]
$interactionReply[;{newEmbed:{description::exclamation: <@$authorID> Bu komutu sadece **Yönetici** iznine sahip kişiler kullanabilir.}{color:RED}{delete:5s}};;;everyone;]
$else
$setServerVar[kayıtyetkilisi;$interactionData[options.data[0].value]]
$setServerVar[kayıtlıerkeküyerol;$interactionData[options.data[1].value]]
$setServerVar[xy;$interactionData[options.data[2].value]]
$setServerVar[kayıtlıkadınüyerol;$interactionData[options.data[3].value]]
$setServerVar[xx;$interactionData[options.data[4].value]]
$setServerVar[kayıtkanalı;$interactionData[options.data[5].value]]
$setServerVar[kayıtlog;$interactionData[options.data[6].value]]
$setServerVar[isimyaştagı;$interactionData[options.data[7].value]]
$setServerVar[kayıttag;$interactionData[options.data[8].value]]

$interactionReply[;{newEmbed:
{title:<a:piedra_gif:1015540462037246002> Kayıt Sistemi Kuruldu:}
{description:
\` ❯ \` <@&$interactionData[options.data[0].value]>(Kayıt Yetkilisi) 
\` ❯ \` <@&$interactionData[options.data[1].value]> & <@&$interactionData[options.data[2].value]>(Erkek Üye Rol) 
\` ❯ \` <@&$interactionData[options.data[3].value]> & <@&$interactionData[options.data[4].value]>(Kadın Üye Rol) 
\` ❯ \` <#$interactionData[options.data[5].value]>(Kayıt Kanalı) 
\` ❯ \` <#$interactionData[options.data[6].value]>(Kayıt Log)
\` ❯ \` \` $interactionData[options.data[7].value] \` (İsim Yaş Sembolü) 
\` ❯ \` \` $interactionData[options.data[8].value] \`(Tag)}
{color:WHITE}};;;everyone;]
$description[1;***İpucu:*** *Bunlara ek olarak burç rollerini \`manuel\` ayarlamalısın.*]
$color[1;WHITE]
$onlyPerms[admin;{newEmbed:{description::exclamation: <@$authorID> Bu komutu sadece **Yönetici** iznine sahip kişiler kullanabilir.}{color:RED}{delete:5s}}]
$endif
`}]