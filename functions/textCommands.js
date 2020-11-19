const { partner } = require("./partner")

module.exports = {
    rulebook: function(message){
        message.channel.send("Your question can be answered by reading the rulebook. Please familiarize yourself with it, per the server rules, before you ask anymore questions:\nhttps://drive.google.com/folderview?id=13l4AygyBAPDxul58Uin4sczHNmEhaSOF")
    },
    borrow: function(message){
        message.channel.send("If you used any of the memory borrower skills like Metalgreymon/Weregarurumon/Chirinmon/Digitamamon, or the option card Gravity Press, and decide to pass your turn while having positive memory, it goes like this:\n1) Declare you want to pass turn, so you put it to 3 on your opponent's side in order to pass the turn.\n2) Memory borrower's [End of Turn] effect activates, you get -X memory for each memory borrower skill used")
    },
    help: function(message){
        message.reply("Here are a list of commands:\n \
Searching:\n \
!card: `Search all card names`\n \
!digitama: `Search only Digitama cards`\n \
!digimon: `Search only Digimon cards`\n \
!tamer: `Search only Tamer cards`\n \
!option: `Search only Option cards`\n \
!alt: `Search for alternate arts`\n\n \
Useful:\n \
!borrow: `Information on memory borrowing`\n \
!faq: `List common question answers`\n \
!keyword: `List keywords`\n \
!meme: `The best reply to the most popular question to ever grace this game`\n \
!rulebook: `Simple question answer`\n\n \
Partner Stuff: \n \
!partner: `Check your partner and digivice` \n \
!digivolve: `Digivolve your partner` \n \
!dedigivolve: `Dedigivolve your partner` \n \
!fight: `Duke it out in a brawl against an opponent` \n\n \
Other:\n \
!count: `Number of cards in a certain type`\n \
!event: `List off the upcoming online events`\n \
!judge: `List requirements to become a Royal Knight` \n \
!starterColor: `Get the starter deck list of whatever color you specify`\n\n \
Reminder: large messages self-delete after a short time")
    },
    faq: function(message){
        message.channel.send("Your questions can be answered by the Official Q&A's. Please read over them to answer simple questions:\n \
1. General: <https://world.digimoncard.com/rule/pdf/general_rules.pdf?201106>\n \
2. Starter Deck Cards: <https://world.digimoncard.com/rule/pdf/starter_deck.pdf?201106>")        
    },
    keyword: function(message){
        message.channel.send("Blocker: `When the opponent attacks, you may Rest this Active Digimon to become the target of that attack.`\n\n \
Security Attack +/-X: `The number of Security cards checked by this Digimon +/- X. A player does not win the game when attacking directly with a Digimon with 0 Security Attack.`\n\n \
Recovery +X: `Take X cards from the top of your deck and add them to the top of your Security.`\n\n \
Piercing: `When this Digimon attacks and destroys an opponent’s Digimon by battle, it performs a Security Check against your opponent’s Security. This Security Check does not count as a direct attack.`\n\n \
Draw +X: `Draw x cards from the top of your deck and add them to your hand.`\n\n \
Jamming: `This Digimon cannot be destroyed in battle against a Security Digimon.`\n\n \
De-Digivolve X: `Discard X cards from the top of a Digimon. If a Digimon has no Digivolution Sources remaining, or is Lv.3, you may not continue discarding.`\n\n \
Download -X: `When you would Digivolve into this Digimon, you may rest 1 of your Digimon to reduce the Digivolution Cost by X.`\n\n \
Reboot: `In the opponent’s Active Phase, make this Digimon Active.`\n\n \
Vengeance: `When this Digimon is destroyed in battle, destroy the Digimon it was battling.`").then(msg => {msg.delete({ timeout: 60000 })}).catch(e => {})
    },

    event: function(message){
        message.channel.send("Upcoming Events:\n \
`1. November 21st, 11am EST: DigiDouble, Hosted by Renigade` - <https://challonge.com/pemhrybh>\n\n \
`2. November 29th: Discord Invitational, Hosted by RazeOblivion`\n\n \
`3. November 30th-December 5th: Prodigious!, Hosted by Saac` - <https://challonge.com/nv8ltxuj> (NOTE: Decklists due November 29th, 10pm EST))\n\n \
`4. December 5th: Nightmare Colosseum Qualifier 2, Hosted by Nightmare` - <https://challonge.com/NightmareColosseum> (NOTE: Decklists due December 4th, 5pm EST)")
    },
    info: function(message){
        message.channel.send("A personal partner line with full evolution functionality can be granted in 2 different ways:\n \
1. Achieve Gold Tamer status by winning an online Tournament hosted in this Discord\n \
2. Become a Server Booster (There are 17 Boosters Currently)\n\n \
You may also attain a personal partner *without* full line functionality in 2 different ways:\n \
1. Donate at least $5 to the server's Premium Mee6 fund (20 slots left, $0 of $100 donated)\n \
2. Boost the server for a period of time, then stop boosting")
    },
    reference: function(message, bonus){
        message.reply("All the cards with references are:\n")
        counter = 0;
        returnable = "";
        checker = false;

        for(card of bonus){
            returnable = returnable + card.name + "\n";
            counter += 1
            if(counter % 10 == 0){
                message.channel.send(returnable)
                returnable = ""
            }
            else if(bonus.length-counter < 10 && bonus.length != 10){
                checker = true;
            }
        }
        if(checker){
            message.channel.send(returnable)
            returnable = ""
            checker = false;
        }
    },

    deckloader: function(message){
        message.channel.send("Your issue with the deck loader is likely solved with one of the following answers:\n \
A) you didn't read the instructions fully and you renamed the \"mydeck\" tab in the notebook\n \
B) you didn't read the instructions fully and took the pile of cards out of the \"All Cards\" box before hitting load\n \
C) you're trying to load cards that aren't in the mod yet\n \
D) you copy+pasted the wrong thing from digimoncard.dev\n \
E) something *actually* broke, post the error message for Orange to look at later.")
    }

}