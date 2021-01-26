module.exports = {
	name: "ping",
	description: "Exactly what it says on the tin.",
	execute: function (msg, args) {
		msg.reply('pong');
	}
}