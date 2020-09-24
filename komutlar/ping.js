const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(`:trident: Şuanda Pingim : **${Math.round(client.ping)}** ms'dir. `);
     message.channel.send(embed);
    
        message.react("✅")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Tüm komutları gösterir.',
  usage: 'ping'
};