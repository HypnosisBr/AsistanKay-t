module.exports = [{
    name: "ilişki-rolleri",
    aliases: ['i-rolleri','irolleri'],
    code: `
**Merhaba, İlişki Rolleri Seçmek İçin Aşşağıdaki Butonları Kullanabilirsin.**

❤️ | \` Sevgilim Var \`
💔 | \` Sevgilim Yok \`
🌈 | \` LGBT \`
🤍 | \` Sevgili Yapmıyorum \`

$addButton[1;;2;sewyapmıyorum;no;🤍]
$addButton[1;;2;lgbt;no;🌈]
$addButton[1;;2;sewyok;no;💔]
$addButton[1;;2;sewvar;no;❤️]
$deleteCommand
$onlyForIDs[$botOwnerID;:exclamation: <@$authorID> **Bu Komut Sahibime Özel Dostum!**]
 `
  },{//sew-var
    type: "interaction",
    prototype: "button",
    name: "sewvar",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyok]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin! (<@&$getVar[sewyok]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyapmıyorum]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[sewyapmıyorum]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[lgbt]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[lgbt]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else

    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewvar]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[sewvar]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[sewvar]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[sewvar]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[sewvar]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
    $endif
    $endif
    $endif
`},{//sew-yok
    type: "interaction",
    prototype: "button",
    name: "sewyok",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewvar]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin! (<@&$getVar[sewvar]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyapmıyorum]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[sewyapmıyorum]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[lgbt]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[lgbt]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else

    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyok]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[sewyok]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[sewyok]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[sewyok]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[sewyok]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
    $endif
    $endif
    $endif
`},{//lgbt
    type: "interaction",
    prototype: "button",
    name: "lgbt",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyok]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin! (<@&$getVar[sewyok]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyapmıyorum]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[sewyapmıyorum]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewvar]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[sewvar]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else

    $if[$hasRoles[$guildID;$authorID;$getServerVar[lgbt]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[lgbt]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[lgbt]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[lgbt]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[lgbt]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
    $endif
    $endif
    $endif
`},{//sew-yapmıyom
    type: "interaction",
    prototype: "button",
    name: "sewyapmıyorum",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyok]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin! (<@&$getVar[sewyok]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewvar]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[sewvar]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else
    $if[$hasRoles[$guildID;$authorID;$getServerVar[lgbt]]==true]
    $interactionReply[;{newEmbed:{description:<:b_red:1014645573825081355> Sadece **1** İlişki Rolü Seçebilirsin!  (<@&$getVar[lgbt]> Rolünü bırak)}{color:RED};;;everyone;yes]
    $else

    $if[$hasRoles[$guildID;$authorID;$getServerVar[sewyapmıyorum]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[sewyapmıyorum]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[sewyapmıyorum]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[sewyapmıyorum]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[sewyapmıyorum]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
    $endif
    $endif
    $endif
`}]