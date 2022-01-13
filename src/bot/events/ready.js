const { Client } = require('discord.js');
const { Listener } = require('gcommands');

new class Ready extends Listener {
    constructor() {
        super({
            name: 'ready',
            event: 'ready',
            once: true
        });
    }

    /**
     * @param {Client} client 
     */
    run(client) {
        let users = 0;
        for (let guild of [...client.guilds.cache.values()]) users += guild.memberCount;

        console.log([
            `${client.user.tag} is ready!`,
            ``,
            `Servers: ${client.guilds.cache.size}`,
            `Users: ${users}`,
        ].join('\n'));

        client.user.setPresence({
            status: 'online',
            activities: [
                {
                    name: 'Message me for help!',
                    type: 'PLAYING'
                }
            ]
        })
    }
}
