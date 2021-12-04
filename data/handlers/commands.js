const { readdirSync, readdir } = require('fs');

module.exports = (client) => {
    readdirSync('./commands').forEach((dir) => {
        readdir(`./commands/${dir}`, (e) => {
            if (e) throw new Error(e);
            readdirSync(`./commands/${dir}`).filter((f) => f.endsWith('.js')).forEach((command) => {
                const req = require(`../../commands/${dir}/${command}`);
                const cmd = new req(client);
                if (cmd.name && typeof cmd.name == 'string') client.commands.set(cmd.name.toLowerCase(), cmd);
                if (cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach((alias) => client.aliases.set(alias, cmd.name.toLowerCase()));
            });
        });
    });
};