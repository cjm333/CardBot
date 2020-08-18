// Import discord.js
const Discord = require("discord.js");

// Create new client
const client = new Discord.Client();
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", message =>{

    if (message.content.startsWith("!card")){
        const args = message.content.slice(5).trim().replace(/\s/g, "-").replace(/'/g, "");
        const cardName = args.toLowerCase();
        const command = "https://argentsaga.com/product/" + cardName + "/"
        message.reply(command);
    }
});

// Log in the bot with the token
client.login("NzQ1MjU2NzY4MDg2NDc0Nzcy.XzvIcw.-dLE0j__eOH2Cib481pYdE_nmcE");