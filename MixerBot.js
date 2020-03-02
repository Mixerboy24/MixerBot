//MixerBotin lähdekoodi
var Discord = require('discord.js');
var fs = require('fs');
var bot = new Discord.Client();
var {token} = require('./config.json');


  
bot.on('ready', () => {
  console.log('Mixerbot is Online')

  bot.user.setStatus('dnd')

  bot.user.setGame('_help | Mixerbot 5.2.1')
});

//MixerBotin komennot.

bot.on("message", message => {
  if (message.author.bot) return;

  const prefix = '_'
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command ==='version') {
    message.channel.send('**Version** \nMiksaaja City Discord BOT 5.2.1 \n(Last update 2.3.2020)')
  } else
  if (command ==='creator') {
      message.channel.send('Bot creators: Atte "Mixerboy24" Oksanen \n Jami "Doacola" Lohilahti')
  } else
  if (command ==='help') {
      message.channel.send('**Komentoni:** \n !version = Kertoo missä versiossa olen \n !creator = Minun rakentaja ja devi :3 \n !kutsu = Antaa palvelimen kutsulinkin \n !help = Tämä mitä luet juuri :joy:')
  } else
  if (command ==='Masto') {
    message.channel.send('Masto? Mä sulle mastot näytän!\nSiinä on masto! https://cdn.mb24.fi/Kuvat/masto.jpg')
  } else
  if (command ==="kutsu") {
    message.channel.send("<https://discord.mixerboy24.fi>")
  } else
 
  if (command === 'wl') {
    if (message.member.roles.has('621839114534256671')) {
        message.channel.send('Olet jo Whitelistillä. Ota yhteyttä @Mixerboy24#0024 asiasta.')
    } else {
    const mc_channel = bot.channels.get('684125912467636292');
    mc_channel.send('whitelist add '+args[0]);
    message.member.addRole('621839114534256671')
    message.channel.send( ' ' +args[0] + ' Lisätty MB24MC whitelistille.')
    console.log('Username ' +args[0] + ' added MB24MC whitelist')
  }
}

if (command === 'confirm') {
    if (message.member.roles.has('513445707475058701')) {
        message.channel.send('Olet jo jäsen! Ota yhteyttä Ylläpitoon jos on ongelmia')
    } else {
    message.member.addRole('513445707475058701')
    message.channel.send('Sinulle on annettu Jäsen rooli!')
    console.log('Annettu jäsen rooli')
  }
}
});


//Uusi henkilö tulee palvelimelle tai lähtee palvelimelta | Myös viestin poito logi. 
bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' liityi juuri palvelimelle.')


  member.guild.channels.get('513445827641999371').send('**' + member.user.username + '**, Tervetuloa Miksaaja Cityyn. Muista lukea Tervetuloa kanava. "_confirm" komennolla saat jäsen roolin. :slight_smile: \n**Aulaan ei linkkejä eikä kuvia. muut kanavat on niitä varten!** ');

});

bot.on('guildMemberRemove', member => {

  member.guild.channels.get('516292915362791434').send('**' + member.user.username + '**, Lähti serveriltä :cry: ');

});

bot.on("messageDelete", (messageDelete) => {
  if (!messageDelete.author.bot) {

  messageDelete.guild.channels.get('516292915362791434').send(`Viesti : "${messageDelete.content}" käyttäjältä ${messageDelete.author.tag} on poistettu.`);

  }

 });


 //Linkin poisto
 bot.on('message', (message) => { 
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/' || 'pornhub.com/')) { 
    message.delete()
      .then(message.channel.send('Linkki poistettu:\n**Ei kutsulinkkejä tänne! Lue säännöt uudelleen**'))
  }
});


bot.login(token)
// Dev: (C)Mixerboy24Tech https://www.mixerboy24.fi Discord: Mixerboy24#0024
