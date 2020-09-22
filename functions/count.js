module.exports = {
    counting: function(message, stats){
        const type = message.content.slice(6).trim()
        if(type == "digitama"){
            const response = "There are " + stats.digitama + " Digitama cards in Digimon TCG 2020"
            message.reply(response)
        }
        else if(type == "digimon"){
            const response = "There are " + stats.digimon + " Digimon cards in Digimon TCG 2020"
            message.reply(response)
        }
        else if(type == "tamers" || type == "tamer"){
            const response = "There are " + stats.tamers + " Tamer cards in Digimon TCG 2020"
            message.reply(response)
        }
        else if(type == "options" || type == "option"){
            const response = "There are " + stats.options + " Option cards in Digimon TCG 2020"
            message.reply(response)
        }
        else if(type == "cards" || type == "card"){
            const response = "There are " + stats.cards+ " cards in Digimon TCG 2020"
            message.reply(response)
        }
        else if(type == "alt" || type == "alts"){
            const response = "There are " + stats.alt + " alternate art cards in Digimon TCG 2020"
            message.reply(response)
        }
        else{
            message.reply("Sorry, that is a not a valid card type to count")
        }
    }
}