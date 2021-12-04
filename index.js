const { Client, Collection } = require('discord.js'), client = new Client({ intents: 32767, allowedMentions: { repliedUser: false } }), utils = require('./data/utils');
client.commands = new Collection(); client.aliases = new Collection();  client.utils = new utils(); client.start = Date.now();
client.login(client.utils.secrets.token);
require('./data/handlers/commands')(client); require('./data/handlers/events')(client);