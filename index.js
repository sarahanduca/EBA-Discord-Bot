import Discord from "discord.js";
import dotenv from "dotenv";
import gotMessage from "./commands.js";

dotenv.config();

const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on("ready", () => {
  console.log("<3");
});

client.on("message", gotMessage);
