module.exports = [{
    name: "ysay",
    aliases: ['yetkili','yetkili-say'],
    $if: "v4",
    code : `
\`\`\`ini\n[  $serverName[$guildID] - Yetkili Bilgi  ]\n\`\`\`
\`\`\`css\n
|  TOPLAM  |  AKTIF  |  CEVRIMDISI  |
.-------------------------------------
|  [ $roleMembersCount[$getServerVar[kayıtyetkilisi]] ]   |  [ $get[toponline] ]  |    [ $get[topoffline] ]    |
\n\`\`\`

$let[topyetkili;$djsEval[const allUsers = client.users.cache;
const allMembers = guild.members.cache.filter(m => m.roles.cache.has('1014253693845127248'));
const onlineuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'online').size
const dnduser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'dnd').size
const idleuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'idle').size
const offlineuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'offline').size
const topyetkili = dnduser + onlineuser + idleuser + offlineuser

topyetkili;yes]

$let[toponline;$djsEval[const allUsers = client.users.cache;
const allMembers = guild.members.cache.filter(m => m.roles.cache.has('1014253693845127248'));
const onlineuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'online').size
const dnduser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'dnd').size
const idleuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'idle').size
const offlineuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'offline').size
const topyetkili = dnduser + onlineuser + idleuser + offlineuser
const toponline = dnduser + onlineuser + idleuser

toponline;yes]

$let[topoffline;$djsEval[const allUsers = client.users.cache;
const allMembers = guild.members.cache.filter(m => m.roles.cache.has('1014253693845127248'));
const onlineuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'online').size
const dnduser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'dnd').size
const idleuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'idle').size
const offlineuser = allMembers.filter(member => !member.user.bot && member.presence && member.presence.status === 'offline').size
const topyetkili = dnduser + onlineuser + idleuser + offlineuser
const toponline = dnduser + onlineuser + idleuser
const topoffline = offlineuser

topoffline;yes]

$onlyForRoles[$getServerVar[kayıtyetkilisi];]
`}]  