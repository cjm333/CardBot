module.exports = {
    rulebook: function(message){
        message.channel.send("Your question can be answered by reading the rulebook. Please familiarize yourself with it, per the server rules, before you ask anymore questions:\nhttps://drive.google.com/folderview?id=13l4AygyBAPDxul58Uin4sczHNmEhaSOF")
    },
    borrow: function(message){
        message.channel.send("If you used any of the memory borrower skills aka  Metalgreymon/Weregarurumon/Chirinmon/Digitamamon or the option card Gravity Press, and decide to pass your turn while having positive memory, it goes like this:\n1) Declare you want to pass turn, so you put it to 3 on your opponent's side in order to pass the turn.\n2) Memory borrower's (end of turn) part of the effect activates, you get -3 or -2 memory for each memory borrower skill used, depending on which card you used")
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
        4x Biyomon (st1-02)\n \
        4x Agumon (st1-03)\n \
        4x Dracomon (st1-04)\n \
        4x Birdramon (st1-05)\n \
        4x Coredramon (st1-06)\n \
        2x Greymon (st1-07)\n \
        4x Garudamon (st1-08)\n \
        4x MetalGreymon (st1-09)\n \
        2x Phoenixmon (st1-10)\n \
        2x WarGreymon (st1-11)\n \
        4x Tai Kamiya (st1-12)\n \
        4x Wing Blade (st1-13)\n \
        2x Starlight Explosion (st1-14)\n \
        4x Giga Blaster (st1-15)\n \
        2x Terra Force (st1-16)\n\n \
        Digitama Deck:\n \
        4x Koromon (ST1-01)")
    },

    blue: function(message){
        message.channel.send("Main:\n \
        4x Gomamon (ST2-02)\n \
        4x Gabumon (ST2-03)\n \
        4x Bearmon (ST2-04)\n \
        4x Ikkakumon (ST2-05)\n \
        2x Garurumon (ST2-06)\n \
        4x Grizzlymon (ST2-07)\n \
        4x WereGarurumon (ST2-08)\n \
        4x Zudomon (ST2-09)\n \
        2x Plesiomon (ST2-10)\n \
        2x MetalGarurumon (ST2-11)\n \
        4x Matt Ishida (ST2-12)\n \
        4x Vulcan's Hammer (ST2-13)\n \
        2x Sorrow Blue (ST2-14)\n \
        4x Wolf Claw (ST2-15)\n \
        2x Ice Wolf Claw (ST2-16)\n\n \
        Digitama Deck:\n \
        4x Tsunomon (ST2-01)")
    },

    yellow: function(message){
        message.channel.send("Someone send me this one typed out cuz I don't do it")
    }

}