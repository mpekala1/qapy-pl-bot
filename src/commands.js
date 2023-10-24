import { REST, Routes } from 'discord.js';
import { TOKEN, CLIENT_ID } from './dotenv.js';
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'ogloszenie',
    description: 'Repeat yourself!',
    options:[
      {name: 'title',
      description: 'Wprowadź tytuł ogłoszenia...',
      type: 3,
      required: true,
     },
     {name: 'content',
     description: 'Wprowadź treść ogłoszenia...',
     type: 3,
     required: true,
    }
    ],
    choices: [
      {
        name: "Dog",
        "value": "animal_dog"
    },
    {
        name: "Cat",
        "value": "animal_cat"
    },
    {
        name: "Penguin",
        "value": "animal_penguin"
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
