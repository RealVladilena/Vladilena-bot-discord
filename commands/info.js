const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let botIcon = bot.user.displayAvatarURL;
  let embed = new Discord.MessageEmbed()
    .setDescription("Informations sur le bot")
    .setColor("#FF8C00")
    .setThumbnail('https://media.discordapp.net/attachments/822484140607012875/866028221179101204/Alice.png')
    .addField("Nom du bot", bot.user.username)
    .addField("Créer le", bot.user.createdAt)
    .addField("Commandes", "-----------")
    .addField(`${prefix}info`, "**Renvoie des informations sur le bot**")
    .addField(`${prefix}servinfo`, "**Renvoie des informations sur le serveur**")
    .addField(`${prefix}activity`, "**Donne l'information sur le statut du bot**")
    .addField(`${prefix}convoilps`, "**Donne les information sur le dernier convoie prevus orginser pas la LAPTUS !**")
    .addField(`${prefix}histoirelps`, "**Raconte l'histoire de la LAPTUS**")
    .addField(`${prefix}site`, "**Donne le lien vers le site internet de la Laptus**")
    .addField(`${prefix}partenaires`, "**Affiche le nom et le discord de nos partenaire**")
    .addField(`${prefix}version`, "**Affiche la version du serveur et du bot**");


  return message.channel.send(embed);
};

module.exports.help = {
  name: "info"
};