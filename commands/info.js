const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Estadísticas generales de Disboard")
    .setColor("#eef372")
    .setThumbnail("https://cdn.discordapp.com/attachments/490642615323328513/490977773637337099/487324012087869455.png")
    .addField("Win:", "33", inline= true)
    .addField("Lose:", "10", inline= true)
    .addField("Withdraw:", "1", inline= true)
    .addField("Prop:", "74%", inline= true)
    .setFooter("Imanity: 15 Seirens: 1 Werebeast: 12  |  20/10/2018", "https://pbs.twimg.com/media/DnPeL62W0AYtW9Y.png:large")
    message.channel.send(embed);
}

module.exports.help = {
    name: "info"
}
