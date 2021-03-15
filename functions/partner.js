module.exports = {
    getDigivice: function(id) {
        returnable = "";
        digivices = ["Digivice 01", "D-Cyber", "Digivice", "D-3", "D-Power", "Data Link", "Fusion Loader", "Digivice:", "Smartphone Digivice"]
        switch(id){
            case "410833999129214976": //Majora
                returnable = "D-Ark";
                break;
            case "237764316416180224": //Saac
                returnable = "Digivice";
                break;
            case "269674566408732672": //jwhorth or Joseph
                returnable = "D-3";
                break;
            case "121792981362671618": //JeremyNZ
                returnable = "Digivice";
                break;
            case "202786736009379840": //Kaiiiser/Temperance
                returnable = "Digivice 01";
                break;
            case "633478293319843871": //Benjamin
                returnable = "Smartphone Digivice";
                break;
            case "243339038361255937": //Nahjd
                returnable = "D-3";
                break;
            case "323661590673096705": //Numewife
                returnable = "D-Tector";
                break;
            case "238058299608530955": //Lugos
                returnable = "D-Power";
                break;
            case "239544831305580546": //Raspberry
                returnable = "Digivice";
                break;
            case "256044639335874560": //Bryansempai
                returnable = "Digivice";
                break;
            default:
                index = id%digivices.length;
                returnable = digivices[index];
        }
        return returnable;
    },

    getPartner: function(id){
        returnable = ""; //159
        partners = ["Agumon", "Gabumon", "Gomamon", "Tentomon", "Palmon", "Biyomon", "Patamon", "Salamon", "Betamon", 
        "Guilmon", "Renamon", "Gatomon", "Lopmon", "Terriermon", "Gotsumon", "Kokuwamon", "DemiDevimon", "Monodramon", 
        "FanBeemon", "Guardromon", "MarineAngemon", "Impmon", "Hagurumon", "Shoutmon", "Gumdramon", "Neemon", "Bearmon",
        "Tapirmon", "Veemon", "Hawkmon", "Armadillomon", "Wormmon", "Meicoomon", "Calumon", "Leomon", 
        "Kokomon", "Crabmon", "Airdramon", "Flarerizamon", "Centarumon", "Frigimon", "Tortomon", "Floramon", "Gizamon",
        "Elecmon", "Syakomon", "Apemon", "Kuwagamon", "Snimon", "Unimon", "Gorillamon", "Locomon", "Mervamon", "Opossummon", 
        "Hackmon", "Cyberdramon", "Gaomon", "Lalamon", "Falcomon", "Kudamon", "PawnChessmon (Black)", "PawnChessmon (White)",
        "Pipimon", "BanchoLeomon", "Zeromaru", "Dorumon", "Argomon", "Keramon", "Kunemon", "Labramon", 
        "BlackAgumon", "ToyAgumon", "Bokomon", "Monmon", "Morphomon", "BlackGabumon", "Muchomon", "Otamamon", "Penguinmon",
        "DemiMeramon", "Phascomon", "Dracmon", "Dracomon", "Psychemon", "Burgermon", "Goblimon", "Gazimon", "Solarmon",
        "SnowAgumon", "Tinkermon", "Vorvomon", "Kamemon", "Lucemon", "Jazamon", "Zubamon", "Chuumon", "Lunamon", "Coronamon", 
        "Ballistamon", "Dorulumon", "Damemon", "Cutemon", "Chibitortomon", "Starmon and several Pickmons", "Candlemon", 
        "Dondokomon", "Sparrowmon", "Monitamon", "Dobermon", "Seasarmon", "Gaossmon", "MailBirdramon", "Greymon (Fusion)",
        "Falcomon (Data Squad)", "Agumon X", "Betamon X", "Kokuwamon X", "Kotemon", "Kudamon (Data Squad)", "Aruraumon",
        "Liollmon", "Lopmon X", "Terriermon X", "BlackAgumon X", "Ludomon", "BlackGuilmon", "ModokiBetamon", "Crabmon X",
        "Commandramon", "Otamamon (Red)", "Otamamon X", "Palmon X", "Dracomon X", "Ryudamon", "Renamon X", "Salamon X",
        "Sangomon", "ShadowToyAgumon", "Shamanmon", "Gabumon X", "Sistermon Blanc", "SnowGoblimon", "Gazimon X", "Ghostmon",
        "Spadamon", "Gizumon", "Syakomon X", "Gomamon X", "Gotsumon X", "Guilmon X", "Professor Agumon", "Terriermon Assistant",
        "Hagurumon X", "Herissmon", "Hyokomon", "Vemmon", "Vi-Elecmon", "Impmon X", "Keramon X"]
        switch(id){
            case "410833999129214976": //Majora
                returnable = "SnowAgumon";
                break;
            case "237764316416180224": //Saac
                returnable = "<:terriersip:720917483070160898> & <:lopcoke:774064395893735464>";
                break;
            case "269674566408732672": //jwhorth or joseph
                returnable = "ZeedMillenniummon";
                break;
            case "121792981362671618": //JeremyNZ
                returnable = "Gaomon";
                break;
            case "202786736009379840": //Kaiiiser/Temperance
                returnable = "Hackmon";
                break;
            case "633478293319843871": //Benjamin
                returnable = "Agumon";
                break;
            case "243339038361255937": //Nahjd
                returnable = "Solarmon";
                break;
            case "323661590673096705": //Numewife
                returnable = "Terriermon";
                break;
            case "238058299608530955": //Lugos
                returnable = "Terriermon";
                break;
            case "239544831305580546": //Raspberry
                returnable = "Hackmon";
                break;
            case "256044639335874560": //Bryansempai
                returnable = "Lucemon";
                break;
            default:
                index = id%partners.length;
                returnable = partners[index];
        }
        return returnable;
    },
    
    partner: function(message, partnerJSON, tracking, Discord){
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
                    grab = searchable;
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

            if(elitePartner.includes("&")){message.reply("Your partnered to " + elitePartner + ". You're connected via your " + grab.digivice + "!");}
            else{
                customImage = false;
                partnerEmbed = new Discord.MessageEmbed();
                partnerEmbed.setDescription("You're partnered to " + elitePartner + ". You're connected via your " + grab.digivice + "!");
                if(elitePartner == "Wendigomon"){elitePartner = "Wendimon"}
                else if(elitePartner == "Moon=Millenniummon"){elitePartner = "moonmillenniumon";}
                else if(elitePartner == "Rapidmon (Armor)"){elitePartner = "rapidmon_gold";}
                else if(elitePartner == "Cherubimon (Vice)"){elitePartner = "cherubimon-vice";}
                else if(elitePartner == "Cherubimon (Virtue)"){elitePartner = "cherubimon";}
                else if(elitePartner == "Antylamon" || elitePartner == "Antylamon (Good)"){elitePartner = "andiramon_2";}
                else if(elitePartner == "Algomon Seedform"){elitePartner = "algomon_lv1";}
                else if(elitePartner == "Algomon Succform"){elitePartner = "algomon_lv2";}
                else if(elitePartner == "Algomon Sockem Bopper Form"){elitePartner = "algomon_lv3";}
                else if(elitePartner == "Algomon Tickle Hands Form"){elitePartner = "algomon_lv4";}
                else if(elitePartner == "Algomon Come Get Some Form"){elitePartner = "algomon";}
                else if(elitePartner == "Algomon OTK Form"){elitePartner = "algomon-ultimate";}
                else if(elitePartner == "WereGarurumon (Black)"){elitePartner = "weregarurumon_black";}
                else if(elitePartner == "WereGarurumon (Black) Sagittarius Mode"){elitePartner = "waregarurumon_sagittarius";}
                else if(elitePartner == "Belphemon Sleep Mode"){elitePartner = "belphemonsleepmode";}
                else if(elitePartner == "Belphemon Rage Mode"){elitePartner = "belphemonragemode";}
                else if(elitePartner == "Tsunomon"){elitePartner = "tunomon";}
                else if(elitePartner == "RizeGreymon X"){elitePartner = "rizegreymon_x";}
                else if(elitePartner == "ShineGreymon Burst Mode"){elitePartner = "shinegreymonburstmode";}
                else if(elitePartner == "Agumon (Bond of Bravery)"){elitePartner = "agumon_kizuna";}
                else if(elitePartner == "Gargomon"){elitePartner = "galgomon";}
                else if(elitePartner == "Ogudomon X"){elitePartner = "ogudomon_x";}
                else if(elitePartner == "Diablomon X"){elitePartner = "diablomon_x";}
                else if(elitePartner == "OmniShoutmon"){elitePartner = "omegashoutmon";}
                else if(elitePartner == "Jesmon X"){elitePartner = "jesmon_x";}
                else if(elitePartner == "Jesmon GX"){elitePartner = "jesmongx";}
                else if(elitePartner == "BeelStarmon X"){elitePartner = "beelstarmon_x";}
                else if(elitePartner == "Sistermon Blanc"){elitePartner = "sistermonblanc";}
                else if(elitePartner == "Sistermon Noir"){elitePartner = "sistermonnoir";}
                else if(elitePartner == "DoruGreymon"){elitePartner = "doruguremon";}
                else if(elitePartner.includes("Millenniummon")){elitePartner = elitePartner.replace("Millenniummon", "Millenniumon");}
                else if(elitePartner.includes("Hackmon")){elitePartner = elitePartner.replace("Hackmon", "Huckmon");}
                else if(elitePartner == "an Egg" || elitePartner == "TerrierCrewsmon" || elitePartner == "ModokiBetamon" || elitePartner == "Sistermon Noir (Awakened)" || elitePartner == "GreatestCutemon"){customImage = true;}
                if(customImage){
                    //if(elitePartner == "TerrierCrewsmon"){partnerEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/crews.png");}
                    if(elitePartner == "an Egg"){partnerEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/egg.png");}
                    else if(elitePartner == "OmegaNumemon"){partnerEmbed.setImage("https://digimon-bucket.s3.amazonaws.com/OmegaNume.png");}
                    else if(elitePartner == "ModokiBetamon"){partnerEmbed.setImage("https://wikimon.net/images/3/3f/Modokibetamon.jpg");} 
                    else if(elitePartner == "Sistermon Noir (Awakened)"){partnerEmbed.setImage("https://wikimon.net/images/f/f0/Sistermon_noir_awaken.jpg");} 
                    else if(elitePartner == "GreatestCutemon"){partnerEmbed.setImage("https://wikimon.net/images/4/4b/Greatestcutemon.jpg");} 
 
                }
                else{
                    link = "https://digimon.net/cimages/digimon/" + elitePartner.toLowerCase() + ".jpg";
                    partnerEmbed.setImage(link);
                }
                //console.log("https://digimon.net/cimages/digimon/" + elitePartner.toLowerCase() + ".jpg")
                message.reply(partnerEmbed);
                elite = false;
            }
        }
        else{
            message.reply("Your partnered to " + this.getPartner(id) + ". You're connected via your " + this.getDigivice(id) + "!");
        }
    },

    partnerReturnable: function(message, partnerJSON, tracking){
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
                    grab = searchable;
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

            elite = false;
            return elitePartner;
        }
        else{
            return this.getPartner(id);
        }
    },
    
    digivolve: function(message, partners, tracking){
        id = message.author.id;
        current = 0;
        current2 = 0;
        grab = null;
        previous = null;
        next = null;
        flag = false;

        for(searchable of partners){
            if(id == searchable.id){
                grab = searchable
            }
        }

        if(grab == null){
            message.reply("Sorry, only a select few people have a bond strong enough to do that!")
        }
        else{
            for(searchable of tracking){
                if(id == searchable[0]){
                    if(searchable[1] < 6){
                        searchable[1] = searchable[1]+1;
                        current = searchable[1];
                    }
                    else if(searchable[1] == 6 && searchable[2]<grab.mega.length-1){
                        searchable[2] = searchable[2] + 1;
                        current2 = searchable[2];
                    }
                    else{
                        flag = true;
                    }
                }
            }
    
            if(flag){
                message.reply("You can't digivolve further!")
            }
            else{
                if(current == 2){
                    previous = grab.fresh;
                    next = grab.inTraining;
                }
                else if(current == 3){
                    previous = grab.inTraining;
                    next = grab.rookie;
                }
                else if(current == 4) {
                    previous = grab.rookie;
                    next = grab.champion;
                }
                else if(current == 5) {
                    previous = grab.champion;
                    next = grab.ultimate;
                }
                else if(current == 6 && current2 == 0) {
                    previous = grab.ultimate;
                    next = grab.mega[0];
                }
                else {
                    previous = grab.mega[current2-1];
                    next = grab.mega[current2];
                }
                message.reply(previous + " digivolve tooooooo...... " + next + "!!!")
            }
        }
    },
    
    dedigivolve: function(message, partners, tracking){
        id = message.author.id;
        current = 0;
        current2 = 0;
        grab = null;
        previous = null;
        next = null;
        flag = false;

        for(searchable of partners){
            if(id == searchable.id){
                grab = searchable
            }
        }

        if(grab == null){
            message.reply("Sorry, only a select few people have a bond strong enough to do that!")
        }
        else{
            for(searchable of tracking){
                if(id == searchable[0]){
                    if(searchable[2] > 0){
                        searchable[2] = searchable[2]-1
                        current2 = searchable[2]
                    }
                    else if(searchable[1] > 1){
                        searchable[1] = searchable[1]-1;
                        current = searchable[1];
                    }
                    else{
                        flag = true;
                    }
                }
            }
    
            if(flag){
                message.reply("You can't dedigivolve further!")
            }
            else{
                if(current == 1){
                    previous = grab.inTraining;
                    next = grab.fresh;
                }
                else if(current == 2){
                    previous = grab.rookie;
                    next = grab.inTraining;
                }
                else if(current == 3) {
                    previous = grab.champion;
                    next = grab.rookie;
                }
                else if(current == 4) {
                    previous = grab.ultimate;
                    next = grab.champion;
                }
                else if(current == 5) {
                    previous = grab.mega[0];
                    next = grab.ultimate;
                }
                else if(current == 6 && current2 == 0) {
                    previous = grab.mega[1];
                    next = grab.mega[0];
                }
                else {
                    previous = grab.mega[current2+1];
                    next = grab.mega[current2];
                }
                message.reply("Your " + previous + " dedigivolved to " + next + "!!!")
            }
        }
    },

    fight: function(message, partners, tracking){
        if(message.guild.id == 681578268729540663 && message.channel.id != 774517943831887892){
            return;
        }
        if(message.member.roles.cache.has('774145809280925736')){
            message.channel.send("Sorry lad, you'll get rocked if you try to fight without a partner")
            return;
        }

        id = message.author.id;
        const first = this.partnerReturnable(message, partners, tracking);
        const filter = m => m.content.includes('!accept');
        const collector = message.channel.createMessageCollector(filter, { time: 30000 });
        looking = true;

        message.channel.send("<@" + id + "> and " + first + " are looking for a battle! Reply with !accept to throwdown!");

        collector.on('collect', m => {
            if(looking){
                if(m.member.roles.cache.has('774145809280925736')){
                    message.channel.send("Sorry lad, you'll get rocked if you try to fight without a partner")
                }
                else if(m.content.startsWith('!accept') && m.author.id != message.author.id && m.guild.id == message.guild.id && m.channel.id == message.channel.id){
                    looking = false;
                    const second = this.partnerReturnable(m, partners, tracking)
                    message.channel.send("A challenger approaches...\n\n" + first.toUpperCase() + " VS. " + second.toUpperCase() + "! FIGHT!!!")
                    setTimeout(function() {this.fightMessage(message.channel, first, second)}.bind(this), 2000);
                    setTimeout(function() {this.fightMessage(message.channel, second, first)}.bind(this), 4000);
                    setTimeout(function() {this.fightMessage(message.channel, first, second)}.bind(this), 6000);
                    setTimeout(function() {this.fightMessage(message.channel, second, first)}.bind(this), 8000);
                    setTimeout(function() {this.fightDecision(message, m, first, second)}.bind(this), 10000)
                }
            }
        });

        collector.on('end', collected => {
            if(looking){
                message.channel.send(first + " received no challengers. They must all be cowards...");
            }
        });
    },

    fightMessage: function(channel, digimon, second){
        messages = [`${digimon} charges up its signature move!`,`${digimon} is quaking in fear!`,
                    `A swift dodge from ${digimon}!`,`${digimon} deals a glancing blow!`,
                    `${digimon} lands a devastating attack!`,`${digimon} is struggling to keep up!`,
                    `${digimon} is looking woozy!`,`${digimon}'s Tamer just punched ${second}! Is that even legal?!?!`,
                    `${digimon} is backed into a corner!`,`${digimon}'s Tamer throws it a Digishroom!`,
                    `${digimon} is... promoting digimoncard.dev?`, `${digimon} is sizing up ${second}!`,
                    `${digimon} looks intimidated!`, `${digimon} got bodyslammed! That's gotta hurt!!`,
                    `A quick right hook from ${digimon}! Brutal!`, `${digimon} used Quick Attack! It was super effective!`, 
                    `${digimon} grabs a chair from the audience. Somebody tell them this isn't the DigitalWorld Wrestling Entertainment!`,
                    `${digimon} uses Kaioken!?!`, `${digimon} uses Hadouken?!?`, `${digimon} executes a piledriver from the top of the cage!`,
                    `${digimon} bobs and weaves!`, `INCREDIBLE! ${digimon} pulled off the dreaded Thousand Years of Death!!!`,
                    `The crowd is chanting ${digimon}'s name!`, `${digimon} strikes with the legendary One Inch Punch!`,
                    `Are we sure ${digimon} isn't juicing?`, `${digimon} takes an uppercut right to the jaw!`,
                    `${digimon}'s Tamer throws it some DigiMeat! Wait don't we grow meat on farms? So are we all.... vegans?`,
                    `${digimon} goes all in with a roundhouse kick to the face!`, `Ouch! ${digimon} takes a flying kick full on!`]
        index = Math.floor(Math.random()*1000)%messages.length
        if(index == 42){
            channel.send(`${digimon} stops to think about the ethicality of fighting. Who gives us right to fight another creature? Is ${second}'s data not as \
important as my own? Who am I or my Tamer to decide which being gets digitized? Why are we fighting in the first place? Is it for fun, enjoyment, money?\
It seems like a pointless game that shall continue until the universe's reboot. For all we know, this could be a mere game to some higher beings. Perhaps \
in an online chatroom populated by strange weebs...`)
        }
        else{
            channel.send(messages[index])
        }
    },

    fightDecision: function(message, m, first, second){
        num = Math.floor(Math.random()*2);
        if(num == 1){
            message.channel.send(first + " knocks out " + second +  " for the win!!! Congratulations <@" + message.author.id + ">!")
        }
        else{
            message.channel.send(second + " knocks out " + first +  " for the win!!! Congratulations <@" + m.author.id + ">!")
        }
    }

}