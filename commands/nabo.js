import { MessageEmbed } from "discord.js";
let cont = 1;
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(
      `✨ Hello diretamente do maior grupo de nabofóbicos do Brazel! ✨ \nAtualmente ${cont++} membros 🎉`
    )
    .setColor(0xfbfbf8);
  msg.channel.send(embed);
}
