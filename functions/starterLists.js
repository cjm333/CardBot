module.exports = {

    print: function(message){
        if(message.content.startsWith("!starterRed")){this.red(message);}
        else if(message.content.startsWith("!starterBlue")){this.blue(message);}
        else if(message.content.startsWith("!starterYellow")){this.yellow(message);}
        else if(message.content.startsWith("!starterGreen")){this.green(message);}
        else if(message.content.startsWith("!starterBlack")){this.black(message);}
        else if(message.content.startsWith("!starterPurple")){this.purple(message);}
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
}