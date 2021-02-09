module.exports = {
    searching: function(message, selectedCards, sliceLength, Discord){
        //Variable Setup
        const cardEmbed = new Discord.MessageEmbed()
        const channel = message.channel
        var noMatch = new Boolean(true)
        cardPool = []
        cardNames = []
    
        //User Search Parsing
        args = message.content.slice(sliceLength).trim()
        args = args.replace(/[():#!\*']/g, "").replace("promo", "p").replace("&", "and")
        const shortCut = args.toLowerCase().replace(/\s/g, "-")
        const userSearch = args.toLowerCase().replace(/-/g, " ").split(" ");

        //Disallow Massive Results
        if(shortCut == "mon" || shortCut.replace(/-/g, "").length <= 2 || ((shortCut.length == 3 || shortCut.length == 4) && shortCut.includes("bt"))){
            message.reply("Sorry, try a more specific search")
            return;
        }

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
                    cardEmbed.setTitle(card.name)
                    if(card.bonus){cardEmbed.setFooter(card.bonus)}
                    if(card.faq){cardEmbed.setDescription(card.faq)}
                    if(card.url){cardEmbed.setImage(card.url)}
                    else{
                        temp = "https://world.digimoncard.com/images/cardlist/card/".concat(card.id).concat(".png")
                        cardEmbed.setImage(temp)
                    }
                    message.reply(cardEmbed).then(msg => {msg.delete({ timeout: 120000 }).catch(e => {})})
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
                cardEmbed.setTitle(cardPool[0].name)
                if(cardPool[0].bonus){ cardEmbed.setFooter(cardPool[0].bonus)}
                if(cardPool[0].faq){cardEmbed.setDescription(cardPool[0].faq)}
                if(cardPool[0].url){cardEmbed.setImage(cardPool[0].url)}
                else{
                    temp = "https://world.digimoncard.com/images/cardlist/card/".concat(cardPool[0].id).concat(".png")
                    cardEmbed.setImage(temp)
                }
                message.reply(cardEmbed).then(msg => {msg.delete({ timeout: 120000 }).catch(e => {})})
            }
            else if(cardPool.length == selectedCards.length){
                message.reply("Sorry, try a more specific search")
            }
            else {
                message.reply("Multiple cards match your phrase. Pick from the list below and try again:")
                returnable = "";
                counter = 0;
                cardNames.sort()
                for(name of cardNames){
                    returnable = returnable + name + "\n";
                    counter += 1
                    if(counter % 10 == 0 || counter == cardPool.length){
                        message.channel.send(returnable)
                        returnable = ""
                    }
                }
            }
        }
    
    }
}