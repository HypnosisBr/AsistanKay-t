module.exports = [{
    name: "sayaçları-sıfırla",
    code: `
$setServerVar[toplamkayıtsayısı;1] 
$setVar[yapılantümkayıtlarınsayısı;1]
$setUserVar[kullanıcınınyaptığıkayıtsayısı;$sum[$getServerVar[kullanıcınınyaptığıkayıtsayısı];1];$authorID]

$description[1;Başarıyla Tüm Sayaçlar Sıfırlanmıştır!]
$color[1;ff0000]
$onlyForIDs[$botOwnerID;:exclamation: <@$authorID> **Bu Komutu Sadece Sahibim Kullanabilir!**]
    `
  }]