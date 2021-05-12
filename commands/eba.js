import { MessageEmbed } from "discord.js";
let cont = 1;
export default function (msg) {
  const embed = new MessageEmbed()
    .setTitle(`🐿️ Esquilo Bot Application 🐿️`)
    .setColor(0xfcd12a)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/832025286336970807/832341214958845982/download20210301224411.png"
    )
    .setDescription("✨ comandinhos ✨")
    .addFields(
      {
        name: "!gif [qualquer coisa]",
        value: "um gifzinho pra você",
        inline: true,
      },
      { name: "!suzo", value: "Quer um temaki? 🍣", inline: true },
      { name: "\u200B", value: "\u200B" },
      { name: "!mork", value: "Bota o Mork no paredão, meo ❤️", inline: true },
      {
        name: "!nabo",
        value: "Entre para o grupo de nabofóbicos 😗✌️",
        inline: true,
      },
      { name: "\u200B", value: "\u200B" },
      { name: "!ocean", value: "Chama lá 🌊", inline: true },
      {
        name: "!jaca",
        value: "Que horas são? ⏰",
        inline: true,
      },
      { name: "\u200B", value: "\u200B" },
      {
        name: "!bea",
        value: "Escritora oficial da babo community📚",
        inline: true,
      },
      { name: "!babo", value: "hmmm", inline: true },

      {
        name: "bora",
        value: "Então bora. Escolhe ai: \nPedra [!r]\nPapel [!p]\nTesoura [!s]",
        inline: true,
      }
    );

  msg.channel.send(embed);
}
