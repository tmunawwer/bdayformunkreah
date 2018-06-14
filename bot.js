const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    //console.log('I am ready!');
    client.user.setStatus("Online");
    client.user.setActivity("Munkreah's Birthday");
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong1');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NDU2OTIzNjQ2MDQxMjYwMDQy.DgRnnQ.d10C0MiX8R3VKU8ejXUifHesM9k');
