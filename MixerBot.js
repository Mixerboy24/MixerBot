//MixerBotin lähdekoodi. 
var Discord = require('discord.js');
var fs = require('fs');
var bot = new Discord.Client();

//Userdatan määritys /Storage/userData.json tiedostoon

var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));


bot.on('ready', () => {
  console.log('MixerBot on yhdistetty serverille')

  bot.user.setStatus('dnd')

  bot.user.setGame('_help | MixerBot 3.0.4_BETA')
});

//Mixerbotin määritykset.

bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '_'
  var cont = message.content.slice(prefix.length).split(' ');
  var args = cont.slice(1);

  if (sender.id === '429702143923060747') {
    return;
  }

  //komento lista

  if (msg === prefix + 'KEKSI') {
    message.channel.send('Haluatko keksin? Ota yksi :cookie:')

  }

  if (msg === prefix + 'PING') {
    message.channel.send('**MixerBot info** \n*Network* ```css\n OK``` \n*Database* ```\n Error: MySQL login error``` \n*Log* ```css\n OK``` \n*Palvelin:* ```TehomyllyV3 (Windows 10 Pro (Insider program))```')
  }

  if (msg === prefix + 'HELP') {
    message.channel.send('**MixerBotin komennot** \n**_ping** -- kertoo onko botti paikalla ja antaa server datan \n**_keksi** -- Antaa keksin \n**_rickroll** -- Tarviiko edes selventää? :D \n**_userstats** -- Kertoo montako viestiä olet lähettänyt palvelimella (29.11.2018 alkaen) \n**_version** -- Kertoo Botin version \n*Ylläpito komennot* \n**_purge** -- poistaa viestejä (esim: _purge 2) \n**Dev:** Mixerboy24Tech')
  }

  if (msg === prefix + 'RICKROLL') {
    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }

  if (msg === prefix + 'VERSION') {
    message.channel.send('**Version** \nMixerBot 3.0.4_BETA \n(Last update 29.11.2018, Updater: Mixerboy24)')
  }
  
  if (msg === prefix + 'CONFIRM') {
    message.member.addRole('513445707475058701')
  }


      //userData.json lukemis komento 
  //if (msg === prefix + 'USERSTATS') {
  //  message.channel.send('Olet lähettänyt **' + userData[sender.id].messagesSent + '** viestiä!')
  // }

  


  //MixerBot userDatan kerääminen

     //käyttäjä kenen data kirjotetaan data tiedostoon
  if (!userData[sender.id]) userData[sender.id] = {
    messagesSent: 0 

  }

     
  userData[sender.id].messagesSent++;

      //Miten MixerBot tallentaa datan tiedostoon
  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
       if (err) console.error(err);

  });

 
  //Uusi henkilö tulee palvelimelle, #aula kanava
  bot.on('guildMemberAdd', member => {
    console.log('Käyttäjä ' + member.user.username + ' liityi juuri palvelimelle.')
  
  
   member.guild.channels.get('513445827641999371').send('**' + member.user.username + '**, Tervetuloa Miksaaja Cityyn. Muista lukea' + message.guild.channels.find(channel => channel.name === 'tervetuloa') + ' "_confirm" komennolla saat jäsen roolin. :slight_smile:');
  
  });


});

//Mixerbotin Discord-apin avain. 
Bot.login('Token')
// Dev: (C)Mixerboy24Tech https://www.mixerboy24.fi Discord: https://mixerboy24.fi/discord/
