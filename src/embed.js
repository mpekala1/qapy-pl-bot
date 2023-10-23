import { EmbedBuilder } from "discord.js";

export const color = {
    blue: 0x0099FF,
    purple: 0x8500eb,
    red: 0xdb0909,
}

export function CreateEmbedMessage(title, message, color){
    return new EmbedBuilder()
    .setColor(color)
    .setTitle('Ogłoszenie')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
        { name: title, value: message },
    )
    .setTimestamp()
    .setFooter({ text: 'ip: mc.qapy.pl', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
}