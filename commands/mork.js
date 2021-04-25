import { MessageEmbed } from "discord.js";
import count from "./counter/count.js";

export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(
      `Mork 🙄 foi votado pro paredão ${count(
        "countMork"
      )} vezes 🎉 (sai logo plmd)`
    )
    .setColor(0x6441a5);
  msg.channel.send(embed);
}
