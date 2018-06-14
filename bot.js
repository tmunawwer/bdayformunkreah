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
    client.user.setActivity("Munkreah's Birthday");
});

client.on('message', message => {
    ans = message.content;
    if (message.content === 'ping') {
    	message.reply('pong8');
  	}
    if (message.content === 'Munkreah' || message.content === 'munkreah') {
    	message.channel.send('Happy Birthday Munkreah!');
  	}
    if (message.content === 'Start' || message.content === 'start') {
    	message.channel.send('Happy Birthday Munkreah!');
        song = true;
        time = 0;
  	}
    if (song == true){
        message.channel.send('Happy Birthday to Munkreahhhh!');
        time++;
        if (time === 5)
            message.channel.send('Happy Birthdayyy to Munkreahhhh!');
        if (time === 10){
            message.channel.send('Happy Birthday to you!');
            song = false;
            go = true;
            sent = true;
        }
    }
    if (go == true){
        if (sent == true){
            message.channel.send('Are you ' + days + '?');
            days++;
            sent == false;
            ans = '';
        }
    }
    
    if (go == true && (ans === 'no' || ans === 'No')) {
    	sent == true;
  	}
    if ((ans === 'yes' || ans === 'Yes') && go == true) {
    	message.channel.send('WHOOOOOOA :clap: :clap:  CONGRATS!');
        message.channel.send('HERES YOUR BDAY CAKE! :bdaycake:');
        go = false;
        sent == false;
        ans = '';
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
client.login('NDU2OTIzNjQ2MDQxMjYwMDQy.DgRnnQ.d10C0MiX8R3VKU8ejXUifHesM9k');
