import { MessageEmbed } from "discord.js";
import count from "./counter/count.js";

export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(
      `Suzy ta devendo ${count(
        "countSuzo"
      )} temakis 🍣 pra galera do discord 💖`
    )
    .setColor(0xb90e0a);
  msg.channel.send(embed);
}
