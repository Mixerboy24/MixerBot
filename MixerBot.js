//MixerBotin lähdekoodi. MixerBot Versio: 2.3.1
const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const client = new Discord.Client();

//Mixerbotin määritykset.

client.on('ready', () => {
  console.log(`Kirjatunut sisään ${client.user.tag}!`);

  client.user.setStatus('Online')

   client.user.setGame('m!help | MixerBot 2.3.1')
   
 
  });

//MixerBotin API tiedostot


//MixerBotin komennot 

client.on('message', msg => {
  if (msg.content === 'm!keksi') {
    msg.reply('haluatko keksin? Ota yksi :cookie:');
  }
});

client.on('message', msg => {
   if (msg.content === 'm!ping') {
     msg.reply('**MixerBot info** \n*Network* OK \n*Database* OK \n*Log* OFF \n*Palvelin:* TehomyllyV3 (Windows 10 Pro (Insider program))');
   }
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('**MixerBotin komennot** \n**m!ping** -- kertoo onko botti paikalla ja antaa server datan \n**m!keksi** -- Antaa keksin \n**m!rikki** -- Antaa vituiks meni kuvan \n**m!love** -- Kertoo runon :3 \nMusiikki komennot: \n**m!play** -- Hakusana tai yt url (vain #no-mic-chat ) \n**m!skip** -- Skippaa biisin \n**m!volume** -- muuttaa äänenvoimakkuuttaS');
  }

});

client.on('message', msg => {
  if (msg.content === 'm!rikki') {
    msg.reply('https://i.imgur.com/f4PXYke.png');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!love') {
    msg.reply('Sä kysyit kumpaa rakastan enemmän,\nsua vai elämää.\nMä vastasin elämää.\nSä suutuit, lähdit pois,\netkä koskaan tullut takas.\nEn kerenny sanoo,\net sä oot mun elämä.')
  }
});

//Uusi henkilö tulee palvelimelle
//client.on('guildMemberAdd', member => {
  

 //      console.log('User ' + member.user.username + 'liityi juuri palvelimelle.')

   //    var role = member.guild.roles.find('name', 'Jäsen');

     //  member.addRole(role)

//});


//MixerBotin musiikki ominaisuus
const Bot = new Discord.Client();
music(Bot, {
	prefix: 'm!',        
	global: true,      
	maxQueueSize: 10,   
	clearInvoker: true, 
    channel: 'Music'    
});



//Mixerbotin Discord-apin avain. 
Bot.login('Token')
client.login('Token');
  // Dev: (C)Mixerboy24Tech https://www.mixerboy24.fi Discord: https://discord.gg/sFyFf4n
