module.exports = {
	name: "shutdown",
	description: "Calls the exit() function on process, which closes Node.  Gonna figure out how to get this to send a message in chat first sooner or later.",
	execute: function(msg, args) {
		msg.channel.send("Shutting down.");
		process.exit();
	}
}