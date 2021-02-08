/*const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vgmUrl= 'https://pastebin.com/raw/qgcHF8nS';

got(vgmUrl).then(response => {
  const dom = new JSDOM(response.body);
  //console.log(response.body)
  console.log(response.body)
  //var arr = Array.prototype.slice.call( collection )
  //console.log(collection.length)
  //console.log(dom.window.document.querySelector('title').innerHTML);

  //console.log(dom.window.document.getElementsByClassName('post-view').length);
}).catch(err => {
  console.log(err);
});*/

//imports
const Discord = require("discord.js");

const digitama = require('./cards/digitamaCards.json');
const digimon = require('./cards/digimonCards.json');
const tamers = require('./cards/tamerCards.json');
const options = require('./cards/optionCards.json');
const altArts = require('./cards/altArts.json');

const partnerFunctions = require('./functions/partner.js');
const textCommands =  require('./functions/textCommands.js');
const count = require('./functions/count.js');
const search = require('./functions/search.js');
const starters = require('./functions/starterLists.js');

//Elite Partner Functionality Setup
const partnersData = require('./cards/elite.json');
const partners = partnersData.list;
tracking = []
for(temp of partners){
    pair = [temp.id, temp.normal, 0]
    tracking.push(pair)
}

//Build array of all cards and get statistics
allCards = digitama.digitama;
allCards = allCards.concat(digimon.digimon);
allCards = allCards.concat(tamers.tamers);
allCards = allCards.concat(options.options);

var stats = {digitama: 0, digimon: 0, tamers: 0, options: 0, red: 0, blue: 0, green: 0, yellow: 0, black: 0, purple: 0, white: 0, alts: 0, cards: 0};
stats.digitama = digitama.digitama.length;
stats.digimon = digimon.digimon.length;
stats.tamers = tamers.tamers.length;
stats.options = options.options.length;
stats.cards = allCards.length;
stats.alt = altArts.length;

bonus = [];
for(card of allCards){
    if(card.bonus && card.name){
        bonus.push(card)
    }
}
for(card of altArts.alt){
    if(card.bonus){
        bonus.push(card)
    }
}

//Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);

    servers = 0
    client.guilds.cache.forEach((guild) => {
        servers++;
        console.log(guild.name);
    });

    status = "DCG 2020 in " + servers + " servers!"
    client.user.setActivity(status);
});

//User entrance message
client.on("guildMemberAdd", member => {
    if(member.guild.id == 681578268729540663){
        digivice = partnerFunctions.getDigivice(member.id);
        partner = partnerFunctions.getPartner(member.id);
        client.channels.cache.get("681578269455548421").send("<@" + member.id + "> just joined and received a " + digivice + "! Their partner seems to be " + partner);    
    }
})

//Omnimon Meme
/*client.on("message", message =>{
    if((message.content.includes("Omegamon") || message.content.includes("omegamon")) && message.guild.id == 681578268729540663){
        string = message.content;
        string = string.replace(/Omegamon/g, "Omnimon").replace(/omegamon/g, "omnimon")
        message.reply(string + "*")
    }
})*/

//Check messages for commands
client.on("message", message => {
    //681578268729540663 Big Server, 709829599604768770 HMG, 784566381072089109 DFW, 770014933474607196 DigiBox, 642834824754626626 Defensa
    
    //if(message.content.startsWith("!") && message.guild){
        if(message.guild.id == "681578268729540663" || message.guild.id == "709829599604768770" || message.guild.id == "770014933474607196" || message.guild.id == "784566381072089109" || message.guild.id == "642834824754626626"){

            //Card Pull Ups
            if (message.content.startsWith("!card")){search.searching(message, allCards, 5, Discord);}
            else if(message.content.startsWith("!digitama")){search.searching(message, digitama.digitama, 9, Discord);}
            else if(message.content.startsWith("!digimon")){search.searching(message, digimon.digimon, 8, Discord);}
            else if(message.content.startsWith("!tamer")){search.searching(message, tamers.tamers, 7, Discord);}
            else if(message.content.startsWith("!option")){search.searching(message, options.options, 7, Discord);}
            else if(message.content.startsWith("!alt")){search.searching(message, altArts.alt, 4, Discord);}

            //Partner Stuff
            else if(message.content.startsWith("!partner")){
                if(message.member.roles.cache.has('774145809280925736')){message.reply("Sorry, your partner abandoned you because you were ungrateful to them");}
                else if(message.content.includes("change") || message.content.includes("Change")){
                    message.reply("You and your partner are bonded for life! You should have appreciated them!");
                    message.member.roles.add('774145809280925736')
                }
                else{partnerFunctions.partner(message, partners, tracking, Discord);}
            }
            else if(message.content.startsWith("!digivolve")){partnerFunctions.digivolve(message, partners, tracking);}
            else if(message.content.startsWith("!dedigivolve")){partnerFunctions.dedigivolve(message, partners, tracking);}
            else if(message.content.startsWith("!fight")){partnerFunctions.fight(message, partners, tracking);}

            //Game Knowledge
            else if(message.content.startsWith("!rulebook")){textCommands.rulebook(message);}
            else if(message.content.startsWith("!faq")){textCommands.faq(message);}
            else if(message.content.startsWith("!keyword")){textCommands.keyword(message);}
            else if(message.content.startsWith("!borrow")){textCommands.borrow(message);}
            else if(message.content.startsWith("!meme")){
                const cardEmbed = new Discord.MessageEmbed()
                cardEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/meme.png")
                message.reply(cardEmbed)
            }
            else if(message.content.startsWith("!import")){
                const cardEmbed = new Discord.MessageEmbed()
                cardEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/meme2.png")
                cardEmbed.setFooter("Please check the pins for TTS Custom Imports in #tabletop")
                message.reply(cardEmbed)
            }
            else if(message.content.startsWith("!breed")){
                const cardEmbed = new Discord.MessageEmbed()
                cardEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/breeding.png")
                cardEmbed.setFooter("Imagine this area as an impenetrable wall. No effects come in or go out")
                message.reply(cardEmbed)
            }
            else if(message.content.startsWith("!security")){
                const cardEmbed = new Discord.MessageEmbed()
                cardEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/security.png")
                cardEmbed.setFooter("Cards will specify which one the effect works with")
                message.reply(cardEmbed)
            }

            //Random Text Responses
            else if(message.content.startsWith("!count")){count.counting(message, stats);}
            else if(message.content.startsWith("!help")){textCommands.help(message);}
            else if(message.content.startsWith("!starter")){starters.print(message);}
            else if(message.content.startsWith("!event")){textCommands.event(message);}
            else if(message.content.startsWith("!release")){textCommands.release(message);}
            else if(message.content.startsWith("!info")){textCommands.info(message);}
            else if(message.content.startsWith("!reference")){textCommands.reference(message, bonus);}
            else if(message.content.startsWith("!deckloader")){textCommands.deckloader(message);}
            else if(message.content.startsWith("!zaffy")){message.reply("TTS Mod: https://steamcommunity.com/sharedfiles/filedetails/?id=2042884945")}
            else if(message.content.startsWith("!rkList")){
                message.guild.members.cache.forEach( member =>
                    {if(member.roles.cache.find(r => r.name === "Royal Knight")){
                        console.log(member.user)
                    }}
                )
            }
        }
        else{
            console.log("Not Authorized")
            message.reply("Sorry, this server is not approved for bot usage. Please contact Shogunate to gain approval. Bye now!")
            message.guild.leave()
        }
    //}   
});

// Log in the bot with the token
client.login("*");