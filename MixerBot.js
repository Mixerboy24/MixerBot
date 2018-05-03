//MixerBotin lähdekoodi. 
var Discord = require('discord.js');
var fs = require('fs');
var bot = new Discord.Client();

//Userdatan määritys /Storage/userData.json tiedostoon

var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));

bot.on('ready', () => {
  console.log('MixerBot on yhdistetty serverille')
  
  bot.user.setStatus('dnd')

  bot.user.setGame('.help | MixerBot 3.0.2')

});

//Mixerbotin määritykset.

bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '.'

  if (sender.id === '429702143923060747') {
    return;
  }

  //komento lista

  if (msg === prefix + 'KEKSI') {
    message.channel.send('Haluatko keksin? Ota yksi :cookie:')

  }

  if (msg === prefix + 'PING') {
    message.channel.send('**MixerBot info** \n*Network* OK \n*Database* OK \n*Log* OFF \n*Palvelin:* TehomyllyV3 (Windows 10 Pro (Insider program))')
  }

  if (msg === prefix + 'HELP') {
    message.channel.send('**MixerBotin komennot** \n**.ping** -- kertoo onko botti paikalla ja antaa server datan \n**.keksi** -- Antaa keksin \n**.rickroll** -- Tarviiko edes selventää? :D \n**.userstats** -- Kertoo montako viestiä olet lähettänyt palvelimella (2.5.2018 alkaen) \n **.version** -- Kertoo Botin version \n**Dev:** Mixerboy24Tech')
  }

  if (msg === prefix + 'RICKROLL') {
    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }

  if (msg === prefix + 'USERSTATS') {
    message.channel.send('Olet lähettänyt **' + userData[sender.id].messagesSent + '** viestiä!')
  }
    
  if (msg === prefix + 'VERSION') {
    message.channel.send('**Version** \nMixerBot 3.0.2 \n(Last update 2.5.2018)')
  }

  
  //Viestien poisto komento
if (msg.startsWith(prefix + 'PURGE')) {
   
    async function purge() {
      message.delete();

      if (!message.member.roles.find('name', '**BOT ADMIN ROLE (example Admin)**')) {
        message.channel.send('Ylläpidon komento :3 Hih :) ');
        return;
      }
 
      if (isNaN(args[0])) {
        message.channel.send('Montako viestiä haluat poistaa?  \n Esimerkki: ' + prefix + 'purge 3');
        return;
      }

      var fetched = await message.channel.fetchMessages({limit: args[0]});
      console.log(fetched.size +  ' Viestit löydetty. Poistetaan . . .' );

      message.channel.bulkDelete(fetched)
        .catch(error => message.channel.send('Virhe: ${error}'));
    }

    purge();


  }

  //MixerBot userDatan kerääminen ja ilmoittamis komento




     //käyttäjä kenen data kirjotetaan data tiedostoon
  if (!userData[sender.id]) userData[sender.id] = {
    messagesSent: 0
  }
     
  userData[sender.id].messagesSent++;

      //Miten MixerBot tallentaa datan tiedostoon
  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
       if (err) console.error(err);

  });

  //MixerBot poistaa viestin jos se ei kuulu sille kanavalle
   
 
 
  //Kielletyt sanat (testi)

  if (msg.includes('HOMO')) {
    message.delete();
    message.author.send('Kielletty sana :( ethän jatkossa käytä näitä sanoja, ne voivat loukata jotakin')
  
  }



  });

//Uusi henkilö tulee palvelimelle tai lähtee palvelimelta
bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' liityi juuri palvelimelle.')


  member.guild.channels.get('429695546878590976').send('**' + member.user.username + '**, Tervetuloa Miksaaja cityyn! Kerro jotain niin poliisit tarkastavat sinut ja antavat leimat että pääset pidemmälle kaupunkiin');
  
});

bot.on('guildMemberRemove', member => {

  member.guild.channels.get('429695546878590976').send('**' + member.user.username + '**, poistui Miksaaja citystä.');

});

//Mixerbotin Discord-apin avain. 
Bot.login('Token')
client.login('Token');
  // Dev: (C)Mixerboy24Tech https://www.mixerboy24.fi Discord: https://discord.gg/sFyFf4n
