import { MessageEmbed } from "discord.js";
export default function (msg) {
  const embed = new MessageEmbed().setDescription(`BBB? 👀`).setColor(0x10a5f5);
  msg.channel.send(embed);
}
