module.exports.config = {
	name: "ping",
	version: "1.0.5",
	hasPermssion: 1,
	credits: "Mirai Team (modAnhoàng)",
	description: "tag toàn bộ thành viên",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 1
};

module.exports.run = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		var listAFK, listUserID;
		global.moduleData["afk"] && global.moduleData["afk"].afkList ? listAFK = Object.keys(global.moduleData["afk"].afkList || []) : listAFK = []; 
		listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		listUserID = listUserID.filter(item => !listAFK.includes(item));
		var job = ['I am Anh🥀 ','Dcm ngủ ít thôi🔥🔥', 'Dậy tương tác mẹ m🐣🐣ày đi', 'ò ó o ò o', 'người yêu mày đi theo trai kìa ', 'Gọi Cứu Hỏa Đê😂😂', 'cháy nhà rồi!'];
		var body = (args.length != 0) ? args.join(" ") : `${job[Math.floor(Math.random() * job.length)]}`, mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}