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
    else if(message.content.startsWith("!digitama")){
        search(message, data.digitama, 9)
    }
    else if(message.content.startsWith("!digimon")){
        search(message, data.digimon, 8)
    }
    else if(message.content.startsWith("!tamer")){
        search(message, data.tamers, 7)
    }
    else if(message.content.startsWith("!option")){
        search(message, data.options, 7)
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
    const argsURL = args.replace(/\s/g, "-").replace(/'/g, "")
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
                cardEmbed.setFooter(card.inheritable)
                message.reply(cardEmbed).then(msg => {
                    msg.delete({ timeout: 60000 })
                })
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
            cardEmbed.setFooter(cardList[0].inheritable)
            message.reply(cardEmbed).then(msg => {
                msg.delete({ timeout: 60000 })
            })
        }
    }
}

function counting(message, data){
    const type = message.content.slice(6).trim()
    if(type == "digitama"){
        const response = "There are " + data.digitama.length + " Digitama cards in Digimon TCG 2020"
        message.reply(response)
    }
    else if(type == "digimon"){
        const response = "There are " + data.digimon.length + " Digimon cards in Digimon TCG 2020"
        message.reply(response)
    }
    else if(type == "tamers" || type == "tamer"){
        const response = "There are " + data.tamers.length + " Tamer cards in Digimon TCG 2020"
        message.reply(response)
    }
    else if(type == "options" || type == "option"){
        const response = "There are " + data.options.length + " Option cards in Digimon TCG 2020"
        message.reply(response)
    }
    else if(type == "cards" || type == "card"){
        const response = "There are " + data.cards.length + " cards in Digimon TCG 2020"
        message.reply(response)
    }
    else{
        message.reply("Sorry, that is a not a valid card type to count")
    }
}

// Log in the bot with the token
client.login("***");