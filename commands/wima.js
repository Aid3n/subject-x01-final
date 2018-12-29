const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send('This is your avatar! \n'+message.author.avatarURL).catch(e => console.log(e));
}

module.exports.help = {
    name: "wima"
}
