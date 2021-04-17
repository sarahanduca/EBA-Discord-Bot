import { MessageEmbed } from "discord.js";
let url = "https://www.wattpad.com/story/266206201-livro-sem-nome";
export default function (msg) {
  const embed = new MessageEmbed()
    .setDescription(`Lê o livrinho da Bea 💖 \n${url}`)
    .setColor(0xff69b4);
  msg.channel.send(embed);
}
