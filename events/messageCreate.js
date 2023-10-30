const { Events } = require('discord.js');
const { prefix } = require('../config.json');
const sync = require('../synccommands');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
		if (message.content.startsWith(prefix)) {
			msg = message.content.split(prefix);
			if (msg[1] === "sync") {
				if (message.author.id === "396723826232262656") {
					message.channel.sendTyping();
					sync.sync();
					return message.reply({ content: "Slash commands have been synced!" });
				} else {
					return message.reply({ content: "You don't have the permissions to run this command!" });
				}
			}
		}
	},
};