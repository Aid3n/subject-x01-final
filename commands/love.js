const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    
    await message.channel.send(message.author + " loves you, " + message.mentions.users.first + "! ♥" );
    await mmessage.channel.send({
            files: [
                "./files/kokoro.png"
            ]
        })
}

module.exports.help = {
    name: "love"
}
