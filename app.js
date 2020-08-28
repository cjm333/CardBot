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
    else if(message.content.startsWith("!alt")){
        search(message, data.alt, 4)
    }
    else if(message.content.startsWith("!count")){
        counting(message, data)
    }
    else if(message.content.startsWith("!borrow")){
        message.reply("If you used any of the memory borrower skills aka  Metalgreymon/Weregarurumon/Chirinmon/Digitamamon or the option card Gravity Press, and decide to pass your turn while having positive memory, it goes like this:\n1) Declare you want to pass turn, so you put it to 3 on your opponent's side in order to pass the turn.\n2) Memory borrower's (end of turn) part of the effect activates, you get -3 or -2 memory for each memory borrower skill used, depending on which card you used")
    }
    else if(message.content.startsWith("!keyword")){
        message.reply("Blocker: `When the opponent attacks, you may Rest this Active Digimon to become the target of that attack.`\n\n \
Security Attack +/-X: `The number of Security cards checked by this Digimon +/- X. A player does not win the game when attacking directly with a Digimon with 0 Security Attack.`\n\n \
Recovery +X: `Take X cards from the top of your deck and add them to the top of your Security.`\n\n \
Piercing: `When this Digimon attacks and destroys an opponent’s Digimon by battle, it performs a Security Check against your opponent’s Security. This Security Check does not count as a direct attack.`\n\n \
Draw +X: `Draw x cards from the top of your deck and add them to your hand.`\n\n \
Jamming: `This Digimon cannot be destroyed in battle against a Security Digimon.`\n\n \
De-Digivolve X: `Discard X cards from the top of a Digimon. If a Digimon has no Digivolution Sources or is the last Digimon in the stack, you may not continue discarding.`\n\n \
Download -X: `When you would Digivolve into this Digimon, you may rest 1 of your Digimon to reduce the Digivolution Cost by X.`\n\n \
Reboot: `In the opponent’s Active Phase, make this Digimon Active.`\n\n \
Vengeance: `When this Digimon is destroyed in battle, destroy the Digimon it was battling.`").then(msg => {
    msg.delete({ timeout: 60000 })})
    }
    else if(message.content.startsWith("!rulebook")){
        message.channel.send("Your question can be answered by reading the rulebook. Please familiarize yourself with it, per the server rules, before you ask anymore questions:\nhttps://drive.google.com/folderview?id=13l4AygyBAPDxul58Uin4sczHNmEhaSOF")
    }
    else if(message.content.startsWith("!help")){
        message.reply("Here are a list of commands:\n \
!card: `Search all card names`\n \
!digitama: `Search only Digitama cards`\n \
!digimon: `Search only Digimon cards`\n \
!tamer: `Search only Tamer cards`\n \
!option: `Search only Option cards`\n \
!alt: `Search for alternate arts`\n \
!count: `Number of cards in a certain type`\n \
!borrow: `Information on memory borrowing`\n \
!keyword: `List keywords`\n \
!rulebook: `Simple question answer`\n\n \
Reminder: large messages self-delete after a short time")


    }

});

function search(message, selectedCards, sliceLength){
    const cardEmbed = new Discord.MessageEmbed()
    channel = message.channel
    var doCheck = new Boolean(true)
    cardList = []
    cardNames = []

    const args = message.content.slice(sliceLength).trim()
    const argsURL = args.replace(/\s/g, "-").replace(/'/g, "").replace("promo", "p").replace("(", "").replace(")", "")
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