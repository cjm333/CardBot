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
Append 'Type' or 'Text' to a command (besides !basic) to filter based on preference. Ex: !unitType, !spiritText")
    }
}