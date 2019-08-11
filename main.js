const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = process.env.token;
const fs = require("fs");
const readline = require("readline");

var result;

client.on("ready", () => {
  console.log("Bot online.")
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  
  const prefixes = [config.prefix[0], config.prefix[1], config.prefix[2], config.prefix[3]];
  let prefix = false;
  for (const thisPrefix of prefixes) {
    if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if (!prefix) return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let comando = cmd.slice(prefix.length).toLowerCase();


  if (comando === "meme") {
    var data;
    fs.readFile('./meme.txt', 'utf8', function (err, rawData) {
      if (err) return console.log(err);
      data = rawData.split('\n');
      
      function randomInt(l, h) {
        return Math.floor(Math.random() * (h - l) + l);
      }

      resultChange(data[randomInt(0, data.length)]);
    });

    async function resultChange(input) {
      result = input
      const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setImage(result)
      return await message.channel.send(embed);
    }
  }

  if (comando === "snc") {
    var data;
    fs.readFile('./snc.txt', 'utf8', function (err, rawData) {
      if (err) return console.log(err);
      data = rawData.split('\n');
      
      function randomInt(l, h) {
        return Math.floor(Math.random() * (h - l) + l);
      }

      resultChange(data[randomInt(0, data.length)]);
    });

    async function resultChange(input) {
      result = input
      const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setImage(result)
      return await message.channel.send(embed);
    }
  }

  if (comando === "ben") {
    var data;
    fs.readFile('./ben.txt', 'utf8', function (err, rawData) {
      if (err) return console.log(err);
      data = rawData.split('\n');
      
      function randomInt(l, h) {
        return Math.floor(Math.random() * (h - l) + l);
      }

      resultChange(data[randomInt(0, data.length)]);
    });

    async function resultChange(input) {
      result = input
      return await message.channel.send(result);
    }
  }

  if (comando == "phypo") {
    var data;
    fs.readFile('./phypo.txt', 'utf8', function (err, rawData) {
      if (err) return console.log(err);
      data = rawData.split('\n');
      
      function randomInt(l, h) {
        return Math.floor(Math.random() * (h - l) + l);
      }

      resultChange(data[randomInt(0, data.length)]);
    });

    async function resultChange(input) {
      result = input
      return await message.channel.send(result);
    }
  }
});

client.login(token);
