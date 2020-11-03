module.exports = {
    searching: function(message, selectedCards, sliceLength, Discord){
        //Variable Setup
        const cardEmbed = new Discord.MessageEmbed()
        channel = message.channel
        var noMatch = new Boolean(true)
        cardPool = []
        cardNames = []
    
        //User Search Parsing
        const args = message.content.slice(sliceLength).trim()
        const argsURL = args.replace(/\s/g, "-").replace(/'/g, "").replace("promo", "p").replace("(", "").replace(")", "").replace(":", "").replace("#", "").replace("!", "")
        const shortCut = argsURL.toLowerCase()
        const userSearch = shortCut.split("-");
        
        //Initial Card Gathering
        for(card of selectedCards){
            if(card.append.includes(userSearch[0])){
                cardNames.push(card.name)
                cardPool.push(card)
            }
        }
        
        //Thinning Card Pool
        if(userSearch.length > 1){
            counter = 1;
            do{
                index = 0;
                while(index < cardPool.length){
                    if(cardPool[index].append.includes(userSearch[counter])){
                        index++;
                    }
                    else{
                        cardPool.splice(index, 1)
                        cardNames.splice(index, 1)
                    }
                }
                counter++;
            } while(counter < userSearch.length)
        }
        
        //Shortcutting Exact Matches
        if(cardPool.length > 1){
            for(card of cardPool){
                if(card.append === shortCut){
                    cardEmbed.setImage(card.url)
                    cardEmbed.setTitle(card.name)
                    if(card.bonus){
                        cardEmbed.setFooter(card.bonus)
                    }
                    if(card.faq){
                        cardEmbed.setDescription(card.faq)
                    }
                    message.reply(cardEmbed).then(msg => {msg.delete({ timeout: 60000 })
                    })
                    noMatch = false
                }
            }
        }
        
        //Handling Resulting Card Pool
        checker = false;
        if(noMatch){
            if(cardPool.length == 0){
                message.reply("No cards exist with that phrase")
            }
            else if(cardPool.length == 1){
                cardEmbed.setImage(cardPool[0].url)
                cardEmbed.setTitle(cardPool[0].name)
                if(cardPool[0].bonus){
                    cardEmbed.setFooter(cardPool[0].bonus)
                }
                if(cardPool[0].faq){
                    cardEmbed.setDescription(cardPool[0].faq)
                }
                message.reply(cardEmbed).then(msg => {
                    msg.delete({ timeout: 60000 })
                })
            }
            else if(cardPool.length > 1 && cardPool.length < 25){
                message.reply("Multiple cards match your phrase. Pick from the list below and try again:")
                returnable = "";
                counter = 0;
                for(name of cardNames){
                    returnable = returnable + name + "\n";
                    counter += 1
                    if(counter % 5 == 0 || counter == cardPool.length){
                        message.channel.send(returnable)
                        returnable = ""
                    }
                }
            }
            else{
                message.reply("Your search term was too broad. Be a bit more specific")
            }
        }
    
    }
}