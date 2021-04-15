import { MessageEmbed } from "discord.js";
let cont = 1;
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(
      `Mork 🙄 foi votado pro paredão ${cont++} vezes 🎉 (sai logo plmd)`
    )
    .setColor(0xff781f);
  msg.channel.send(embed);
}
