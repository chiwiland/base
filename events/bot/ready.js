const events = require('../../data/structures/events');

module.exports = class event extends events {
    constructor(...args) {
        super(...args);
    };
    run = async(client) => {
        var ms = Date.now() - client.start;
        console.log('Bot ready on ' + ms + 'ms.');
    };
};