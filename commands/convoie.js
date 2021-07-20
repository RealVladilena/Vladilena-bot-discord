const Discord = require("discord.js");
const prefix = "*";


module.exports.run = async (bot, message, args) => {
  let botIcon = bot.user.displayAvatarURL;
  let embed = new Discord.MessageEmbed()
    .setDescription("Prochain convoi de la LAPTUS @here")
    .setColor("#FF8C00")
    .setThumbnail('https://cdn.discordapp.com/attachments/685973202031083579/702083963849801748/lp.png')
    .addField("Nom du bot", bot.user.username)
    .addField("🛃", "Date du convoie : 22/05/2020")
    .addField("➡️", "Information du convoie")
    .addField("Infomation chauffeur et chauffeur essaie LPS :", "Les remorque pour les chauffeurs et chauffeur en essaie seront donner par trucksbook !")
    .addField("🚛", "Départ : XXXXXXX")
    .addField("🚛", "Arrivé : XXXXXXX")
    .addField("🚛", "Livraison : XXXXXXXX")
    .addField("⚠", "DLC REQUIS : AUCUN")
    .addField("!", "--------------------")
    .addField("🛑", "Règle du convoi :")
    .addField("🛑", "Dépassement **INTERDIT** sauf voiture pilote- Venir avec le plein du camion, et 0% de dégâts")
    .addField("🛑", "Présence sur le discord de la LAPTUS n'est pas obligatoire mais conseiller !")
    .addField("🛑", "GPS réglés sur « éviter les autoroutes »")
    .addField("🛑", "CB en jeu réglé sur la 12")
    .addField("!", "--------------------")
    .addField("🦊", "**Idiot en tous genres ses mêmes pas la peine de vous pointer !**")
    .addField("🦊", "**Discord de la LAPTUS : https://discord.gg/W4wBXWv**")
    .addField("🦊", "**Page Trucksbook : https://trucksbook.eu/convoy/XXXXXX**");
    

  return message.channel.send(embed);
};

module.exports.help = {
  name: "convoilps"
};
