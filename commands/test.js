const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let testembed = new Discord.RichEmbed()
    .setTitle("Aiden")
    .setDescription("Dani, mayormente conocido como Aiden es de Valencia y tiene 15 años.")
    .setColor("#eef372")
    .addField("Wars jugadas:", "0")
    .addField("Puntuación general:", "0")
    .addField("Media:", "0 pts")
    .addField("Entrada al clan:", "6/09/2018")
    message.channel.send(testembed);
}

module.exports.help = {
    name: "test"
}