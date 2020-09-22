module.exports = {
    counting: function(message, data){
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
            const response = "There are " + allCards.length + " cards in Digimon TCG 2020"
            message.reply(response)
        }
        else if(type == "alt" || type == "alts"){
            const response = "There are " + data.alt.length + " alternate art cards in Digimon TCG 2020"
            message.reply(response)
        }
        else{
            message.reply("Sorry, that is a not a valid card type to count")
        }
    }
}