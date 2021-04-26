import { MessageEmbed } from "discord.js";
import count from "./counter/count.js";
import nabs from "./counter/nabofobicos.js";

const nabofobicos = { nabs };
export default async function (msg) {
  let localNabs = await nabofobicos.nabs(msg);
  try {
    const embed = new MessageEmbed()
      .setDescription(
        `✨ Hello diretamente do maior grupo de nabofóbicos do Brazel! ✨ \nAtualmente 
       ${count("countNabo")} membros 🎉`
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
