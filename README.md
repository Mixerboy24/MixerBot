# MixerBot-DiscordBot
MixerBot on MiksaajaCity Discord servun botti. (C) Mixerboy24Tech

Ohjelmisto
Node.js V10 ->    
Tekstin käsittelyohjelma (Visual Studio Code / Notepad++ tai vastaava)  
  
Paketit:  
Discord.js: npm i discord.js   
Discord AntiSpam: npm i discord-anti-spam    

**Miten MixerBot käynnistetään? (Linux)**

Paketissa on mukana **Mixerbot.sh** sekä **MixerBot.service** tiedostot. 
Muokkaa tiedostoihin oikeat polut.   
**MixerBot.service**: "WorkingDirectory=" polku oikeaksi. Esimerkkinä on MixerBotin palvelimen polku.   

Sen jälkeen suorita seuraavat komennot: 
```
 sudo mv MixerBot.service /etc/systemctl/system/MixerBot.service
 sudo systemctl daemon-reload
 sudo systemctl enable MixerBot
 sudo systemctl start MixerBot
```
  
Yhteydenotto: Mixerboy24#0024 // contact@mixerboy24tech.fi 

Bugit:

Ideat:      
- Twitch striimi ilmoitukset.

(Lisää ideoita saa ehdotella)

