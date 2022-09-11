const https = require('https');

module.exports = {
	name: "inspire",
	
	description: "Gets a URL to a  single image from the Inspirobot API and posts the link to chat.",
	
	execute: function (msg, args) {
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
				console.log("Image URL at: " + d);
				msg.channel.send(`${d}`);
		});	
		});	
		//console.log("Image URL outside:" + imageurl);
		
		req.on('error', (e) => {
			console.error(e);
		});	
	req	.end();
		
		}
}