// imports
const Discord = require("discord.js");
const data = require('./cardList.json');

// Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", message => {

    if (message.content.startsWith("!card")){
        search(message, data.cards, 5)
    }
    else if(message.content.startsWith("!champion")){
        search(message, data.champions, 9)
    }
    else if(message.content.startsWith("!spirit")){
        search(message, data.spirits, 7)
    }
    else if(message.content.startsWith("!tower")){
        search(message, data.towers, 6)
    }
    else if(message.content.startsWith("!shard")){
        search(message, data.shards, 6)
    }
    else if(message.content.startsWith("!unit")){
        search(message, data.units, 5)
    }
    else if(message.content.startsWith("!spell")){
        search(message, data.spells, 6)
    }
    else if(message.content.startsWith("!augment")){
        search(message, data.augments, 8)
    }
    else if(message.content.startsWith("!count")){
        counting(message, data)
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
            for(name of cardNames){
                channel.send(name)
            }
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

function counting(message, data){
    const type = message.content.slice(6).trim()
    if(type == "units" || type == "unit"){
        const response = "There are " + data.units.length + " units in Argent Saga (Reminder: Set 3 is not in this database yet)"
        message.reply(response)
    }
    else if(type == "spells" || type == "spell"){
        const response = "There are " + data.spells.length + " spells in Argent Saga (Reminder: Set 3 is not in this database yet)"
        message.reply(response)
    }
    else if(type == "augments" || type == "augment"){
        const response = "There are " + data.augments.length + " augments in Argent Saga (Reminder: Set 3 is not in this database yet)"
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
        const response = "There are " + data.cards.length + " cards in Argent Saga (Reminder: Set 3 is not in this database yet)"
        message.reply(response)
    }
    else{
        message.reply("Sorry, that is a not a valid card type to count")
    }
}

// Log in the bot with the token
client.login("***");