
//Requires =========================================
require('dotenv').config();
const fs = require('fs');

const Discord = require('discord.js');

const auth = require('./auth.json');
//const commands = require('./commands.js');

//Here be globals ==================================
const client = new Discord.Client();
const commands = new Discord.Collection();

//Grab all the command file names and put them in a list.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//Run through the list and put each one's exports object into the list
for (file of commandFiles) {
	console.log(`Found file ${file}`);
	const command = require(`./commands/${file}`);
	console.log(`Requiring ${command.name}`);
	//Put each in the collection with the name property as its key so they can be directly addressed by name.
	commands.set(command.name, command);
}


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	console.log(msg.content);
	if (msg.content.startsWith(process.env.COMMAND_PREFIX)) {
		//commands[msg.content.slice(1, msg.content.length)](msg);
		//TODO: Actual error handling for nonexistant command names.
		//Get the command and call its execute method.
		console.log(msg.content.slice(process.env.COMMAND_PREFIX.length, msg.content.length));
		commands.get(msg.content.slice(process.env.COMMAND_PREFIX.length, msg.content.length)).execute(msg, null);
	}
	
});

client.login(auth.DISCORD_TOKEN);