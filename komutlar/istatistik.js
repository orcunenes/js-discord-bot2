const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, params) => {
  msg.delete();
  console.log(">istatistik komutu " + msg.author.username + '#' + msg.author.discriminator + " tarafından kullanıldı.")
const emoji3 = client.emojis.find(emoji => emoji.name === "berkhesab");
   const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setTitle(`:bar_chart: Shiina :bar_chart:`)
  .addField(`<a:sucuk:733603418568130580> Ping`, client.ping+" ms", true)
  .addField(`<a:sucuk:733603418568130580> Kullanıcılar`, client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField(`<a:sucuk:733603418568130580> Sunucular`, client.guilds.size.toLocaleString(), true)
  .addField(`<a:sucuk:733603418568130580>  Kanallar`, client.channels.size.toLocaleString(), true)
  .addField(`<a:sucuk:733603418568130580> Bellek kullanımı`, (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField(`<a:sucuk:733603418568130580> Çalışma süresi`, duration)
 .setThumbnail(client.user.avatarURL)
  return msg.channel.send(istatistikler);
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bilgi","i","botbilgi","info"],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};