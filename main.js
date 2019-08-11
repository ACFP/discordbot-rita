const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = process.env.token;

client.on("ready", () => {
  console.log("Bot foi iniciado.")
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if (comando === "meme") {
    return await message.channel.send('r')
  }
});

client.login(token);