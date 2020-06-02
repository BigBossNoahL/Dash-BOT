const Discord = require('discord.js');
const Dash = new Discord.Client();

Dash.on("ready", () => {
    bot.user.setActivity(`Je suis nouveau !`);
  });

var prefixB = "!"

Dash.on("ready", function () {
    console.log("kick-ban.js connected!");
  });

Dash.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith(prefixB + 'kick')) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You don't have permission to do this !`);
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                  .kick('Optional reason that will display on audit logs')
                  .then(() => {
                      message.reply(`Successfully kicked :arrow_forward: ${user.tag}`);
                  })
                  .catch(err => {
                      message.reply('I was unable to kick the member');
                      console.log(err);
                  });
            } else {
                message.reply("That's user isn't in this server!");
            }
        } else {
            message.reply("You didin't mention the user to kick")
        }
    }
});

Dash.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith(prefixB + 'ban')) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You don't have permission to do this !`);
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                  .ban('Optional reason that will display on audit logs')
                  .then(() => {
                      message.reply(`Successfully banned :arrow_forward: ${user.tag}`);
                  })
                  .catch(err => {
                      message.reply('I was unable to ban the member');
                      console.log(err);
                  });
            } else {
                message.reply("That's user isn't in this server!");
            }
        } else {
            message.reply("You didin't mention the user to ban")
        }
    }
});

Dash.login('NzA1NDg1ODA5NjY2NzUyNjEz.Xr_oeg.Ye9A0uoT-7ujEEOTPOK_WWiiwHw');
