import { MessageEmbed } from "discord.js";
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(`Ta na hora de dormir, lindo 😴`)
    .setColor(0x66a103);
  msg.channel.send(embed);
}
