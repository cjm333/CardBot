// imports
const Discord = require("discord.js");
const data = require('./cardList.json');

//Build array of all cards
allCards = data.champions
allCards = allCards.concat(data.spirits)
allCards = allCards.concat(data.towers)
allCards = allCards.concat(data.shards)
allCards = allCards.concat(data.units)
allCards = allCards.concat(data.spells)
allCards = allCards.concat(data.augments)

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
            search(message, allCards, 5)
        }
    }
    else if(message.content.startsWith("!champion")){
        if(message.content.startsWith("!championType")){
            message.reply("Sorry, Champions don't have types")
        }
        else{
            search(message, data.champions, 9)
        }
    }
    else if(message.content.startsWith("!spirit")){
        if(message.content.startsWith("!spiritType")){
            message.reply("Sorry, Spirits don't have types")
        }
        else{
            search(message, data.spirits, 7)
        }
    }
    else if(message.content.startsWith("!tower")){
        if(message.content.startsWith("!towerType")){
            message.reply("Sorry, Towers don't have types")
        }
        else{
            search(message, data.towers, 6)
        }
    }
    else if(message.content.startsWith("!shard")){
        if(message.content.startsWith("!shardType")){
            searchType(message, data.shards, 10)
        }
        else{
            search(message, data.shards, 6)
        }
    }
    else if(message.content.startsWith("!unit")){
        if(message.content.startsWith("!unitType")){
            searchType(message, data.units, 9)
        }
        else{
            search(message, data.units, 5)
        }
    }
    else if(message.content.startsWith("!spell")){
        if(message.content.startsWith("!spellType")){
            searchType(message, data.spells, 10)
        }
        else{
            search(message, data.spells, 6)
        }
    }
    else if(message.content.startsWith("!augment")){
        if(message.content.startsWith("!augmentType")){
            searchType(message, data.augments, 12)
        }
        else{
            search(message, data.augments, 8)
        }
    }
    else if(message.content.startsWith("!count")){
        if(message.content.startsWith("!countType")){
            countingType(message, allCards)
        }
        else{
            counting(message, data)
        }
    }
    else if(message.content.startsWith("!help")){
        message.reply("Here are a list of commands:\n \
!card:: `Search all cards`\n \
!unit:: `Search only units`\n \
!spell:: `Search only spells`\n \
!augment:: `Search only augments`\n \
!champion: `Search only champions`\n \
!spirit: `Search only spirits`\n \
!tower: `Search only towers`\n \
!shard:: `Search only shards`\n \
!count:: `Get how many cards there are of a type`\n \
Append 'Type' to a command with :: to search for card with a certain type")
    }

});

function search(message, selectedCards, sliceLength){
    const cardEmbed = new Discord.MessageEmbed()
    channel = message.channel
    var doCheck = new Boolean(true)
    cardList = []
    cardNames = []

    const args = message.content.slice(sliceLength).trim()
    const argsURL = args.replace(/\s/g, "-").replace(/'/g, "").replace(/,/g, "").replace(/#/g, "").replace(/:/g, "").replace(/&/g, "and").replace(/!/g, "and");
    const cardName = argsURL.toLowerCase();

    for(card of selectedCards){
        if(card.append.includes(cardName)){
            cardNames.push(card.name)
            cardList.push(card)
        }
    }

    if(cardList.length > 1){
        for(card of cardList){
            if(card.append === cardName){
                cardEmbed.setImage(card.url)
                cardEmbed.setTitle(card.name)
                cardEmbed.setDescription(card.effect)
                message.reply(cardEmbed);
                doCheck = false
            }
        }
    }

    if(doCheck){
        if(cardList.length == 0){
            message.reply("No cards exist with that phrase")
        }
        else if(cardList.length > 1 && cardList.length <= 10){
            message.reply("Multiple cards match your phrase. Pick from the list below and try again:")
            returnable = ""
            for(name of cardNames){
                returnable = returnable.concat(name).concat("\n") 
            }
            channel.send(returnable)
        }
        else if(cardList.length > 10){
            message.reply("Your search term was too broad. Be a bit more specific")
        }
        else if(cardList.length == 1){
            cardEmbed.setImage(cardList[0].url)
            cardEmbed.setTitle(cardList[0].name)
            cardEmbed.setDescription(cardList[0].effect)
            message.reply(cardEmbed);
        }
    }
}

function searchType(message, selectedCards, sliceLength){
    channel = message.channel
    var doCheck = new Boolean(true)
    cardNames = []

    const args = message.content.slice(sliceLength).trim()
    const argsURL = args.replace(/'/g, "").replace(/,/g, "").replace(/#/g, "").replace(/:/g, "").replace(/&/g, "and").replace(/!/g, "and");
    const cardType = argsURL.toLowerCase();
    
    if(cardType == "mech" || cardType == "?"){
        for(card of selectedCards){
            if(card.type){
                if(card.type == cardType){
                    cardNames.push(card.name)
                }
            }
        }
    }
    else{
        for(card of selectedCards){
            if(card.type){
                if(card.type.includes(cardType)){
                    cardNames.push(card.name)
                }
            }
        }
    }

    if(cardNames.length == 0){
        message.reply("No cards exist with that type")
    }
    else if(cardNames.length > 0 && cardNames.length <= 100){
        message.reply("Here is a list of all the cards with that type:")
        returnable = ""
        for(name of cardNames){
            returnable = returnable.concat(name).concat("\n") 
        }
        channel.send(returnable)
    }
    else if(cardNames.length > 100){
        message.reply("Your search term was too broad. Be a bit more specific")
    }
}

function counting(message, data){
    const type = message.content.slice(6).trim()
    if(type == "units" || type == "unit"){
        const response = "There are " + data.units.length + " units in Argent Saga"
        message.reply(response)
    }
    else if(type == "spells" || type == "spell"){
        const response = "There are " + data.spells.length + " spells in Argent Saga"
        message.reply(response)
    }
    else if(type == "augments" || type == "augment"){
        const response = "There are " + data.augments.length + " augments in Argent Saga"
        message.reply(response)
    }
    else if(type == "champions" || type == "champion"){
        const response = "There are " + data.champions.length + " champions in Argent Saga"
        message.reply(response)
    }
    else if(type == "spirits" || type == "spirit"){
        const response = "There are " + data.spirits.length + " spirits in Argent Saga"
        message.reply(response)
    }
    else if(type == "towers" || type == "tower"){
        const response = "There are " + data.towers.length + " towers in Argent Saga"
        message.reply(response)
    }
    else if(type == "shards" || type == "shard"){
        tracker = data.shards.length - 2
        const response = "There are " + tracker + " shards in Argent Saga"
        message.reply(response)
    }
    else if(type == "cards" || type == "card"){
        const response = "There are " + allCards.length + " cards in Argent Saga"
        message.reply(response)
    }
    else{
        message.reply("Sorry, that is a not a valid card type to count")
    }
}

function countingType(message, data){
    const type = message.content.slice(10).trim()
    const cardType = type.toLowerCase();
    cardNames = []
    
    if(cardType == "mech" || cardType == "?"){
        for(card of selectedCards){
            if(card.type){
                if(card.type == cardType){
                    cardNames.push(card.name)
                }
            }
        }
    }
    else{
        for(card of data){
            if(card.type){
                if(card.type.includes(cardType)){
                    cardNames.push(card.name)
                }
            }
        }
    }
    
    if(cardNames.length > 0){
        message.reply("There are " + cardNames.length + " cards of type " + cardType)
    }
    else{
        message.reply("There are 0 cards of type " + cardType)
    }
}

// Log in the bot with the token
client.login("***");