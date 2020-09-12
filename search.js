module.exports = {
    searching: function(message, selectedCards, sliceLength, Discord){
        const cardEmbed = new Discord.MessageEmbed()
        channel = message.channel
        var doCheck = new Boolean(true)
        cardList = []
        cardNames = []
    
        const args = message.content.slice(sliceLength).trim()
        const argsURL = args.replace(/\s/g, "-").replace(/'/g, "").replace("promo", "p").replace("(", "").replace(")", "").replace(":", "")
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
                returnable = ""
                for(name of cardNames){
                    returnable = returnable.concat(name).concat("\n") 
                }
                channel.send(returnable)
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
}