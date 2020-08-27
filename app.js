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

});

function search(message, selectedCards, trimLength){
    const cardEmbed = new Discord.MessageEmbed()
    channel = message.channel
    var doCheck = new Boolean(true)
    cardList = []
    cardNames = []

    const args = message.content.slice(trimLength).trim()
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

// Log in the bot with the token
client.login("NzQ1MjU2NzY4MDg2NDc0Nzcy.XzvIcw.mRMOGEX1yJEBC7svjIEwV4KRMAc");