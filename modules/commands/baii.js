 const fs = require("fs");
module.exports.config = {
name: "Bai",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MinhVi",
  description: "bai",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Bai")==0 || (event.body.indexOf("Baii")==0)) {
    var msg = {
        body: "See you again <3",
        attachment: fs.createReadStream(__dirname + `/noprefix/baii.gif`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}