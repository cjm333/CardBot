//imports
const Discord = require("discord.js");
const data = require('./cardList.json');
const memberEntry = require('./memberEntry.js');
const textCommands =  require('./textCommands.js');
const count = require('./count.js')
const search = require('./search.js')

//Build array of all cards
allCards = data.digitama
allCards = allCards.concat(data.digimon)
allCards = allCards.concat(data.tamers)
allCards = allCards.concat(data.options)

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
        search.searching(message, data.digitama, 9, Discord)
    }
    else if(message.content.startsWith("!digimon")){
        search.searching(message, data.digimon, 8, Discord)
    }
    else if(message.content.startsWith("!tamer")){
        search.searching(message, data.tamers, 7, Discord)
    }
    else if(message.content.startsWith("!option")){
        search.searching(message, data.options, 7, Discord)
    }
    else if(message.content.startsWith("!alt")){
        search.searching(message, data.alt, 4, Discord)
    }
    else if(message.content.startsWith("!borrow")){textCommands.borrow(message);}
    else if(message.content.startsWith("!count")){count.counting(message, data);}
    else if(message.content.startsWith("!faq")){textCommands.faq(message);}
    else if(message.content.startsWith("!help")){textCommands.help(message);}
    else if(message.content.startsWith("!keyword")){textCommands.keyword(message);}
    else if(message.content.startsWith("!partner")){memberEntry.partner(message);}
    else if(message.content.startsWith("!rulebook")){textCommands.rulebook(message);}
});

// Log in the bot with the token
client.login("*");