const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.react('').catch(e => console.log(e));
}

module.exports.help = {
    name: "like"
