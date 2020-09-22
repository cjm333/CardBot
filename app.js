//imports
const Discord = require("discord.js");

const digitama = require('./cards/digitamaCards.json');
const digimon = require('./cards/digimonCards.json');
const tamers = require('./cards/tamerCards.json');
const options = require('./cards/optionCards.json');
const altArts = require('./cards/altArts.json');

const memberEntry = require('./functions/memberEntry.js');
const textCommands =  require('./functions/textCommands.js');
const count = require('./functions/count.js')
const search = require('./functions/search.js')

//Build array of all cards
allCards = digitama.digitama
allCards = allCards.concat(digimon.digimon)
allCards = allCards.concat(tamers.tamers)
allCards = allCards.concat(options.options)

//Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

//User entrance message
client.on("guildMemberAdd", member => {
    digivice = memberEntry.getDigivice(member.id);
    partner = memberEntry.getPartner(member.id);
    client.channels.cache.get("681578269455548421").send("<@" + member.id + "> just joined and received a " + digivice + "! Their partner seems to be " + partner)
})

//Check messages for commands
client.on("message", message => {

    if (message.content.startsWith("!card")){
        search.searching(message, allCards, 5, Discord)
    }
    else if(message.content.startsWith("!digitama")){
        search.searching(message, digitama.digitama, 9, Discord)
    }
    else if(message.content.startsWith("!digimon")){
        search.searching(message, digimon.digimon, 8, Discord)
    }
    else if(message.content.startsWith("!tamer")){
        search.searching(message, tamers.tamers, 7, Discord)
    }
    else if(message.content.startsWith("!option")){
        search.searching(message, options.options, 7, Discord)
    }
    else if(message.content.startsWith("!alt")){
        search.searching(message, altArts.alt, 4, Discord)
    }
    else if(message.content.startsWith("!borrow")){textCommands.borrow(message);}
    else if(message.content.startsWith("!count")){count.counting(message, data);}
    else if(message.content.startsWith("!faq")){textCommands.faq(message);}
    else if(message.content.startsWith("!help")){textCommands.help(message);}
    else if(message.content.startsWith("!keyword")){textCommands.keyword(message);}
    else if(message.content.startsWith("!partner")){
        if(message.content.includes("change") || message.content.includes("Change")){
            message.reply("You and your partner are bonded for life! You'd better appreciate them!")
        }
        else{
            memberEntry.partner(message);
        }
    }
    else if(message.content.startsWith("!rulebook")){textCommands.rulebook(message);}
});

// Log in the bot with the token
client.login("*");