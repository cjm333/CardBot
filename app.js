// imports
const Discord = require("discord.js");

const unitData = require('./cards/units.json');
const spellData = require('./cards/spells.json');
const augmentData = require('./cards/augments.json');
const otherCards = require('./cards/other.json');

const search = require('./functions/search.js');
const textCommands = require('./functions/textCommands.js');
const counter = require('./functions/count.js');

//Build card arrays
units = unitData.units;
spells = spellData.spells;
augments = augmentData.augments;
allCards = otherCards.champions.concat(otherCards.spirits).concat(otherCards.towers).concat(otherCards.shards).concat(units).concat(spells).concat(augments);

fireCards = [];
waterCards = [];
airCards = [];
lightCards = [];
darkCards = [];
argentCards = [];
basicCards = [];

for(card of allCards){
    if(card.element == "fire"){
        fireCards.push(card);
    }
    else if(card.element == "water"){
        waterCards.push(card);
    }
    else if(card.element == "air"){
        airCards.push(card);
    }
    else if(card.element == "light"){
        lightCards.push(card);
    }
    else if(card.element == "dark"){
        darkCards.push(card);
    }
    else{
        argentCards.push(card);
    }
}

for(card of units){
    if(card.effect == ""){
        basicCards.push(card);
    }
}

//Find statistics
var stats = {units: 0, spells: 0, augments: 0, champions: 0, spirits: 0, towers: 0, shards: 0, fire: 0, water: 0, air: 0, light: 0, dark: 0, argent: 0, basic: 0, cards: 0};
stats.units = units.length;
stats.spells = spells.length;
stats.augments = augments.length;
stats.champions = otherCards.champions.length;
stats.spirits = otherCards.spirits.length;
stats.towers = otherCards.towers.length;
stats.shards = otherCards.shards.length - 2;

stats.fire = fireCards.length;
stats.water = waterCards.length;
stats.air = airCards.length;
stats.light = lightCards.length;
stats.dark = darkCards.length;
stats.argent = argentCards.length;

stats.basics = basicCards.length;
stats.cards = allCards.length;


// Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", message => {

    if (message.content.startsWith("!card")){
        if(message.content.startsWith("!cardType")){
            search.searchType(message, allCards, 9);
        }
        else{
            search.searching(message, allCards, 5, Discord);
        }
    }
    else if(message.content.startsWith("!champion")){
        if(message.content.startsWith("!championType")){
            message.reply("Sorry, Champions don't have types");
        }
        else{
            search.searching(message, otherCards.champions, 9, Discord);
        }
    }
    else if(message.content.startsWith("!spirit")){
        if(message.content.startsWith("!spiritType")){
            message.reply("Sorry, Spirits don't have types");
        }
        else{
            search.searching(message, otherCards.spirits, 7, Discord);
        }
    }
    else if(message.content.startsWith("!tower")){
        if(message.content.startsWith("!towerType")){
            message.reply("Sorry, Towers don't have types");
        }
        else{
            search.searching(message, otherCards.towers, 6, Discord);
        }
    }
    else if(message.content.startsWith("!shard")){
        if(message.content.startsWith("!shardType")){
            search.searchType(message, otherCards.shards, 10);
        }
        else{
            search.searching(message, otherCards.shards, 6, Discord);
        }
    }
    else if(message.content.startsWith("!unit")){
        if(message.content.startsWith("!unitType")){
            search.searchType(message, units, 9);
        }
        else{
            search.searching(message, units, 5, Discord);
        }
    }
    else if(message.content.startsWith("!spell")){
        if(message.content.startsWith("!spellType")){
            search.searchType(message, spells, 10);
        }
        else{
            search.searching(message, spells, 6, Discord);
        }
    }
    else if(message.content.startsWith("!augment")){
        if(message.content.startsWith("!augmentType")){
            search.searchType(message, augments, 12);
        }
        else{
            search.searching(message, augments, 8, Discord);
        }
    }
    else if(message.content.startsWith("!count")){
        if(message.content.startsWith("!countType")){
            counter.countingType(message, allCards);
        }
        else{
            counter.counting(message, stats);
        }
    }
    else if(message.content.startsWith("!fire")){
        if(message.content.startsWith("!fireType")){
            search.searchType(message, fireCards, 9);
        }
        else{
            search.searching(message, fireCards, 5, Discord);
        }
    }
    else if(message.content.startsWith("!water")){
        if(message.content.startsWith("!waterType")){
            search.searchType(message, waterCards, 10);
        }
        else{
            search.searching(message, waterCards, 6, Discord);
        }
    }
    else if(message.content.startsWith("!air")){
        if(message.content.startsWith("!airType")){
            search.searchType(message, airCards, 8);
        }
        else{
            search.searching(message, airCards, 4, Discord);
        }
    }
    else if(message.content.startsWith("!light")){
        if(message.content.startsWith("!lightType")){
            search.searchType(message, lightCards, 10);
        }
        else{
            search.searching(message, lightCards, 6, Discord);
        }
    }
    else if(message.content.startsWith("!dark")){
        if(message.content.startsWith("!darkType")){
            search.searchType(message, darkCards, 9);
        }
        else{
            search.searching(message, darkCards, 5, Discord);
        }
    }
    else if(message.content.startsWith("!argent")){
        if(message.content.startsWith("!argentType")){
            search.searchType(message, argentCards, 11);
        }
        else{
            search.searching(message, argentCards, 7, Discord);
        }
    }
    else if(message.content.startsWith("!basic")){
        message.reply("Here are all the basic cards in the game:");
        returnable = ""
        for(card of basicCards){
            returnable = returnable.concat(card.name).concat("\n");
        }
        message.channel.send(returnable);
    }
    else if(message.content.startsWith("!text")){
        search.effectText(message, allCards);
    }
    else if(message.content.startsWith("!help")){
        textCommands.help(message);
    }

});  

// Log in the bot with the token
client.login("***");