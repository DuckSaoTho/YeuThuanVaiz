const fs = require("fs");
module.exports.config = {
name: "ngu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung",
    description: "Như Lời Chủ Tao Nói =))",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần chat ngu",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
        var msg = {
                body: "Như lời chủ tao nói: ",
                attachment: fs.createReadStream(__dirname + `/noprefix/nguthichet.PNG`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}

