module.exports = {
    searching: function (message, selectedCards, sliceLength, Discord){
        //Variable Setup
        const cardEmbed = new Discord.MessageEmbed()
        channel = message.channel
        var doCheck = new Boolean(true)
        cardPool = []
        cardNames = []

        //User Search Parsing 
        const args = message.content.slice(sliceLength).trim()
        const argsURL = args.replace(/\s/g, "-").replace(/'/g, "").replace(/,/g, "").replace(/#/g, "").replace(/:/g, "").replace(/&/g, "and").replace(/!/g, "and");
        shortCut = argsURL.toLowerCase();

        //Memes
        if(shortCut == "skandy"){
            shortCut = "iskandar"
        }
        if(shortCut == "phlox"){
            shortCut = "white-rose"
        }
        else if(shortCut == "asb"){
            shortCut = "ancient-serpents-breath"
        }

        //Initial Card Gathering
        cardName = shortCut.split("-");
        for(card of selectedCards){
            if(card.append.includes(cardName[0])){
                cardNames.push(card.name)
                cardPool.push(card)
            }
        }

        //Thinning Card Pool
        if(cardName.length > 1){
            counter = 1;
            do{
                index = 0;
                while(index < cardPool.length){
                    if(cardPool[index].append.includes(cardName[counter])){
                        index++;
                    }
                    else{
                        cardPool.splice(index, 1)
                        cardNames.splice(index, 1)
                    }
                }
                counter++;
            } while(counter < cardName.length)
        }

        //Shortcutting Exact Matches
        cardNames.sort()
        if(cardPool.length > 1){
            for(card of cardPool){
                if(card.append === shortCut){
                    cardEmbed.setImage(card.url)
                    cardEmbed.setTitle(card.name)
                    cardEmbed.setDescription(card.effect)
                    if(card.special){
                        cardEmbed.setFooter(card.special)
                    }
                    message.reply(cardEmbed);
                    doCheck = false
                }
            }
        }

        //Handle Resulting Pool
        if(doCheck){
            if(cardPool.length == 0){
                message.reply("No cards exist with that phrase")
            }
            else if(cardPool.length > 1 && cardPool.length <= 10){
                message.reply("Multiple cards match your phrase. Pick from the list below and try again:")
                returnable = ""
                for(name of cardNames){
                    returnable = returnable.concat(name).concat("\n") 
                }
                channel.send(returnable)
            }
            else if(cardPool.length > 15){
                message.reply("Your search term was too broad. Be a bit more specific")
            }
            else if(cardPool.length == 1){
                cardEmbed.setImage(cardPool[0].url)
                cardEmbed.setTitle(cardPool[0].name)
                cardEmbed.setDescription(cardPool[0].effect)
                if(cardPool[0].special){
                    cardEmbed.setFooter(cardPool[0].special)
                }
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
        else {
            message.reply("Here is a list of all the cards with that type:")
            returnable = ""
            counter = 1;
            for(name of cardNames){
                returnable = returnable.concat(name).concat("\n") 
                if(counter % 10 == 0){
                    message.channel.send(returnable)
                    returnable = ""
                }
                else if(counter == cardNames.length){
                    message.channel.send(returnable)
                    retunable = ""
                }
                counter++;
            }
        }
    },

    effectText: function(message, selectedCards, sliceLength){
        const searchable = message.content.slice(sliceLength).trim()
        applicableCards = []

        for(card of selectedCards){
            if(card.effect.toLowerCase().includes(searchable.toLowerCase())){
                applicableCards.push(card.name)
            }
        }
        applicableCards.sort()

        message.reply("Here is a list of every card with matching effect text:")

        tempMessage = ""
        counter = 1
        for(name of applicableCards){
            tempMessage = tempMessage.concat(name).concat("\n")
            if(counter % 10 == 0){
                message.channel.send(tempMessage)
                tempMessage = ""
            }
            else if(counter == applicableCards.length){
                message.channel.send(tempMessage)
                tempMessage = ""
            }
            counter++;
        }
    }
}