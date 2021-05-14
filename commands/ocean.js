import { MessageEmbed } from "discord.js";
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(`Cadê meu bolinho? 🍰`)
    .setColor(0x10a5f5);
  msg.channel.send(embed);
}
