module.exports = {
    help: function(message){
        message.reply("Here are a list of commands:\n \
!card: `Search all cards`\n \
!unit: `Search only units`\n \
!spell: `Search only spells`\n \
!augment: `Search only augments`\n \
!champion: `Search only champions`\n \
!spirit: `Search only spirits`\n \
!tower: `Search only towers`\n \
!shard: `Search only shards`\n \
!count: `Get how many cards there are of a type`\n \
!element: `Search in a particular element`\n \
!basic: `List all basic units in the game`\n \
!random: `Pull up a random card`\n \
Append 'Type' or 'Text' to a command (besides !basic or !random) to filter based on preference. Ex: !unitType, !spiritText")
    },

    cardPrint: function(message, cards){
        returnable = ""
        counter = 1;
        cards.sort()

        for(name of cards){
            returnable = returnable.concat(name).concat("\n") 
            if(counter % 10 == 0 || counter == cards.length){
                message.channel.send(returnable)
                returnable = ""
            }
            counter++;
        }
    }
}