// imports
const Discord = require("discord.js");
const data = require('./cardList.json');
const search = require('./search.js');
const textCommands = require('./textCommands.js');
const counter = require('./count.js');

//Build card arrays
allCards = data.champions.concat(data.spirits).concat(data.towers).concat(data.shards).concat(data.units).concat(data.spells).concat(data.augments)
fireCards = []
waterCards = []
airCards = []
lightCards = []
darkCards = []
argentCards = []
basicCards = []

for(card of allCards){
    if(card.element == "fire"){
        fireCards.push(card)
    }
    else if(card.element == "water"){
        waterCards.push(card)
    }
    else if(card.element == "air"){
        airCards.push(card)
    }
    else if(card.element == "light"){
        lightCards.push(card)
    }
    else if(card.element == "dark"){
        darkCards.push(card)
    }
    else{
        argentCards.push(card)
    }

    if(card.effect == ""){
        basicCards.push(card)
    }
}

// Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", message => {

    if (message.content.startsWith("!card")){
        if(message.content.startsWith("!cardType")){
            searchType(message, allCards, 9)
        }
        else{
            search.searching(message, allCards, 5)
        }
    }
    else if(message.content.startsWith("!champion")){
        if(message.content.startsWith("!championType")){
            message.reply("Sorry, Champions don't have types")
        }
        else{
            search.searching(message, data.champions, 9)
        }
    }
    else if(message.content.startsWith("!spirit")){
        if(message.content.startsWith("!spiritType")){
            message.reply("Sorry, Spirits don't have types")
        }
        else{
            search.searching(message, data.spirits, 7)
        }
    }
    else if(message.content.startsWith("!tower")){
        if(message.content.startsWith("!towerType")){
            message.reply("Sorry, Towers don't have types")
        }
        else{
            search.searching(message, data.towers, 6)
        }
    }
    else if(message.content.startsWith("!shard")){
        if(message.content.startsWith("!shardType")){
            searchType(message, data.shards, 10)
        }
        else{
            search.searching(message, data.shards, 6)
        }
    }
    else if(message.content.startsWith("!unit")){
        if(message.content.startsWith("!unitType")){
            searchType(message, data.units, 9)
        }
        else{
            search.searching(message, data.units, 5)
        }
    }
    else if(message.content.startsWith("!spell")){
        if(message.content.startsWith("!spellType")){
            searchType(message, data.spells, 10)
        }
        else{
            search.searching(message, data.spells, 6)
        }
    }
    else if(message.content.startsWith("!augment")){
        if(message.content.startsWith("!augmentType")){
            searchType(message, data.augments, 12)
        }
        else{
            search.searching(message, data.augments, 8)
        }
    }
    else if(message.content.startsWith("!count")){
        if(message.content.startsWith("!countType")){
            counter.countingType(message, allCards, allCards)
        }
        else{
            counter.counting(message, data, allCards)
        }
    }
    else if(message.content.startsWith("!fire")){
        if(message.content.startsWith("!fireType")){
            searchType(message, fireCards, 9)
        }
        else{
            search.searching(message, fireCards, 5)
        }
    }
    else if(message.content.startsWith("!water")){
        if(message.content.startsWith("!waterType")){
            searchType(message, waterCards, 10)
        }
        else{
            search.searching(message, waterCards, 6)
        }
    }
    else if(message.content.startsWith("!air")){
        if(message.content.startsWith("!airType")){
            searchType(message, airCards, 8)
        }
        else{
            search.searching(message, airCards, 4)
        }
    }
    else if(message.content.startsWith("!light")){
        if(message.content.startsWith("!lightType")){
            searchType(message, lightCards, 10)
        }
        else{
            search.searching(message, lightCards, 6)
        }
    }
    else if(message.content.startsWith("!dark")){
        if(message.content.startsWith("!darkType")){
            searchType(message, darkCards, 9)
        }
        else{
            search.searching(message, darkCards, 5)
        }
    }
    else if(message.content.startsWith("!argent")){
        if(message.content.startsWith("!argentType")){
            searchType(message, argentCards, 11)
        }
        else{
            search.searching(message, argentCards, 7)
        }
    }
    else if(message.content.startsWith("!basic")){
        message.reply("Here are all the basic cards in the game:")
            returnable = ""
            for(card of basicCards){
                returnable = returnable.concat(card.name).concat("\n") 
            }
            message.channel.send(returnable)
    }
    else if(message.content.startsWith("!text")){
        search.effectText(message, allCards)
    }
    else if(message.content.startsWith("!help")){
        textCommands.help(message);
    }

});  

// Log in the bot with the token
client.login("***");