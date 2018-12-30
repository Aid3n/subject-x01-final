const Discord = require("discord.js");
const ytdl = require("ytdl-core");

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.platStream(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();
    
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var servers = {};

module.exports.run = async (bot, message, args) => {

    if (args[1]) {
        message.channel.sendMessage("Necesito el enlace.");
        return;
    }

    if (!message.member.voiceChannel) {
        message.channel.sendMessage("No estás en un canal de voz.");
        return;
    }

    //falta poner que diga "enlace añadido a la cola"
    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    };

    var server = servers[message.guild.id]

    server.queue.push(args[1]);

    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    });
}

module.exports.help = {
    name: "play"
}
