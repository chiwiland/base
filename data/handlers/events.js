const { readdirSync } = require('fs');

module.exports = (client) => {
    readdirSync('./events/bot').filter((f) => f.endsWith('.js')).forEach((c) => {
        const file = require(`../../events/bot/${c}`);
        const event = new file(file, client);
        client.on(c.replace('.js', ''), (...args) => event.run(client, ...args));
    });
};