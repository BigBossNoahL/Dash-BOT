const Discord = require('discord.js');
const Dash = new Discord.Client();

var prefix = "$"

Dash.on("ready", function () {
  console.log("message.js connected!");
});

Dash.on("ready", () => {
    bot.user.setActivity(`Je suis nouveau !`);
  });

const HelpEmbed = new Discord.MessageEmbed()
    .setTitle('=> Help <=')
    .setDescription('Help page')
    .setColor('RANDOM')
    .addFields(
        { name: "$info", value: `Information about this bot`},
        { name: "$tools", value: `Bot's tools`},
        { name: "$developers", value: `Developers page`},
        { name: "$ping", value: `Bot's answering time in 'ms'`},
    )
Dash.on('message', message => {
    if (message.content.startsWith(prefixA + "help")) {
        message.channel.send(HelpEmbed)
    }
});
