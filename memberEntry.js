module.exports = {
    getDigivice: function() {
        digivices = ["Digivice", "D-3", "D-Power", "D-Tector", "Data Link", "Fusion Loader", "App Drive"]
        index = Math.floor(Math.random() * 7)
        return digivices[index]
    },
    
    getPartner: function(){
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
        "Falcomon (Data Squad)"]
        index = Math.floor(Math.random() * partners.length)
        return partners[index]
    }
}