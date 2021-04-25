import { MessageEmbed } from "discord.js";
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription("BBB <@227136527287844876> que horas, lindo?")
    .setColor(0x1520a6);
  msg.channel.send(embed);
}
