const cmds = require('../../data/structures/commands');

module.exports = class cmd extends cmds {
    constructor() {
        super({
            name: 'ping',
            aliases: ['latency'],
            description: 'My ping',
            category: 'info',
            cooldown: 5000,
        });
    };
    run = async(client, message, args) => {
        message.reply({
            embeds: [{
                description: `${client.ws.ping}ms`, color: client.utils.colors.primary,
            }],
        });
    };
};