const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.content == "!github"){
        const embed = new Discord.RichEmbed()
        .setColor('f4eb42')
        .setThumbnail('https://media.discordapp.net/attachments/478509969684299786/478509983659720704/AR01..jpg?width=480&height=480')
        .setTitle("Aid3n/bot-discord-in-js")
        .setURL("https://github.com/Aid3n/bot-discord-in-js")
        .setDescription("You cand find my github project here!")
        .setAuthor('Aiden', 'https://media.discordapp.net/attachments/478509969684299786/478999662053949451/38618692.jpg', 'https://github.com/Aid3n')
        message.channel.sendEmbed(embed);
        }
}

module.exports.help = {
    name: "github"
}
