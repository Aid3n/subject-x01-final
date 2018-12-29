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



//module.exports.run = async (bot, message, args) => {
  //  message.channel.send('This is your avatar! \n'+message.author.avatarURL).catch(e => console.log(e));
//}
