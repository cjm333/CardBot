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
        "Elecmon", "Syakomon", "Apemon", "Kuwagamon", "Snimon", "Unimon", "Gorillamon", "Dokamon", "Musimon", "Gatchmon",
        "Hackmon", "Cyberdramon", "Gaomon", "Lalamon", "Falcomon", "Kudamon", "PawnChessmon (Black)", "PawnChessmon (White)",
        "Hackmon (Appmon)", "BanchoLeomon", "Zeromaru", "Dorumon", "Argomon", "Keramon", "Kunemon", "Labramon", 
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
    partner: function(message){
        id = message.author.id
        //Zaffy
        if(id == "269296909066305566"){
            message.reply("Your partner is PetitMammon. You're connected via your Digivice 01!")
        }
        //Me
        else if(id == "223279276340805632"){
            message.reply("Your partner is Hackmon. You're connected via your Appli Drive Duo!")
        }
        //Ted
        else if(id == "185756831304515587"){
            message.reply("Your partner is Garurumon. You're connected via your D-Ark!")
        }
        //Orange
        else if(id == "507019396238016512"){
            message.reply("Your partner is SkullGreymon. You're connected via your Digivice!")
        }
        //Anti
        else if(id == "121428788734066688"){
            message.reply("Your partner is ModokiBetamon. You're connected via your Digivice!")
        }
        //Clemens
        else if(id == "150467882910744577"){
            message.reply("Your partner is SkullGreymon. You're connected via your Digivice!")
        }
        //BlueNume (Gold)
        else if(id == "268612585069215765"){
            message.reply("Your partner is Numemon. You're connected via your Data Link!")
        }
        //Tesero (Gold)
        else if(id == "176959369030795274"){
            message.reply("Your partner is Wizardmon. You're connected via your Digivice 01!")
        }
        //R_009 (Gold)
        else if(id == "591340274119213088"){
            message.reply("Your partner is Koromon. You're connected via your Smartphone Digivice!")
        }
        //Hoang (Gold)
        else if(id == "172778059659739136"){
            message.reply("Your partner is DORUmon. You're connected via your D-Burst!")
        }
        //Hoang (Gold)
        else if(id == "151088210426986496"){
            message.reply("Your partner is Hackmon. You're connected via your Smartphone Digivice!")
        }
        //Twinsinner (Booster)
        else if(id == "118951296383451136"){
            message.reply("Your partner is Lopmon. You're connected via your D-Ark!")
        }
        //Mellow (Booster)
        else if(id == "160130297663324170"){
            message.reply("Your partner is Tsukaimon. You're connected via your D-Ark!")
        }
        //Maria (Booster)
        else if(id == "223208303541354498"){
            message.reply("Your partner is Renamon. You're connected via your D-Power!")
        }
        else{
            message.reply("Your partner is " + this.getPartner(id) + ". You're connected via your " + this.getDigivice(id) + "!")
        }
    }
}