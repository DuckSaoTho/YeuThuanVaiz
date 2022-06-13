module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dev",
  description: "chào",
  commandCategory: "chào",
  usages: "hello",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};


module.exports.run = async function ({api,event,Users}) {
  let botID = api.getCurrentUserID();
  let { senderID } = event;
  let name = await Users.getNameUser(event.senderID);
  let botname = await Users.getNameUser(botID)
  return api.sendMessage({
    body: `Xin chào ${name}, tôi là ${botname}`,
    mentions: [
      {
        tag: name,
        id: event.senderID
        },
      {
        tag: botname,
        id: botID
    }
     ],
    attachment : [
      require("fs").createReadStream(__dirname + "/cache/hello.gif")
    ]
  }, event.threadID, event.messageID);
}