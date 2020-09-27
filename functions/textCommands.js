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
!meme: `The best reply to the most popular question to ever grace this server`\n \
!rulebook: `Simple question answer`\n\n \
Other:\n \
!count: `Number of cards in a certain type`\n \
!event: `List off the upcoming online events`\n \
!partner: `Check your partner and digivice` \n \
!starterColor: `Get the starter deck list of whatever color you specify`\n\n \
Reminder: large messages self-delete after a short time")
    },
    faq: function(message){
        message.channel.send("1. Play/Digivolve: `Playing and digivolving are NOT the same thing. These cause different effects and cost different amounts on card`\n \
2. Raising Area: `Digimon in the raising area cannot activate their effects and cannot have effects affect them UNLESS specifically mentioned on the card in question. These Digimon are not considered \"in play\" for effects.`\n \
3. Effect Transfer: `If you evolve a mon with an effect (+DP, +Security, etc), it applies to evolved mon as well. This includes summoning sickness. NOTE: Digimon moved from raising to play do NOT have summoning sickness` \n \
4. Color Restrictions: `Tamers have no color restrictions. Digimon have color restrictions for evolving, the color of which is specified in the bubble (two colored bubbles indicates \"pick one\"). Options require a Tamer or Digimon of the same color to be on the field (this INCLUDES raising area).`\n \
5. Digimon in Security: `These are NOT considered Digimon and their effects do NOT activate unless it's specifically a security effect (which are only in BT3).`\n \
6. Attacking for Game: `+X Security effects will NOT win a game. To win, you must attack the player while they have no security. NOTE: Gallantmon is an exception. He can attack player, discard all their security and win`\n \
7. +X Security Effects: `These DO add to the check made by Piercing. If turn passes in the middle of checking extra security, the checks continue UNLESS the Digimon is destroyed.`").then(msg => {
    msg.delete({ timeout: 90000 })})        
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
4 Salamon ST3-02\n \
4 Tapirmon ST3-03\n \
4 Patamon ST3-04\n \
2 Angemon ST3-05\n \
4 Gatomon ST3-06\n \
4 Unimon ST3-07\n \
4 Magnaangemon ST3-08\n \
4 Angewomon ST3-09\n \
2 Magnadramon ST3-10\n \
2 Seraphimon ST3-11\n \
4 T.K. Takaishi ST3-12\n \
4 Gate Of Destiny ST3-13\n \
2 Heaven's Charm ST3-14\n \
4 Fire Tornado ST3-15\n \
2 Strike Of The Seven Stars ST3-1\n\n \
Digitama Deck:\n \
4 Tsunomon (ST2-01)")
    },
    event: function(message){
        message.channel.send("Upcoming Events:\n \
`October 10th, 5pm UK Time: London Players Guild Tourney, Hosted by LPG -` https://challonge.com/vc4z8f6s\n\n \
`October 25th, 11am UK Time: London Players Guild Tourney, Hosted by LPG -` https://challonge.com/y1uw3wkk\n\n \
`October 26th, 10am CDT (Week Long Event): DigiRumble 2, Hosted by orangeswim -` https://challonge.com/dcdevR2\n\n \
`October 31st: Big Byte #7, Hosted by RazeOblivion`\n\n \
`November 1st, 7pm EST: DigiDuels, Hosted by Drago`\n\n \
`TBD: Teams Event by Antinomy`")
    }

}