const https = require('https');

exports.shutdown = function(msg) {
	msg.channel.send("Shutting down.");
	process.exit();
}

exports.ping = function (msg) {
	msg.reply('pong');
}

exports.inspire = function (msg) {
	var imageurl = "Placeholder."
	
	const options = {
		hostname: "inspirobot.me",
		port: 443,
		path: "/api?generate=true",
		method: "GET"
	}

	const req = https.request(options, res => {
		//console.log("recieved response.")
		console.log('statusCode:', res.statusCode);
		console.log('headers:', res.headers);
		
		res.on('data', (d) => {
			console.log("Data: ")
			process.stdout.write(d);
			imageurl = d;
			console.log("Image URL inside:" + d);
			msg.channel.send(`${d}`);
		});
	});
	//console.log("Image URL outside:" + imageurl);
	
	req.on('error', (e) => {
		console.error(e);
	});
	req.end();
	
}