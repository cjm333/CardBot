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
Other:\n \
!count: `Number of cards in a certain type`\n \
!event: `List off the upcoming online events`\n \
!judge: `List requirements to become a Royal Knight` \n \
!partner: `Check your partner and digivice` \n \
!digivolve: `Digivolve your partner` \n \
!dedigivolve: `Dedigivolve your partner` \n \
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
Vengeance: `When this Digimon is destroyed in battle, destroy the Digimon it was battling.`").then(msg => {
    msg.delete({ timeout: 60000 })})
    },

    red: function(message){
        message.channel.send("Main:\n \
4 Biyomon ST1-02\n \
4 Agumon ST1-03\n \
4 Dracomon ST1-04\n \
4 Birdramon ST1-05\n \
4 Coredramon ST1-06\n \
2 Greymon ST1-07\n \
4 Garudamon ST1-08\n \
4 MetalGreymon ST1-09\n \
2 Phoenixmon ST1-10\n \
2 WarGreymon ST1-11\n \
4 Tai Kamiya ST1-12\n \
4 Wing Blade ST1-13\n \
2 Starlight Explosion ST1-14\n \
4 Giga Blaster ST1-15\n \
2 Terra Force ST1-16\n\n \
Digitama Deck:\n \
4 Koromon ST1-01")
    },

    blue: function(message){
        message.channel.send("Main:\n \
4 Gomamon ST2-02\n \
4 Gabumon ST2-03\n \
4 Bearmon ST2-04\n \
4 Ikkakumon ST2-05\n \
2 Garurumon ST2-06\n \
4 Grizzlymon ST2-07\n \
4 WereGarurumon ST2-08\n \
4 Zudomon ST2-09\n \
2 Plesiomon ST2-10\n \
2 MetalGarurumon ST2-11\n \
4 Matt Ishida ST2-12\n \
4 Vulcan's Hammer ST2-13\n \
2 Sorrow Blue ST2-14\n \
4 Wolf Claw ST2-15\n \
2 Ice Wolf Claw ST2-16\n\n \
Digitama Deck:\n \
4 Tsunomon ST2-01")
    },

    yellow: function(message){
        message.channel.send("Main:\n \
4 Salamon ST6-02\n \
4 Tapirmon ST6-03\n \
4 Patamon ST6-04\n \
2 Angemon ST6-05\n \
4 Gatomon ST6-06\n \
4 Unimon ST6-07\n \
4 Magnaangemon ST6-08\n \
4 Angewomon ST6-09\n \
2 Magnadramon ST6-10\n \
2 Seraphimon ST6-11\n \
4 T.K. Takaishi ST6-12\n \
4 Gate Of Destiny ST6-13\n \
2 Heaven's Charm ST6-14\n \
4 Fire Tornado ST6-15\n \
2 Strike Of The Seven Stars ST6-16\n\n \
Digitama Deck:\n \
4 Tokomon (ST6-01)")
    },
    green: function(message){
        message.channel.send("Main:\n \
4 Floramon ST4-02\n \
4 Tentomon ST4-03\n \
4 Palmon ST4-04\n \
4 Kunemon ST4-05\n \
4 Togemon ST4-06\n \
4 Kuwagamon ST4-07\n \
2 Kabuterimon ST4-08\n \
4 Okuwamon ST4-09\n \
4 Lillymon ST4-10\n \
2 MegaKabuterimon ST4-11\n \
2 Rosemon ST4-12\n \
2 HerculesKabuterimon ST4-13\n \
4 Izzy Izumi ST4-14\n \
4 Needle Spray ST4-15\n \
2 Electro Shocker ST4-16\n\n \
Digitama Deck:\n \
4 Motimon (ST4-01)")
    },
    black: function(message){
        message.channel.send("Main:\n \
4 Jazamon ST5-02\n \
4 Agumon ST5-03\n \
4 ToyAgumon ST5-04\n \
4 Commandramon ST5-05\n \
4 Greymon ST5-06\n \
4 Jazardmon ST5-07\n \
2 DarkTyrannomon ST5-08\n \
4 MetalGreymon ST5-09\n \
4 MetalTyrannomon ST5-10\n \
2 Megadramon ST5-11\n \
2 Machinedramon ST5-12\n \
2 BlitzGreymon ST5-13\n \
4 Tai Kamiya ST5-14\n \
4 Laser Eye ST5-15\n \
2 Genocide Attack ST5-1\n\n \
Digitama Deck:\n \
4 Kapurimon (ST5-01)")
    },
    purple: function(message){
        message.channel.send("Main:\n \
4 DemiDevimon ST6-02\n \
4 Gabumon ST6-03\n \
4 Dracmon ST6-04\n \
4 Elecmon ST6-05\n \
4 Garurumon ST6-06\n \
4 Youkomon ST6-07\n \
2 Devimon ST6-08\n \
4 Kyukimon ST6-09\n \
4 SkullSatamon ST6-10\n \
2 WereGarurumon ST6-11\n \
2 VenomMyotismon ST6-12\n \
2 CresGarurumon ST6-13\n \
4 Matt Ishida ST6-14\n \
4 Death Claw ST6-15\n \
2 Nail Bone ST6-1\n\n \
Digitama Deck:\n \
4 Pagumon (ST6-01)")
    },
    event: function(message){
        message.channel.send("Upcoming Events:\n \
`1. November 4th-6th: DigiRumble 2 Finals`\n\n \
`2. November 7th, 1pm EST: Big Byte #7, Hosted by RazeOblivion` - <https://challonge.com/HardModeGamesBB7>\n\n \
`3. November 13th, 8pm UTC (4pm EST): Nightmare Colosseum, Hosted by Nightmare` - <https://challonge.com/lmoufecb>\n\n \
`4. November 21st, 11am EST: DigiDouble, Hosted by Renigade` - <https://challonge.com/pemhrybh>\n\n \
`5. November 30th-December 5th: Prodigious!, Hosted by Saac` - <https://challonge.com/nv8ltxuj>")
    },
    info: function(message){
        message.channel.send("A personal partner line with full evolution functionality can be granted in 2 different ways:\n \
1. Achieve Gold Tamer status by winning an online Tournament hosted in this Discord\n \
2. Become a Server Booster (There are 13 Boosters Currently)\n\n \
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
    }

}