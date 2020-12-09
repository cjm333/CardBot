module.exports = {
    counting: function(message, stats){
        const type = message.content.slice(6).trim()
        if(type == "units" || type == "unit"){
            const response = "There are " + stats.units + " units in Argent Saga"
            message.reply(response)
        }
        else if(type == "spells" || type == "spell"){
            const response = "There are " + stats.spells + " spells in Argent Saga"
            message.reply(response)
        }
        else if(type == "augments" || type == "augment"){
            const response = "There are " + stats.augments + " augments in Argent Saga"
            message.reply(response)
        }
        else if(type == "champions" || type == "champion"){
            const response = "There are " + stats.champions + " champions in Argent Saga"
            message.reply(response)
        }
        else if(type == "spirits" || type == "spirit"){
            const response = "There are " + stats.spirits + " spirits in Argent Saga"
            message.reply(response)
        }
        else if(type == "towers" || type == "tower"){
            const response = "There are " + stats.towers + " towers in Argent Saga"
            message.reply(response)
        }
        else if(type == "shards" || type == "shard"){
            const response = "There are " + stats.shards + " shards in Argent Saga"
            message.reply(response)
        }
        else if(type == "basics" || type == "basic"){
            const response = "There are " + stats.basics + " basic units in Argent Saga"
            message.reply(response)
        }
        else if(type == "fire"){
            const response = "There are " + stats.fire + " fire cards in Argent Saga"
            message.reply(response)
        }
        else if(type == "water"){
            const response = "There are " + stats.water + " water cards in Argent Saga"
            message.reply(response)
        }
        else if(type == "air"){
            const response = "There are " + stats.air + " air cards in Argent Saga"
            message.reply(response)
        }
        else if(type == "light"){
            const response = "There are " + stats.light + " light cards in Argent Saga"
            message.reply(response)
        }
        else if(type == "dark"){
            const response = "There are " + stats.dark + " dark cards in Argent Saga"
            message.reply(response)
        }
        else if(type == "argent"){
            const response = "There are " + stats.argent + " argent cards in Argent Saga"
            message.reply(response)
        }
        else if(type == "cards" || type == "card"){
            const response = "There are " + stats.cards + " cards in Argent Saga"
            message.reply(response)
        }
        else{
            message.reply("Sorry, that is a not a valid card type to count")
        }
    },

    countingType: function(message, cards){
        const type = message.content.slice(10).trim()
        const cardType = type.toLowerCase();
        cardNames = []
        
        if(cardType == "mech"){
            for(card of cards){
                if(card.type && card.type == cardType){
                    cardNames.push(card.name)
                }
            }
        }
        else{
            for(card of cards){
                if(card.type){
                    if(card.type.includes(cardType)){
                        cardNames.push(card.name)
                    }
                }
            }
        }
        
        message.reply("There are " + cardNames.length + " cards of type " + cardType)
    },

    promo: function(message, allCards){
        count = 0;
        for(card of allCards){
            if(card.promo){
                count = count+1;
            }
        }

        message.reply("There are " + count + " promo exclusive cards in Argent Saga.\nNOTE: This only counts cards not available in sealed product. It also only encompasses Units, Spells, and Augments")
    },

    random: function(message, allCards, Discord, seedrandom){
        temp = seedrandom()
        num = Math.floor(temp()*allCards.length)
        const cardEmbed = new Discord.MessageEmbed()
        cardEmbed.setImage(allCards[num].url)
        cardEmbed.setTitle(allCards[num].name)
        cardEmbed.setDescription(allCards[num].effect)
        if(allCards[num].special){
            cardEmbed.setFooter(allCards[num].special)
        }
        message.reply(cardEmbed);
    },

    draft: function(message, allCards, seedrandom){
        deck = [];
        temp = seedrandom()
        for(i = 1; i<61; i++){
            num = Math.floor(temp()*allCards.length);
            deck.push(allCards[num].name);
        }

        deck.sort();
        returnable = ""
        for(name of deck){
            returnable = returnable.concat(name).concat("\n")
        }
        message.reply("Here is your draft pool:")
        message.channel.send(returnable)
    }
}