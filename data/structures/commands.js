module.exports = class cmds {
    constructor(options) {
        this.name = options.name || null;
        this.aliases = options.aliases || [];
        this.description = options.description || 'unknwon';
        this.usage = options.usage || null;
        this.cooldown = options.cooldown || 0;
        this.category = options.category || '';
        this.devOnly = options.devOnly || false;
        this.botPerms = options.botPerms || [];
        this.userPerms = options.userPerms || [];
        this.guildOnly = options.guildOnly || false;
    };
    async run(client, message, args) {
        try {
            this.run(client, message, args);
        }
        catch(e) {
            throw e;
        };
    };
};