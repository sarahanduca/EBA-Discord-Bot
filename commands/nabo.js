import { MessageEmbed } from "discord.js";
import count from "./counter/count.js";
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(
      `✨ Hello diretamente do maior grupo de nabofóbicos do Brazel! ✨ \nAtualmente ${count(
        "countNabo"
      )} membros 🎉`
    )
    .setColor(0xfbfbf8);
  msg.channel.send(embed);
}
