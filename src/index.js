import { Client, Message } from 'discord.js';
import { RegisterCommands } from './commands.js'
import { CreateEmbedMessage } from './embed.js';
import { TOKEN } from './dotenv.js';
import { color } from './embed.js';
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
    if (interaction.commandName === 'ogloszenie') {
        console.log(interaction.options.getString('text'));
        let title = interaction.options.getString('text')
        let message = interaction.options.getString('text2')
        let embed = CreateEmbedMessage(title, message, color.purple)


interaction.reply({ embeds: [embed] });
    }


});

client.login(TOKEN);

RegisterCommands();