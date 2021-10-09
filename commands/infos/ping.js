module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`<a:ping:894853932780761088> - Ping : **${client.ws.ping}ms** !<a:ping:894853932780761088>`);
    },
};