import { MessageEmbed } from "discord.js";
let cont = 1;
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(
      `Suzy ta devendo ${cont++} temakis 🍣 pra galera do discord 💖`
    )
    .setColor(0xff69b4);
  msg.channel.send(embed);
}
