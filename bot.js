const Discord = require('discord.js'), client = new Discord.Client();
client.login('NjkxNTc5NTY5NDkyMTk3Mzc4.Xn0Vdg._SgM6bH-MxzhKUFuXl6GwkyttNM');
let prefix = "$"

//LinkFilter

client.on("message", message => {
  if (message.channel.type === "dm") return;
  if(message.author.bot) return;
  if (message.channel.id === "688770063129641058") return;
  if(message.content.includes("http")) {
    message.channel.send(`cici**Kérlek ne küldj be linkeket!** ${message.author}`).then(msg => {msg.delete(11000)}).catch(err => {if (err) throw err;});
    message.delete(5000)
  }
  
});

//MessageBot
/*
client.on("message", message => {
  
  if(message.content.includes("*")) {
  
     if(message.author.bot) return;
    
    message.delete()
    
  message.channel.send(message.content)
  }
});*/

//info

client.on("message", message => {
  
  if (message.content.toLowerCase().includes('$?')) {
     
   if(message.author.bot) return;
    
    message.reply(' **_Modulhiba miatt jelenleg nem tudok segíteni! / I can not help you right now due to a module error!_**')
  }
  });

//Clear messages

client.on("message", message => {
    if (message.channel.type === "dm") return;
    let kuldo = message.author, cont = message.content.slice(prefix.length).split(" "), args = cont.slice(1);
    if (message.content.startsWith("$clear")) {
        async function purge() {
            if (!message.member.roles.find(m => m.name === "botjog")) { return message.channel.send("Ehhez nincs jogod főnök! 🙂 " + kuldo.toString());}
            if (args[0] == 0) {return message.channel.send("Kéne egy szám! " + message.author); };
            if (args[0] > 100) {message.channel.send("100 nál többet nem tudok törölni! " + message.author + " (Te " + args[0] + " üzenetet akartál kitöröltetni)"); return};
            if (isNaN(args[0])) {
                message.channel.send('50 db üzenet automatikusan törlésre kerül!');
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' Üzenet találva, törlés...');

            message.channel.bulkDelete(fetched)
            .catch(error => console.log(`Error: ${error}`));
        }
          purge();
}});


//Watching

client.on("ready", async () => {
    console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
    client.user.setActivity("Help: $? ,  Version: 1.0", {type: "WATCHING"});
});

//Welcome

client.on('guildMemberAdd', async member => {
  var role = member.guild.roles.find('name', 'Member')
  member.addRole(role)
  member.send("Hi, " + `${member}` + "! Thx for join SouliteGames Discord server!\n\nMy prefix is: $    --->   My command list: $?")
  });
