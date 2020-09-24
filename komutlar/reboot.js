const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
if (message.author.id !== (ayarlar.sahip)) return message.channel.send('Bu komutu sadece **SAHİBİM** kullanabilir!**')

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(`Bot yeniden başlatılıyor!`);
     message.channel.send(embed).then(msg => {
        console.log("[BOT]Yeniden başlıyor");
        process.exit(0);
    });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
