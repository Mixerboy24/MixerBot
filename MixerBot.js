//MixerBotin lähdekoodi
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const AntiSpam = require('discord-anti-spam')
const {token} = require('./config.json');
const {version} = require('./config.json');

//AntiSpam API

const antiSpam = new AntiSpam({
  warnThreshold: 5,
  kickThreshold: 15, 
  maxInterval: 2000, 
  warnMessage: '{@user}, ei spämmitä.', 
  kickMessage: '**{user_tag}** on erotettu palvelimelta toistuvan spämmin takia.', 
  banMessage: '**{user_tag}** on annettu porttikielto palvelimelle toistuvasta spämmistä.', 
  maxDuplicatesWarning: 5,
  maxDuplicatesKick: 15, 
  maxDuplicatesBan: 20, 
  exemptPermissions: [ 'ADMINISTRATOR'], 
  ignoreBots: true, 
  verbose: true, 
  ignoredUsers: [], 
});

bot.on('message', (message) => antiSpam.message(message));


//Discord API
  
bot.on('ready', () => {
  console.log('Mixerbot is Online')

  bot.user.setStatus('dnd')

  bot.user.setActivity('_help | Mixerbot ' + (version) +'')
});

//MixerBotin komennot.

bot.on("message", message => {
  if (message.author.bot) return;

  const prefix = '_'
  if (message.content.indexOf(prefix) !== 0) return;

const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command ==='version') {
    message.channel.send('**Version** \nMiksaaja City Discord BOT ' + (version) +'\n(Last update 3.3.2020)')
  } else
  if (command ==='creator') {
      message.channel.send('Bot creators: \n Atte "Mixerboy24" Oksanen \n Jami "Doacola" Lohilahti')
  } else
 if (command ==='help') {
      message.channel.send('**Komentoni:** \n _version = Kertoo missä versiossa olen \n _creator = Minun rakentaja ja devi :3 \n _kutsu = Antaa palvelimen kutsulinkin \n _github = Minun lähdekoodi \n _help = Tämä mitä luet juuri :joy: \n _wl <Minecraft nimi> = MixerCraftin whitelistille pääsy (#mb24-minecraft-server)')
  } else
  if (command ==='masto') {
    message.channel.send('Masto? Mä sulle mastot näytän!\nSiinä on masto! https://cdn.mb24.fi/Kuvat/masto.jpg')
  } else
  if (command ==="kutsu") {
    message.channel.send("<https://discord.mixerboy24.fi>")
  } else
  if (command ==="github") {
    message.channel.send("<https://github.com/Mixerboy24Tech/MixerBot>")
  } else
  if (command =="allsky") {
    message.channel.send("**Mixerboy24 Allsky** \n", {file: "https://mixerboy24tech.fi/pic/image-resize.jpg"})
  }else
    
    
if (command === 'confirm') {
    if (message.member.roles.has('513445707475058701')) {
        message.channel.send('Olet jo jäsen! Ota yhteyttä Ylläpitoon jos on ongelmia')
    } else {
    message.member.addRole('513445707475058701')
    message.channel.send('Sinulle on annettu Jäsen rooli!')
    console.log('Annettu jäsen rooli')
  }
} else {

    message.channel.send()
  }  
});

// TwitchAPI 



//Uusi henkilö tulee palvelimelle tai lähtee palvelimelta | Myös viestin poito logi. 
bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' liityi juuri palvelimelle.')

    member.guild.channels
    .get("513445827641999371")
    .send(
      "**" +
        member.user.username +
        '**, Tervetuloa Miksaaja Cityyn. Muista lukea Tervetuloa kanava. "_confirm" komennolla saat jäsen roolin. :slight_smile: \n**Aulaan ei linkkejä eikä kuvia. Muut kanavat on niitä varten!** '
    );
});

bot.on("guildMemberRemove", member => {
  member.guild.channels
    .get("516292915362791434")
    .send("**" + member.user.username + "**, Lähti serveriltä :cry: ");
});

bot.on("messageDelete", messageDelete => {
  if (!messageDelete.author.bot) {
    let embed = new Discord.RichEmbed()
    .setColor(0xFF7200)
    .addField(`${messageDelete.author.tag} viesti poistettu`, `${messageDelete.content}`)
   messageDelete.guild.channels
     .get("516292915362791434")
      .send(embed);
  }
});


 //Linkin poisto
bot.on("message", message => {
  if (
    message.content.includes(
      "discord.gg/" || "discordapp.com/invite/"
    )
  ) {
    message
      .delete()
      .then(
        message.channel.send(
          "Linkki poistettu:\n**Ei kutsulinkkejä tänne! Lue säännöt uudelleen**"
        )
      );
  }
});

// "haitallisen" viestin poisto
bot.on("message", message => {
  if (
    message.content.includes(
      "" || "" || "" 
    )
  ) {
    message
       .delete()
       .then(
         message.channel.send(
           "Viesti poistettu: Pidetään keskustelu asiallisena"
         )
       );
  }
});

bot.login(token)
// Dev: (C)Mixerboy24Tech https://www.mixerboy24.fi Discord: Mixerboy24#0024
