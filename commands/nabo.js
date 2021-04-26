import { MessageEmbed } from "discord.js";
import count from "./counter/count.js";

export default async function (msg) {
  let info = count("countNabo", msg);
  let contNab = info.i;
  let localNabs = info.nabs;
  try {
    const embed = new MessageEmbed()
      .setDescription(
        `✨ Hello diretamente do maior grupo de nabofóbicos do Brazel! ✨ 
       Atualmente ${contNab} membros 🎉`
      )
      .addFields({
        name: "Membros: ",
        value: localNabs.map((e) => e[1]),
        inline: true,
      })
      .setColor(0xfbfbf8);
    msg.channel.send(embed);
  } catch (err) {
    console.error("Can't log message");
  }
}
