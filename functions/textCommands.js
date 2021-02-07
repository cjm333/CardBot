module.exports = {
    help: function(message){
        message.reply("Here are a list of commands:\n\
Normal Searches:\n\
!card: `Search all cards`\n\
!unit: `Search only units`\n\
!spell: `Search only spells`\n\
!augment: `Search only augments`\n\
!champion: `Search only champions`\n\
!spirit: `Search only spirits`\n\
!tower: `Search only towers`\n\
!shard: `Search only shards`\n\n\
Variant Searches:\n\
!alt: `Search alternate arts`\n\
!alpha: `Search the alpha versions of intro cards (WIP)`\n\
!beta: `Search test versions of intro cards (WIP)`\n\
!original: `Search the lower rarity versions of cards (WIP)`\n\n\
Other:\n\
!count: `Get how many cards there are of a type`\n\
!element: `Search in a particular element`\n\
!basic: `List all basic units in the game`\n\
!random: `Pull up a random card`\n\
!lore: `Read more into the world of Argos`\n\
Append 'Type' or 'Text' to a command from the first section to filter differently. Ex: !unitType, !spiritText")
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
    },

    stickers: function(message){
        message.reply("Here's a list of all stickers in Argent Saga:")
        message.channel.send("**LGS Kits:**\n\
Yuki (October 2019)\n\
Nanatsu (November 2019)\n\
Arbor Carbuncle (December 2019)\n\
Daylon (January 2020)\n\
Liyu (February 2020)\n\
Valtier (March 2020)\n\
Rex (April 2020)\n\
Linda (July 2020)\n\
Citra (September 2020)\n\
Ruka (November 2020)\n\n\
**Events:**\n\
Betrayal Regionals (Sola, Luna, & Corona)\n\
Revelations Regionals (Buckeye, Kyte, & Fizzy)\n\
Saga Showcase 2020 (Kyte)\n\
LGS Championships - March 2020 (Eccentric Visitor)\n\
Revelations Sneak Peek (Ketsu)\n\
Ascension Sneak Peek (Raoyenna)\n\
Echoes of Hokken Sneak Peek (Archaeologist)\n\n\
**Argent Saga Championships:**\n\
Dragonholt - ASC I, September 2019 (Indianapolis, IN)\n\
Hoenna - ASC II, October 2019 (Richmond, VA)\n\
Eitan - ASC III, November 2019 (Columbus, OH)\n\
Liam - ASC IV, December 2019 (Orlando, FL)\n\
Jemial - ASC V, January 2020 (Fort Worth, TX)\n\
Ergon - ASC VI, February 2020 (Las Vegas, NV)\n\n\
**Misc:**\n\
Judge 2019-2020\n\
Lootbox Collection\n\
")
    }
}