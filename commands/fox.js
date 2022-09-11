const https = require('https');
const { syncBuiltinESMExports } = require('module');
const fs = require('fs').promises;
//const Discord = require('discord.js');

module.exports = {
	name: "fox",
	
	description: "Gets a URL to a single fox image from the tinyfox.dev API and posts the link to chat.",
	
	execute: function (msg, args) {
		var imageurl = "Placeholder."
		
		const options = {
			hostname: "api.tinyfox.dev",
			port: 443,
			path: "/img?animal=fox",
			method: "GET"
		}
	
		const req = https.request(options, res => {
			//console.log("recieved response.")
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);

			imgurl = "https://api.tinyfox.dev/" + res.headers['content-disposition'].slice(21, -1);
			console.log("Image URL at: " + imgurl);
			msg.channel.send(`${imgurl}`);

			res.on('data', (d) => {
				/*try {
					fs.appendFile('img.jpg', imgdata); 
				} catch (error) {
					console.log(error);
				}*/
		});	
		});	
		//console.log("Image URL outside:" + imageurl);
		
		req.on('error', (e) => {
			console.error(e);
		});	
		req	.end();

		msg.channel.send({ files: [{ attachment: 'img.jpg' }] });

		}
}