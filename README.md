# MixerBot-DiscordBot
MixerBot on MiksaajaCity Discord servun botti. (C) Mixerboy24Tech

Ohjelmisto
Node.js V10 -> ```sudo apt-get install nodejs```       
Tekstin käsittelyohjelma (Visual Studio Code / Notepad++ tai vastaava)  
  
Paketit:  
Discord.js: ```npm i discord.js```   
Discord AntiSpam: ```npm i discord-anti-spam```    

**Miten MixerBot käynnistetään? (Linux)**

Paketissa on mukana **Mixerbot.sh** sekä **MixerBot.service** tiedostot. 
Muokkaa tiedostoihin oikeat polut.   
**MixerBot.service**: "WorkingDirectory=" polku oikeaksi. Esimerkkinä on MixerBotin palvelimen polku.   

Sen jälkeen suorita seuraavat komennot: 

**Ubuntu 16.04**   
```
 sudo mv MixerBot.service /etc/systemctl/system/MixerBot.service
 sudo systemctl daemon-reload
 sudo systemctl enable MixerBot
 sudo systemctl start MixerBot
```

**Ubuntu 18.04 ->**   
```
sudo mv MixerBot.service /etc/systemd/system/MixerBot.service
sudo systemctl deamon-reload
sudo systemctl enable MixerBot
sudo systemctl start MixerBot
```
  

### Vianetsintä ###   

Bugit:
- MixerBot kaatuu mystisesti välilillä. 

Ideat:      
- Twitch striimi ilmoitukset.
- Käyttäjätilasto   

(Lisää ideoita saa ehdotella)

Yhteydenotto: Mixerboy24#0024 // developer@mixerboy24.fi 
(c) Mixerboy24 Tmi   
