const Discord = require('discord.js');
const Dash = new Discord.Client();

Dash.on("ready", () => {
    bot.user.setActivity(`$help | !command`); //Game activity
  });

Dash.on("ready", function () {
    console.log("join-bye.js connected!");
  });

Dash.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'join');
  if (!channel) return;
  channel.send(`${member}`).then(sent => {
    sent.edit(JoinEmbed)
  });
});

Dash.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'join');
    if (!channel) return;
    channel.send(`${member} just leave the server.
Bye`); //Bye message
});

const JoinEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://static.hitek.fr/img/actualite/2015/05/fb_terminator-skynet-00258822.jpg')
    .setTitle(`Hello, welcome to this server!`)
    .setDescription('Please read the rules and enjoy')

Dash.login('TOKEN')
