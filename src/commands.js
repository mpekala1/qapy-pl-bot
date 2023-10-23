import { REST, Routes } from 'discord.js';
import { TOKEN, CLIENT_ID } from './dotenv.js';
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'say',
    description: 'Repeat yourself!',
    options:[
      {name: 'text',
      description: 'Text...',
      type: 3,
      required: true,
     },
     {name: 'text2',
     description: 'Text...',
     type: 3,
     required: true,
    }
    ]},
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

export async function RegisterCommands(){
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
}
