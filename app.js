//imports
const Discord = require("discord.js");

const digitama = require('./cards/digitamaCards.json');
const digimon = require('./cards/digimonCards.json');
const tamers = require('./cards/tamerCards.json');
const options = require('./cards/optionCards.json');
const altArts = require('./cards/altArts.json');

const memberEntry = require('./functions/memberEntry.js');
const textCommands =  require('./functions/textCommands.js');
const count = require('./functions/count.js');
const search = require('./functions/search.js');

//Partner Functionality Setup
const partnersData = require('./cards/partners.json');
const partners = partnersData.list;
tracking = []
for(temp of partners){
    pair = [temp.id, temp.normal]
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


//Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

//User entrance message
client.on("guildMemberAdd", member => {
    digivice = memberEntry.getDigivice(member.id);
    partner = memberEntry.getPartner(member.id);
    client.channels.cache.get("681578269455548421").send("<@" + member.id + "> just joined and received a " + digivice + "! Their partner seems to be " + partner);
})

//Check messages for commands
client.on("message", message => {

    if (message.content.startsWith("!card")){
        search.searching(message, allCards, 5, Discord);
    }
    else if(message.content.startsWith("!digitama")){
        search.searching(message, digitama.digitama, 9, Discord);
    }
    else if(message.content.startsWith("!digimon")){
        search.searching(message, digimon.digimon, 8, Discord);
    }
    else if(message.content.startsWith("!tamer")){
        search.searching(message, tamers.tamers, 7, Discord);
    }
    else if(message.content.startsWith("!option")){
        search.searching(message, options.options, 7, Discord);
    }
    else if(message.content.startsWith("!alt")){
        search.searching(message, altArts.alt, 4, Discord);
    }
    else if(message.content.startsWith("!borrow")){textCommands.borrow(message);}
    else if(message.content.startsWith("!count")){count.counting(message, stats);}
    else if(message.content.startsWith("!faq")){textCommands.faq(message);}
    else if(message.content.startsWith("!help")){textCommands.help(message);}
    else if(message.content.startsWith("!keyword")){textCommands.keyword(message);}
    else if(message.content.startsWith("!partner")){
        if(message.content.includes("change") || message.content.includes("Change")){
            message.reply("You and your partner are bonded for life! You'd better appreciate them!");
        }
        else{
            memberEntry.partner(message, partners, tracking);
        }
    }
    else if(message.content.startsWith("!rulebook")){textCommands.rulebook(message);}
    else if(message.content.startsWith("!meme")){
        const cardEmbed = new Discord.MessageEmbed()
        cardEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/meme.png")
        message.reply(cardEmbed)
    }
    else if(message.content.startsWith("!starterRed")){textCommands.red(message);}
    else if(message.content.startsWith("!starterBlue")){textCommands.blue(message);}
    else if(message.content.startsWith("!starterYellow")){textCommands.yellow(message);}
    else if(message.content.startsWith("!event")){textCommands.event(message);}
    else if(message.content.startsWith("!digivolve")){
        id = message.author.id;
        current = 0;
        grab = null;
        previous = null;
        next = null;
        flag = false;

        for(searchable of partners){
            if(id == searchable.id){
                grab = searchable
            }
        }

        if(grab == null){
            message.reply("Sorry, only Gold Tamers and Server Boosters have a bond strong enough to do that!")
        }
        else{
            for(searchable of tracking){
                if(id == searchable[0]){
                    if(searchable[1] < 6){
                        searchable[1] = searchable[1]+1;
                        current = searchable[1];
                    }
                    else{
                        flag = true;
                    }
                }
            }
    
            if(flag){
                message.reply("You can't digivolve further!")
            }
            else{
                if(current == 2){
                    previous = grab.fresh;
                    next = grab.inTraining;
                }
                else if(current == 3){
                    previous = grab.inTraining;
                    next = grab.rookie;
                }
                else if(current == 4) {
                    previous = grab.rookie;
                    next = grab.champion;
                }
                else if(current == 5) {
                    previous = grab.champion;
                    next = grab.ultimate;
                }
                else if(current == 6) {
                    previous = grab.ultimate;
                    next = grab.mega;
                }
                message.reply(previous + " digivolve tooooooo...... " + next + "!!!")
            }
        }
    }
    else if(message.content.startsWith("!dedigivolve")){
        id = message.author.id;
        current = 0;
        grab = null;
        previous = null;
        next = null;
        flag = false;

        for(searchable of partners){
            if(id == searchable.id){
                grab = searchable
            }
        }

        if(grab == null){
            message.reply("Sorry, only Gold Tamers and Server Boosters have a bond strong enough to do that!")
        }
        else{
            for(searchable of tracking){
                if(id == searchable[0]){
                    if(searchable[1] > 1){
                        searchable[1] = searchable[1]-1;
                        current = searchable[1];
                    }
                    else{
                        flag = true;
                    }
                }
            }
    
            if(flag){
                message.reply("You can't dedigivolve further!")
            }
            else{
                if(current == 1){
                    previous = grab.inTraining;
                    next = grab.fresh;
                }
                else if(current == 2){
                    previous = grab.rookie;
                    next = grab.inTraining;
                }
                else if(current == 3) {
                    previous = grab.champion;
                    next = grab.rookie;
                }
                else if(current == 4) {
                    previous = grab.ultimate;
                    next = grab.champion;
                }
                else if(current == 5) {
                    previous = grab.mega;
                    next = grab.ultimate;
                }
                message.reply("Your " + previous + " dedigivolved to " + next + "!!!")
            }
        }
    }
});

// Log in the bot with the token
client.login("*");