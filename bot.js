const Discord = require('discord.js');
const client = new Discord.Client();
var days = 1;
var go = false;
var song = false;
var sent = false;
var ans = '';
var time = 0;
client.on('ready', () => {
    //console.log('I am ready!');
    client.user.setStatus("Online");
    client.user.setGame("Munkreah's Birthday", "https://www.twitch.tv/test");
});

client.on('message', message => {
    ans = message.content;
    if (message.content === 'help') {
    	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "COMMANDS:",
    description: "Birthday Bot for munkreah",
    fields: [{
        name: "Birthday Song",
        value: "type \"Start\" to begin the song.\ntype \"Stop\" to stop the song."
      },
      {
        name: "Gifts",
        value: "type \"Gifts\" to see this command"
      },
      {
        name: "Random",
        value: ":V <- V: and so on"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Birthday Bot"
    }
  }
});
  	}
    if (message.content === 'Gifts') {
    	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "COMMANDS:",
    description: "Birthday Bot for munkreah",
    fields: [{
        name: "Gift Commands",
        value: "Gifts from\nNatsuru\nDarkij\nJek\n\nTo open the gifts, type \"Open Gift [NAME]\""
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Birthday Bot"
    }
  }
});
  	}
    if (message.content === 'Open Gift Natsuru') {
        message.reply('MESSAGE FROM NATSURU: \"HAPPY BDAY MONKEY!!! KEEP OP ING!!!\"');
    }
    if (message.content === 'Open Gift Jek') {
        message.reply('MESSAGE FROM JEK: \"HERPER BERTHDER MUNKREAH! Er herp u herf er gerd one! Here are my gifts for you:DDD\"\nProfile pic:\nhttps://imgur.com/a/R8b2xo2\nand here is the birthday picture I have been working on!\nsoon');
    }
    if (message.content === 'ping') {
    	message.reply('pong1');
  	}
    if (message.content === 'Munkreah' || message.content === 'munkreah') {
    	message.channel.send('Happy Birthday Munkreah!');
  	}
    if (ans === 'Start' || ans === 'start') {
    	message.channel.send('Happy Birthday Munkreah!');
        song = true;
        time = 0;
        ans = '';
  	}
    if (ans === 'stop' || ans === 'Stop') {
    	message.channel.send('Birthday son stoped');
        song = false;
        time = 0;
        ans = '';
        go = false;
        
  	}
    if (song == true){
        //time++;
        //if (time === 5)
            message.channel.send('Happy Birthday to Munkreahhhh!');
        //if (time === 10)
            message.channel.send('Happy Birthdayyy to Munkreahhhh!');
        //if (time === 15){
            message.channel.send('Happy Birthday to you!');
            song = false;
            go = true;
            sent = true;
        //}
    }
    
    
    if (go == true && (ans === 'no' || ans === 'No')) {
    	sent = true;
  	}
    if ((ans === 'yes' || ans === 'Yes') && go == true) {
    	message.channel.send('WHOOOOOOA :clap: :clap:  CONGRATS!');
        message.channel.send('HERES YOUR BDAY CAKE!');
        go = false;
        sent = false;
        ans = '';
        time = 0;
  	}
    if (go == true){
        if (sent == true){
            message.channel.send('Are you ' + days + '?');
            days++;
            sent = false;
            ans = '';
        }
    }
    //:V's
    if(message.content == ':V'){
        message.reply('V:');
    }
    if(message.content == ':v'){
        message.reply('v:');
    }
    if(message.content == '>:V'){
        message.reply('V:<');
    }
    if(message.content == '>:v'){
        message.reply('v:<');
    }
    //:U's
    if(message.content == ':U'){
        message.reply('U:');
    }
    if(message.content == ':u'){
        message.reply('u:');
    }
    if(message.content == '>:U'){
        message.reply('U:<');
    }
    if(message.content == '>:u'){
        message.reply('u:<');
    }
    //:Y's
    if(message.content == ':Y'){
        message.reply('Y:');
    }
    if(message.content == ':y'){
        message.reply('y:');
    }
    if(message.content == '>:Y'){
        message.reply('Y:<');
    }
    if(message.content == '>:y'){
        message.reply('y:<');
    }
    //:D's
    if(message.content == ':D'){
        message.reply('D:');
    }
    if(message.content == ':d'){
        message.reply('d:');
    }
    if(message.content == '>:D'){
        message.reply('D:<');
    }
    if(message.content == '>:d'){
        message.reply('D:<');
    }
    //:C's
    if(message.content == ':C'){
        message.reply('C:');
    }
    if(message.content == ':c'){
        message.reply('c:');
    }
    if(message.content == '>:C'){
        message.reply('C:<');
    }
    if(message.content == '>:c'){
        message.reply('c:<');
    }
    //:P's
    if(message.content == ':P'){
        message.reply('P:');
    }
    if(message.content == ':p'){
        message.reply('p:');
    }
    if(message.content == '>:P'){
        message.reply('P:<');
    }
    if(message.content == '>:p'){
        message.reply('p:<');
    }
    //:O's
    if(message.content == ':O'){
        message.reply('o:');
    }
    if(message.content == ':o'){
        message.reply('o:');
    }
    if(message.content == '>:O'){
        message.reply('O:<');
    }
    if(message.content == '>:o'){
        message.reply('o:<');
    }
    //:3's
    if(message.content == ':3'){
        message.reply('3:');
    }
    if(message.content == '>:3'){
        message.reply('3:<');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login('NDU2OTIzNjQ2MDQxMjYwMDQy.Dg6t_Q.ddblV6SWfekEjl21A8AnAq_V08g');
