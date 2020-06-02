const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb') //Il faut installer le module lowdb (npm i --s lowdb)
const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('database.json'); //Il va créer une base de donnée (datebase) pour sauvegarder l'xp des membres des serveurs
const db = low(adapters);

var prefix = "$"

Dash.on("ready", function () {
  console.log("xp.js connected!");
});

Dash.on("ready", () => {
    bot.user.setActivity(`Je suis nouveau !`);
  });

db.defaults({ histoires : [], xp: []}).write()
   
Dash.on('message', message => {
     
    var msgauthor = message.author.id
   
    if (message.author.bot) return;
   
    if (!db.get("xp").find({user : msgauthor}).value()){
          db.get("xp").push({user : msgauthor, xp: 1}).write();

    } else {

        var userxpdb = db.get("xp").filter({user : msgauthor}).find("xp").value();
        console.log(userxpdb)

        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)
   
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
   
        if (message.content === prefixA + "xp"){
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
            var xpfinal = Object.values(xp);
            const XP_Embed = new Discord.MessageEmbed()
                .setTitle(`XP of ${message.author.username}`)
                .setColor('RANDOM')
                .setThumbnail(message.author.avatarURL())
                .addField("XP", `${xpfinal[1]} XP`)
                .addField("Leader board", "Coming soon")
                .addField("Level", "Coming Soon")
            message.channel.send(XP_Embed)
        }
 
Dash.login('TOKEN')
