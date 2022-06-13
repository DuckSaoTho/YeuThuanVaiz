module.exports.config = {
	name: "đào",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ezts",
	description: "Random ảnh mo^ng ¯\_(ツ)_/¯",
	commandCategory: "random-img",
	usages: "đào",
	cooldowns: 10
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.ditlolichapfbi.tk/image?type=mong&apikey=phongdeptraiprovip').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/huyền.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/huyền.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/huyền.${ext}`)).on("close", callback);
			})
}