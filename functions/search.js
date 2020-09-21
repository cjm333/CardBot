module.exports = {
    searching: function (message, selectedCards, sliceLength, Discord){
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
        cardNames.sort()
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
            else if(cardList.length > 15){
                message.reply("Your search term was too broad. Be a bit more specific")
            }
            else if(cardList.length == 1){
                cardEmbed.setImage(cardList[0].url)
                cardEmbed.setTitle(cardList[0].name)
                cardEmbed.setDescription(cardList[0].effect)
                message.reply(cardEmbed);
            }
        }
    },
    searchType: function(message, selectedCards, sliceLength){
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
        cardNames.sort()
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