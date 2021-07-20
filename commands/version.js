const Discord = require("discord.js");
const prefix = "*";


module.exports.run = async (bot, message, args) => {
  let botIcon = bot.user.displayAvatarURL;
  let embed = new Discord.MessageEmbed()
    .setDescription("**Version du serveur et du bot**")
    .setColor("#FF8C00")
    .setThumbnail('https://media.discordapp.net/attachments/822484140607012875/866028221179101204/Alice.png')
    .addField("Version bot :", "XX")
    .addField("Version serveur :", "XX");
  

  return message.channel.send(embed);
};

module.exports.help = {
  name: "version"
};
