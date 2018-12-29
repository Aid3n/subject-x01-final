const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Cuestionando su petición...");
    let target = message.mentions.users.first() || message.author;
    
    await message.channel.send("There is " + message.mentions.users.first() + " avatar!");
    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "wima.png"
        }
    ]});
       
    msg.delete();
}

module.exports.help = {
    name: "wima"
}



// love you
bot.on('message', message => {
  if (message.content === 'love you') {
      message.channel.send("I love you too ♥");
      message.channel.send({
            files: [
                "./files/kokoro.png"
            ]
        })
  }
});

