const Discord = require("discord.js");
const YTDL = require("ytdl-core");

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.platStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();
    
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var servers = {};

module.exports.run = async (bot, message, args) => {
    var server = servers[message.guild.id];

    if (server.dispatcher) server.dispatcher.end();
}

module.exports.help = {
    name: "skip"
}
