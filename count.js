module.exports = {
    counting: function(message, data, allCards){
        const type = message.content.slice(6).trim()
        if(type == "units" || type == "unit"){
            const response = "There are " + data.units.length + " units in Argent Saga"
            message.reply(response)
        }
        else if(type == "spells" || type == "spell"){
            const response = "There are " + data.spells.length + " spells in Argent Saga"
            message.reply(response)
        }
        else if(type == "augments" || type == "augment"){
            const response = "There are " + data.augments.length + " augments in Argent Saga"
            message.reply(response)
        }
        else if(type == "champions" || type == "champion"){
            const response = "There are " + data.champions.length + " champions in Argent Saga"
            message.reply(response)
        }
        else if(type == "spirits" || type == "spirit"){
            const response = "There are " + data.spirits.length + " spirits in Argent Saga"
            message.reply(response)
        }
        else if(type == "towers" || type == "tower"){
            const response = "There are " + data.towers.length + " towers in Argent Saga"
            message.reply(response)
        }
        else if(type == "shards" || type == "shard"){
            tracker = data.shards.length - 2
            const response = "There are " + tracker + " shards in Argent Saga"
            message.reply(response)
        }
        else if(type == "cards" || type == "card"){
            const response = "There are " + allCards.length + " cards in Argent Saga"
            message.reply(response)
        }
        else{
            message.reply("Sorry, that is a not a valid card type to count")
        }
    },

    countingType: function(message, data){
        const type = message.content.slice(10).trim()
        const cardType = type.toLowerCase();
        cardNames = []
        
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
            for(card of data){
                if(card.type){
                    if(card.type.includes(cardType)){
                        cardNames.push(card.name)
                    }
                }
            }
        }
        
        message.reply("There are " + cardNames.length + " cards of type " + cardType)
    }
}