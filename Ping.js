const Discord = require('discord.js');
const Dash = new Discord.Client();

var prefixA = "$"

Dash.on("ready", () => {
    bot.user.setActivity(`Je suis nouveau !`); //Game activity
  });

Dash.on("ready", function () {
    console.log("ping.js connected!");
  });

Dash.on('message', async message => {
    if (message.content.startsWith(prefixA + "ping")) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Bot answering time's : ${sent.createdTimestamp - message.createdTimestamp}ms ??`);
        });
    }    
})

Dash.login('NzA1NDg1ODA5NjY2NzUyNjEz.Xr_oeg.Ye9A0uoT-7ujEEOTPOK_WWiiwHw')
