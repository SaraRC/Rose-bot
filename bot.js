//Run dotenv

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const auth = require('auth.json');

const commands = require('./commands.js');


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content.startsWith(process.env.COMMAND_PREFIX)) {
		commands[msg.content.slice(1, msg.content.length)](msg);
	}
	
});

client.login(auth.DISCORD_TOKEN);