const { Client, Message } = require("discord.js") ;
const { path } = require("dotenv/lib/env-options");
require("dotenv").config({
    path: (__dirname, '.env')
});
const TOKEN = process.env.TOKEN;
const client = new Client({intents: ['MessageContent', 'GuildMembers', 'Guilds']}
)

client.on('ready', () => {
    console.log('Qapy.pl Bot is ready.')
    client.user.setActivity('mc.qapy.pl')
});

client.login(TOKEN);