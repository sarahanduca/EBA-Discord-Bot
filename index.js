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

// client.on("message", (msg) => {});

// client.on("message", (msg) => {});

// client.on("message", (msg) => {
//   if (msg.content === "banoite meo") {
//     msg.content.reply(
//       "Boa noitinha meo\ndorme bem tlg\n🦦(era uma otter)\n sorvete"
//     );
//   }
// });
