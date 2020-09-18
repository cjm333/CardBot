module.exports = {
    searching: function(message, selectedCards, sliceLength){
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

    },

    effectText: function(message, allCards){
        const searchable = message.content.slice(5).trim()
        applicableCards = []

        for(card of allCards){
            if(card.effect.toLowerCase().includes(searchable.toLowerCase())){
                applicablebleCards.push(card.name)
            }
        }
        
        finalMessage = ""
        for(name of applicableCards){
            finalMessage = finalMessage.concat(name).concat("\n")
        }

        message.reply("Here is a list of every card with matching effect text:\n" + finalMessage)
    }
}