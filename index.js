const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () =>{
    bot.user.setStatus("Online")
    bot.user.setActivity("testing")
});
bot.on('message', (message) => {
  if(message.content == 'test'){
    message.channel.send("tested");
  }
}
bot.login('NDU2OTIzNjQ2MDQxMjYwMDQy.DgRnnQ.d10C0MiX8R3VKU8ejXUifHesM9k');
