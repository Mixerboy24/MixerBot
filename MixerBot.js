//MixerBotin lähdekoodi. 
var Discord = require('discord.js');
var fs = require('fs');
var bot = new Discord.Client();
var snekfetch = require('snekfetch');
//Userdatan määritys /Storage/userData.json tiedostoon

var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));



bot.on('ready', () => {
  console.log('MixerBot on yhdistetty serverille')

  bot.user.setStatus('dnd')

  bot.user.setGame('_help | MixerBot 4.0_BETA')
});

//Mixerbotin määritykset.

bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '_'
  var cont = message.content.slice(prefix.length).split(' ');
  var args = cont.slice(1);

  if (sender.id === '513468676934991873') {
    return;
  }

  //komento lista

  if (msg === prefix + 'KEKSI') {
    message.channel.send('Haluatko keksin? Ota yksi :cookie:')

  }

  if (msg === prefix + 'PING') {
    message.channel.send('**MixerBot info** \n*Network* ```css\n OK``` \n*Database* ```\n Error: MySQL login error``` \n*Log* ```css\n OK``` \n*Palvelin:* ```Mb24Tech Webserver1 (Linux Ubuntu Server 18.04LTS)```')
  }

  if (msg === prefix + 'HELP') {
    message.channel.send('**MixerBotin komennot** \n**_ping** -- kertoo onko botti paikalla ja antaa server datan \n**_keksi** -- Antaa keksin \n**_rickroll** -- Tarviiko edes selventää? :D \n**_userstats** -- Kertoo montako viestiä olet lähettänyt palvelimella (29.11.2018 alkaen) \n**_version** -- Kertoo Botin version \n*Ylläpito komennot* \n**_some** -- Sosiaaliset mediat \n**Dev:** Mixerboy24Tech')
  }

  if (msg === prefix + 'RICKROLL') {
    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }

  if (msg === prefix + 'VERSION') {
    message.channel.send('**Version** \nMixerBot 4.0_BETA \n(Last update 29.03.2019, Updater: Mixerboy24#0024)')
  }

  if (msg === prefix + 'SOME') {
    message.channel.send('**Somet** \n Twitter: <https://www.twitter.com/Mb24official> \n Youtube: <https://www.youtube.com/c/Mixerboy24> \n Twitch: <https://www.twitch.tv/Mixerboy24> \n Facebook: <https://www.facebook.com/Mixerboy24Official> \n Instagram: <https://www.instagram.com/Mixerboy24> \n Steam: <https://steamcommunity.com/groups/Mixerboy24> \n LinkedIn: <https://www.linkedin.com/in/Mixerboy24/>')
}

  if (msg === prefix + 'BUGI') {
    message.channel.send(' Minussa on ongelma \n Jokin virhe ohjelmoinnissa \n Puutteita koodissa \n **Jos huomaat Bugin minussa. Raportoi se Githubiin tai Mixerboy24#0024 ')
}

  if (msg === prefix + 'CONFIRM') {
    message.member.addRole('513445707475058701')
  }

  if (msg === prefix + 'JEREONPARAS') {
     message.channel.send('Olen kyllä erimieltä asiasta. Vitsin Jere')
}

  if (msg === prefix + 'PIINIONPARAS') {
     message.channel.send('Ihme Piini. :3 Mukava ja hassu. Ota kukka :rose:')
}

if (msg === prefix + 'MIXERONPARAS') {
  message.channel.send('Pah. Mixeri paras. :joy: Missä unessa ja kenen?')
}

    //userData.json lukemis komento 
 if (msg === prefix + 'USERSTATS') {
   message.channel.send('Olet lähettänyt **' + userData[sender.id].messagesSent + '** viestiä!')
 }

  


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

});

bot.on('guildMemberAdd', member => {
  console.log('Käyttäjä ' + member.user.username + ' liityi juuri palvelimelle.')


 member.guild.channels.get('513445827641999371').send('**' + member.user.username + '**, Tervetuloa Miksaaja Cityyn. Muista lukea Tervetuloa kanava. "_confirm" komennolla saat jäsen roolin. :slight_smile: \n**Aulaan ei linkkejä eikä kuvia. muut kanavat on niitä varten!** ');
    
});

bot.on("messageDelete", (messageDelete) => {
  messageDelete.guild.channels.get('516292915362791434').send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
  
 });

bot.on('guildMemberRemove', member => {

  member.guild.channels.get('51516292915362791434').send('**' + member.user.username + '**, Lähti serveriltä :cry: ');

});






//Discord-apin avain. 
Bot.login('Token')
// Dev: (C)Mixerboy24Tech https://www.mixerboy24tech.fi Discord: https://mixerboy24.fi/discord/
