const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("No se ha podido encontrar al usuario.");

    let Embed = new Discord.RichEmbed()
    .setTitle(`${rUser}`)
    .setDescription(`${rUser}`)
    .setColor("#eef372")
    .addField("Wars jugadas:", "0")
    .addField("Puntuación general:", "0")
    .addField("Media:", "0 pts")
    .addField("Entrada al clan:", "6/09/2018")
    message.channel.send(Embed);
}

module.exports.help = {
    name: "tet"
}
