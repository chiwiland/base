const events = require('../../data/structures/events');
const { Client, Message } = require('discord.js');
var prefix = '!';

module.exports = class event extends events {
    constructor(...args) {
        super(...args);
    };
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @returns 
     */
    run = async (client, message) => {
        if (!message.guild || message.author.bot || !message.content || !message.content.toLowerCase().startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd =
            client.commands.get(command) ||
            client.commands.get(client.aliases.get(command));
        if (!cmd) return;
        if (cmd.devOnly == true && !client.utils.devs.includes(message.author.id)) return;
        cmd.run(client, message, args);
    };
};