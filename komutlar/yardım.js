const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = function(client, message) {
  const emoji = client.emojis.find(emoji => emoji.name === "sucuk");
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(`:musical_note:  Muzik Komutları :musical_note:`)
    .addField(`${emoji} -Çal- Müzik Dinlersiniz `, `\`${prefix}çal\``)
    .addField(`${emoji} -Ses- Müziğin Sesin Ayarlarsınız`,`\`${prefix}ses <1/8>\``)
    .addField(`${emoji} -Geç- Şarkıyı Geçersiniz`, `\`${prefix}geç\``)
    .addField(`${emoji} -dc- Müziği durdurur `, `\`${prefix}dc\``)
    .addField(`${emoji} -davet- Botun linkini komutun kullanıldığı kanala atar`,`\`${prefix}davet\``)
    .addField(`${emoji} -radyo- Radyoyu açar`,`\`${prefix}radyo <kanal ismi>\``)
    .addField(`${emoji} -Çalan- Çalan Şarkı Hakkında Bilgi Verir`,`\`${prefix}çalan\``)
    .addField(`${emoji} -Duraklat- Şarkıyı Durdurursunuz`,`\`${prefix}duraklat\``)
    .addField(`${emoji} -Devam- Şarkıyı Devam Ettirirsiniz`,`\`${prefix}devam\``)
    .addField(`${emoji} -Sıra- Kuyruğu Görürsünüz`, `\`${prefix}sıra\``)
    .addField( `${emoji} -Botun Yardım Sunucusu (Support Server)`,  "[Yardım Sunucusu](şuanlık yok :d)")
    .setFooter("© Monika Music", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "yardım", "müzik", "muzik", "komutlar","help"],
  permLevel: 0
};

exports.help = {
  name: "müzik",
  description: "Tüm komutları gösterir.",
  usage: "müzik"
};
