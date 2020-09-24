const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Monika BOT")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("ORANGE")
  .setFooter(client.user.username, client.user.avatarURL)
  .setThumbnail("")
  .setDescription('Şarkı Dinlemek İçin Botu Kendi Sunucuna Davet Edebilirsin..')
  .setTimestamp()
  .setURL('https://discord.com/api/oauth2/authorize?client_id=720603091694780496&permissions=8&scope=bot')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite', 'davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet bağlantısını gönderir.',
  usage: 'davet'
};