const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("No se ha podido encontrar al usuario.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reportes")
    .setColor("#eef372")
    .addField("Usuario reportado:", `${rUser} ID: ${rUser.id}`)
    .addField("Reportado por:", `${message.author} ID: ${message.author.id}`)
    .addField("Canal:", message.channel)
    .addField("Hora:", message.createdAt)
    .addField("Razón:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reportes");
    if(!reportschannel) return message.channel.send("No se ha podido encontrar el canal 'reportes'.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}