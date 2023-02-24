module.exports = [{
    name: "burç-rolleri",
    aliases: ['b-rolleri','brolleri'],
    code: `
**Merhaba, Aşağıdaki Butonlardan Herhangi Birine Tıklayarak Burcuna Ait Rolü Alabilirsin.**

I : <@&$getVar[Boğa]>
II : <@&$getVar[İkizler]>
III : <@&$getVar[Yengeç]>
IV : <@&$getVar[Aslan]>
V : <@&$getVar[Başak]>
VI : <@&$getVar[Terazi]>
VII : <@&$getVar[Koç]>
VIII : <@&$getVar[Akrep]>
IX : <@&$getVar[Yay]>
X : <@&$getVar[Oğlak]>
XI : <@&$getVar[Kova]>
XII : <@&$getVar[Balık]>

$addButton[3;XII;1;numbertwenty;no] 
$addButton[3;XI;1;numbereleven;no] 
$addButton[3;X;1;numberten;no] 
$addButton[3;IX;1;numbernine;no] 
$addButton[2;VIII;1;numbereight;no] 
$addButton[2;VII;1;numberseven;no] 
$addButton[2;VI;1;numbersix;no] 
$addButton[2;V;1;numberfive;no] 
$addButton[1;IV;1;numberfour;no] 
$addButton[1;lIl;1;numberthree;no] 
$addButton[1;II;1;numbertwo;no] 
$addButton[1;I;1;numberone;no]
$deleteCommand
$onlyForIDs[$botOwnerID;:exclamation: <@$authorID> **Bu Komut Sahibime Özel Dostum!**]
 `
  },{//1
    type: "interaction",
    prototype: "button",
    name: "numberone",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Boğa]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Boğa]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Boğa]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Boğa]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Boğa]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//2
    type: "interaction",
    prototype: "button",
    name: "numbertwo",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[İkizler]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[İkizler]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[İkizler]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[İkizler]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[İkizler]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//3
    type: "interaction",
    prototype: "button",
    name: "numberthree",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Yengeç]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Yengeç]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Yengeç]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Yengeç]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Yengeç]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//4
    type: "interaction",
    prototype: "button",
    name: "numberfour",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Aslan]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Aslan]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Aslan]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Aslan]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Aslan]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//5
    type: "interaction",
    prototype: "button",
    name: "numberfive",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Başak]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Başak]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Başak]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Başak]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Başak]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//6
    type: "interaction",
    prototype: "button",
    name: "numbersix",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Terazi]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Terazi]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Terazi]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Terazi]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Terazi]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//7
    type: "interaction",
    prototype: "button",
    name: "numberseven",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Koç]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Koç]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Koç]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Koç]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Koç]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//8
    type: "interaction",
    prototype: "button",
    name: "numbereight",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Akrep]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Akrep]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Akrep]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Akrep]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Akrep]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//9
    type: "interaction",
    prototype: "button",
    name: "numbernine",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Yay]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Yay]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Yay]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Yay]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Yay]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//10
    type: "interaction",
    prototype: "button",
    name: "numberten",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Oğlak]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Oğlak]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Oğlak]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Oğlak]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Oğlak]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//11
    type: "interaction",
    prototype: "button",
    name: "numbereleven",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Kova]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Kova]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Kova]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Kova]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Kova]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`},{//12
    type: "interaction",
    prototype: "button",
    name: "numbertwenty",
    $if: "v4",
    code: `
    $if[$hasRoles[$guildID;$authorID;$getServerVar[Balık]]==true]
    $takeRole[$guildID;$authorID;$getServerVar[Balık]]
    $interactionReply[;{newEmbed:{description:<:b_warn:1014645575091765359> <@&$getVar[Balık]> Rolü Üzerinizden Alındı!}{color:RED};;;everyone;yes]
    $else
    $giveRole[$guildID;$authorID;$getServerVar[Balık]]
    $interactionReply[;{newEmbed:{description:<:b_onay:1014645571765673984> <@&$getVar[Balık]> Rolü Üzerinize Verildi!}{color:GREEN};;;everyone;yes]
    $endif
`}]