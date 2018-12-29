const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No se ha encontrado el comando.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} cargado!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} esta online en ${bot.guilds.size} servidores!`);

  bot.user.setActivity("A va.", {type: "STREAMING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

// @bot
bot.on('message', message => {
  if (message.content === '<@455725168556245003>') {
      return message.channel.send("Mi prefijo és _**!**_");
  }
});

// @baka
bot.on('message', message => {
  if (message.content === '<@327194208312229888>') {
      return message.channel.send("Ese cabrón me va a comer mis huevos roboticos por debajo del culo cual racimo de uvas virtuales.");
  }
});

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

// on_join
bot.on("guildMemberAdd", (member) => { 
  let guild = member.guild; 
  let memberTag = member.user.tag; 
  if(guild.systemChannel){
      guild.systemChannel.send(new Discord.RichEmbed() 
      .setTitle("Usuario nuevo!")
      .setColor('f4eb42')
      .setDescription(memberTag + " ha entrado al servidor!")
      .setThumbnail(member.user.displayAvatarURL) 
      .addField("Número de miembros", member.guild.memberCount)
      .setTimestamp()
      );
  }
});


bot.login(process.env.BOT_TOKEN);
