module.exports = [{
    name: "uptime",
    aliases: ['istatistik','i'],
    $if: "v4",
    code : `
$addField[1;> Komut Sayısı;$commandsCount Komut ($variablesCount değer);yes]
$addField[1;> Bot Aktifliği;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;years; Yıl];year; Yıl];months; Ay];month; Ay];seconds; Saniye];second; Saniye];hours; Saat;1];minutes; Dakika;1];minute; Dakika;1];days; Gün;1];day; Gün];weeks; Hafta];week; Hafta;1];yes]
$addField[1;> Bot Sahibi;<@$botOwnerID>;yes]
$author[1;$username[$clientID] - İstatistik;$userAvatar[$clientID]]
$thumbnail[1;$userAvatar[$clientID]]
$color[1;010101]
$onlyForRoles[$getServerVar[kayıtyetkilisi];]
`}]  