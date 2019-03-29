//MixerTechBOT lähdekoodi. 
var Discord = require('discord.js');
var fs = require('fs');
var bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Mixerboy24tech bot on yhdistetty serverille')

  bot.user.setStatus('dnd')

  bot.user.setGame('.help | Mixerboy24Tech')
});


bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '.'
  var cont = message.content.slice(prefix.length).split(' ');
  var args = cont.slice(1);

  if (sender.id === '517612384811220992') {
    return;
  }

  if (msg === prefix + 'GITHUB') {
    message.channel.send('https://github.com/Mixerboy24Tech')
  }

  if (msg === prefix + 'PING') {
      message.channel.send('Ping ping pong. Tech bot is here')
  }

  if (msg === prefix + 'SOME') {
      message.channel.send('Twitter: <https://www.twitter.com/Mixerboy24Tech> \n Youtube: <https://www.youtube.com/channel/UChl3Vb82N54dkX8-PHJFIhw> \n Twitch: <https://www.twitch.tv/Mixerboy24Tech> \n Facebook <https://www.facebook.com/Mixerboy24Tech>')
  }

  if (msg === prefix + 'HELP') {
      message.channel.send('**Komennot:**\n **.some** - Mixerboy24Techin somet\n **.github** - Mixerboy24Tech organisaatio github\n **.ping**')
  }



});

bot.on('guildMemberAdd', member => {
  console.log('Käyttäjä ' + member.user.username + ' liityi juuri palvelimelle.')


 member.guild.channels.get('516089211137556480').send('**' + member.user.username + '**Welcome Mixerboy24Tech Discord server. Please Read #rules channel ');
    
});


bot.login('TOKEN')
