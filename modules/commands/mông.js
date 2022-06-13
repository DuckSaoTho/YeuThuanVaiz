 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "mông",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Mông Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Random-img",
  usages: "mông",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/Buycmz8.jpg","https://i.imgur.com/JAkbEnd.jpg","https://i.imgur.com/FuVD9pd.jpg","https://i.imgur.com/bmgOWXG.jpg","https://i.imgur.com/tdYCoBg.jpg","https://i.imgur.com/nEOJix7.jpg","https://i.imgur.com/cqDZmrH.jpg","https://i.imgur.com/8owPKx7.jpg","https://i.imgur.com/I4tOtx3.jpg","https://i.imgur.com/lHMZotC.jpg","https://i.imgur.com/nu9qlFy.jpg","https://i.imgur.com/fQcDovZ.jpg","https://i.imgur.com/9d1xH8V.jpg","https://i.imgur.com/OvKoZA7.jpg","https://i.imgur.com/giPzZfr.jpg","https://i.imgur.com/TZfxhxm.jpg","https://i.imgur.com/1zXklru.jpg","https://i.imgur.com/qSNGjYR.jpg","https://i.imgur.com/9tN5dw3.jpg","https://i.imgur.com/p7zKYRA.jpg","https://i.imgur.com/c3WfCfm.jpg","https://i.imgur.com/zCrkE0R.jpg","https://i.imgur.com/pBZpGCB.jpg","https://i.imgur.com/73w9yRW.jpg","https://i.imgur.com/ulCDTEP.jpg","https://i.imgur.com/EMXxk1i.jpg","https://i.imgur.com/LX3UIkU.jpg","https://i.imgur.com/6rmXty4.jpg","https://i.imgur.com/TRzGxW2.jpg","https://i.imgur.com/KpWJCiz.jpg","https://i.imgur.com/0fWZo7C.jpg","https://i.imgur.com/PWWx4P8.jpg","https://i.imgur.com/Ap2LCVJ.jpg","https://i.imgur.com/D5aGEBO.jpg","https://i.imgur.com/nVZj3SX.jpg","https://i.imgur.com/5iNCQQS.jpg","https://i.imgur.com/V2bCWu4.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("Bạn cần 5000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})
   var callback = () => api.sendMessage({body:`Bổ mắt nhé😼\n» Số dư: -5000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};