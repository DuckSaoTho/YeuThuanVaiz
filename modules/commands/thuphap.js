module.exports.config = {

 name: "thuphap",

 version: "1.0.0",

 hasPermssion: 0,

 credits: "D-jukie, DuyVuong, ChinhLe",

 description: "Canvas thoi ma?",

 commandCategory: "image",

 usages: "[0 -> 3] | [ 1 -> 3 ] | [Text] | [Text 2]",

 cooldowns: 5

};

module.exports.run = async ({ event, api, args }) => {

    if (this.config.credits != 'D-jukie, DuyVuong, ChinhLe') return;

    let { senderID, threadID, messageID } = event;

    const { loadImage, createCanvas } = require("canvas");

    const request = require("request");

    const fs = require("fs-extra");

    const axios = require("axios");

    let pathImg = __dirname + `/cache/${senderID+20}.png`;

    let pathAva = __dirname + `/cache/${senderID+30}.png`;

    let pathLine = __dirname + `/cache/${senderID+40}.png`;

}