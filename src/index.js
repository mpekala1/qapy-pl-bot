import { Client, Message } from 'discord.js';
import { RegisterCommands } from './commands.js'
import { TOKEN } from './dotenv.js';
const client = new Client({intents: ['MessageContent', 'GuildMembers', 'Guilds']}
)

client.on('ready', () => {
    console.log('BOT QAPY.PL ZOSTAŁ URUCHOMIONY!')
    client.user.setActivity('QAPY.PL')
});

client.on('interactionCreate', (interaction) => {

    if(!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }

});

client.login(TOKEN);

RegisterCommands();