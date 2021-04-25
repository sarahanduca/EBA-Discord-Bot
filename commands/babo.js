import { MessageEmbed } from "discord.js";
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(`CADÊ A BABOLIVE 🎥`)
    .setColor(0x00ffff);
  msg.channel.send(embed);
}
