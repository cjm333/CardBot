const { partner } = require("./partner")

module.exports = {
    rulebook: function(message){
        message.channel.send("Your questions can be answered by reading the rulebook. Please familiarize yourself with it, per the server rules:\n \
Server Made (slightly more in depth) - https://drive.google.com/folderview?id=13l4AygyBAPDxul58Uin4sczHNmEhaSOF\n \
Official - https://world.digimoncard.com/rule/pdf/manual.pdf?201120")
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
!rulebook: `Simple question answer`\n \
!faq: `List common question answers`\n \
!banlist: `Most current banlist`\n\
!keyword: `List keywords`\n \
!borrow: `Information on memory borrowing`\n \
!meme: `Digivolving vs. Playing`\n \
!import: `TTS Custom Import info`\n \
!cake: `Link to TTS mod`\n\n \
Partner Stuff: \n \
!partner: `Check your partner and digivice` \n \
!digivolve: `Digivolve your partner` \n \
!dedigivolve: `Dedigivolve your partner` \n \
!fight: `Duke it out in a brawl against an opponent (ONLY in the arena)` \n\n \
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
2. Starter Deck Cards: <https://world.digimoncard.com/rule/pdf/starter_deck.pdf?201106>\n \
3. BT1 Cards: <https://world.digimoncard.com/rule/pdf/qa_pack_01.pdf?201120>\n \
4. BT2 Cards: <https://world.digimoncard.com/rule/pdf/qa_pack_02.pdf?201120>\n \
5. Promo Cards: <https://world.digimoncard.com/rule/pdf/qa_promocard.pdf?201120>\n\n \
Translated Japanese FAQs:\n \
1. BT3 Cards: <https://docs.google.com/document/d/11Uhu8R8CC9IouwbAICE4Ay5KFbJVvk7qWynjat_7K9Q/edit#>\n\
2. BT4 Cards: <https://game-academia.com/blogs/digimon-card-game-blog/digimon-card-game-booster-great-legend-bt-04-q-a>\n\n \
NOTE: Bandai's English FAQs may have some issues, so feel free to ask if something seems odd")        
    },
    keyword: function(message){
        message.channel.send("Blocker: `When the opponent attacks, you may Rest this Unsuspended Digimon to become the target of that attack.`\n\n \
Security Attack +/-X: `The number of Security cards checked by this Digimon +/- X. A player does not win the game when attacking directly with a Digimon with 0 Security Attack.`\n\n \
Recovery +X: `Take X cards from the top of your deck and add them to the top of your Security.`\n\n \
Piercing: `When this Digimon attacks and destroys an opponent’s Digimon by battle, it performs a Security Check against your opponent’s Security. This Security Check does not count as a direct attack.`\n\n \
Draw +X: `Draw x cards from the top of your deck and add them to your hand.`\n\n \
Jamming: `This Digimon cannot be destroyed in battle against a Security Digimon.`\n\n \
De-Digivolve X: `Discard X cards from the top of a Digimon. If a Digimon has no Digivolution Sources remaining, or is Lv.3, you may not continue discarding.`\n\n \
Digisorption -X: `When you would Digivolve into this Digimon, you may rest 1 of your Digimon to reduce the Digivolution Cost by X.`\n\n \
Reboot: `In the opponent’s Active Phase, make this Digimon Active.`\n\n \
Retaliation: `When this Digimon is destroyed in battle, destroy the Digimon it was battling.`\n\n \
Digi-Burst X: `Trash X of this Digimon's digivolution cards to activate the effect below.`\n\n\
Rush: `This Digimon can attack the turn it comes into play.`\n\n\
Advance: `This Digimon can attack when your opponent has 1 or more memory.`").then(msg => {msg.delete({ timeout: 120000 })}).catch(e => {})
    },

    event: function(message){
        message.channel.send("Upcoming Events:\n \
`1. March 6th: IVy Leagues, Hosted by LoganIV (TTS, BT5 Format, Swiss w/ Top Cut, Decklists Due March 4th)` - <https://challonge.com/IvyBT5>\n\
`2. March 20th: Big Byte #10, Hosted by RazeOblivion (1.5 Webcam, Swiss)` - <https://challonge.com/HardModeGamesBB10>\n\
`3. March 21st: Chaosmon Circuit, Hosted by jeff (TTS)` - <https://challonge.com/dhlsidfa>\n\
`4. March 22nd: Escalation Cup, Hosted by DBX & dhyeya336 (TTS, Week Long Event)` - <https://challonge.com/7n8yy0y7>\n\
`5. March 27th: Nightmare Colosseum 3.0, Hosted by Nightmare (Webcam 1.5, Swiss w/ Top 8)` - <https://challonge.com/5avm4q32>\n\
`6. March 28th: Trash Mountain Championship, Hosted by Plandana (TTS, Bo3)` - <https://challonge.com/yi3kj591>")
    },
    release: function(message){
        message.channel.send("Upcoming English Releases:\n\
`1. Booster 1.5: March 12th (Delayed from February 28th)`\n\
`2. Premium Pack 01: April 15th`\n\
`3. Great Legends (BT4): May 28th (Delayed from original)`\n\
`4. Battle of Omni (BT5): July 23rd (Dealyed from original)`\n\
`5. WarGreymon Playmat Bundle: August`\n\
`6. ST4-6: Originally alongside BT4, unsure now with the BT4 delays`")
    },
    banlist: function(message){
        message.channel.send("***Limited to 1:***       Effective April 1st for English\n\
Argomon (BT2-047)\n\
Hidden Potential Discovered!! (BT3-103)\n\n\
Reasonings Described Here: <https://world.digimoncard.com/rule/restriction_card/>")
    },
    info: function(message){
        message.channel.send("Premium Partner Functionality can be granted in 2 different ways:\n \
1. Achieve Gold Tamer status by winning an online Tournament hosted in this Discord (at least 20 participants)\n \
2. Become a Server Booster (There are 21 Boosters Currently with 30 Boosts total)\n\n \
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