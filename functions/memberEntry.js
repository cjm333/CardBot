module.exports = {
    getDigivice: function(id) {
        digivices = ["Digivice 01", "D-Cyber", "Digivice", "D-3", "D-Power", "Data Link", "Fusion Loader", "Digivice:", "Smartphone Digivice"]
        index = id%digivices.length
        return digivices[index]
    },

    getPartner: function(id){
        partners = ["Agumon", "Gabumon", "Gomamon", "Tentomon", "Palmon", "Biyomon", "Patamon", "Salamon", "Betamon", 
        "Guilmon", "Renamon", "Gatomon", "Lopmon", "Terriermon", "Gotsumon", "Kokuwamon", "DemiDevimon", "Monodramon", 
        "FanBeemon", "Guardromon", "MarineAngemon", "Impmon", "Hagurumon", "Shoutmon", "Gumdramon", "Neemon", "Bearmon",
        "Tapirmon", "Veemon", "Hawkmon", "Armadillomon", "Wormmon", "Meicoomon", "Calumon", "Leomon (Uh oh....)", 
        "Kokomon", "Crabmon", "Airdramon", "Flarerizamon", "Centarumon", "Frigimon", "Tortomon", "Floramon", "Gizamon",
        "Elecmon", "Syakomon", "Apemon", "Kuwagamon", "Snimon", "Unimon", "Gorillamon", "Locomon", "Mervamon", "Opossummon",
        "Hackmon", "Cyberdramon", "Gaomon", "Lalamon", "Falcomon", "Kudamon", "PawnChessmon (Black)", "PawnChessmon (White)",
        "Pipimon", "BanchoLeomon", "Zeromaru", "Dorumon", "Argomon", "Keramon", "Kunemon", "Labramon", 
        "BlackAgumon", "ToyAgumon", "Bokomon", "Monmon", "Morphomon", "BlackGabumon", "Muchomon", "Otamamon", "Penguinmon",
        "DemiMeramon", "Phascomon", "Dracmon", "Dracomon", "Psychemon", "Burgermon", "Goblimon", "Gazimon", "Solarmon",
        "SnowAgumon", "Tinkermon", "Vorvomon", "Kamemon", "Lucemon", "Jazamon", "Zubamon", "Chuumon", "Lunamon", "uh....... Coronamon.....", 
        "Ballistamon", "Dorulumon", "Damemon", "Cutemon", "Chibitortomon", "Starmon and several Pickmons", "Candlemon",
        "Dondokomon", "Sparrowmon", "Monitamon", "Dobermon", "Seasarmon", "Gaossmon", "MailBirdramon", "Greymon (Fusion)",
        "Falcomon (Data Squad)", "Agumon X", "Betamon X", "Kokuwamon X", "Kotemon", "Kudamon (Data Squad)", "Aruraumon",
        "Liollmon", "Lopmon X", "Terriermon X", "BlackAgumon X", "Ludomon", "BlackGuilmon", "ModokiBetamon", "Crabmon X",
        "Commandramon", "Otamamon (Red)", "Otamamon X", "Palmon X", "Dracomon X", "Ryudamon", "Renamon X", "Salamon X",
        "Sangomon", "ShadowToyAgumon", "Shamanmon", "Gabumon X", "Sistermon Blanc", "SnowGoblimon", "Gazimon X", "Ghostmon",
        "Spadamon", "Gizumon", "Syakomon X", "Gomamon X", "Gotsumon X", "Guilmon X", "Professor Agumon", "Terriermon Assistant",
        "Hagurumon X", "Herissmon", "Hyokomon", "Vemmon", "Vi-Elecmon", "Impmon X", "Keramon X"]
        index = id%partners.length
        return partners[index]
    },
    partner: function(message, partnerJSON, tracking){
        elite = false;
        id = message.author.id;
        current = 0;
        current2 = 0;
        grab = null;
        elitePartner = null;

        for(searchable of tracking){
            if(id == searchable[0]){
                elite = true;
                current = searchable[1]
                current2 = searchable[2]
            }
        }

        if(elite){
            for(searchable of partnerJSON){
                if(id == searchable.id){
                    //console.log(id)
                    //console.log(searchable.id)
                    //console.log(grab)
                    grab = searchable;
                    //console.log(grab)
                }
            }

            if(current == 1){
                elitePartner = grab.fresh;
            }
            else if(current == 2){
                elitePartner = grab.inTraining;
            }
            else if(current == 3){
                elitePartner = grab.rookie;
            }
            else if(current == 4) {
                elitePartner = grab.champion;
            }
            else if(current == 5) {
                elitePartner = grab.ultimate;
            }
            else if(current == 6) {
                elitePartner = grab.mega[current2];
            }

            message.reply("Your partner is " + elitePartner + ". You're connected via your " + grab.digivice + "!");
            elite = false;

        }
        else{
            message.reply("Your partner is " + this.getPartner(id) + ". You're connected via your " + this.getDigivice(id) + "!");
        }

        //Tesero (Gold)
        if(id == "176959369030795274"){
            message.reply("Your partner is Wizardmon. You're connected via your Digivice 01!")
        }
        //R_009 (Gold)
        else if(id == "591340274119213088"){
            message.reply("Your partner is Koromon. You're connected via your Smartphone Digivice!")
        }
        //Hoang (Gold)
        else if(id == "151088210426986496"){
            message.reply("Your partner is Hackmon. You're connected via your Smartphone Digivice!")
        }
        //Deci (Gold)
        else if(id == "101162491962195968"){
            message.reply("Your partner is Algomon. You're connected via your Smartphone Digivice!")
        }
        //Twinsinner (Booster)
        else if(id == "118951296383451136"){
            message.reply("Your partner is Lopmon. You're connected via your D-Ark!")
        }
        //Maria (Booster)
        else if(id == "223208303541354498"){
            message.reply("Your partner is Renamon. You're connected via your D-Power!")
        }
    }
}