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
    const cardEmbed = new Discord.MessageEmbed()
    channel = message.channel

    if (message.content.startsWith("!card")){
        const args = message.content.slice(5).trim()
        const argsURL = args.replace(/\s/g, "-").replace(/'/g, "").replace(/,/g, "");
        const cardName = argsURL.toLowerCase();

        cardList = []
        cardNames = []

        for(card of data.cards){
            if(card.append.includes(cardName)){
                cardNames.push(card.name)
                cardList.push(card)
            }
        }

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
            cardEmbed.setDescription(cardList[0].ability)
            message.reply(cardEmbed);
        }
    }

});

// Log in the bot with the token
client.login("NzQ1MjU2NzY4MDg2NDc0Nzcy.XzvIcw.A6y0CMwQmOipJpq286LKvHTuKOA");