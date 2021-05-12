import { MessageEmbed } from "discord.js";

const choices = ["pedra", "papel", "tesoura"];

export default function (msg) {
  let ebaChoice = choices[Math.floor(Math.random() * choices.length)];
  const embed = new MessageEmbed();
  let ebaText;

  let command = msg.content;
  switch (command) {
    case "!r":
      ebaText =
        ebaChoice == "pedra"
          ? `empate 🙄`
          : ebaChoice == "papel"
          ? "kkk ✨perdeu✨"
          : ebaChoice == "tesoura"
          ? "ta, ganhou :("
          : 0;
      break;
    case "!p":
      ebaText =
        ebaChoice == "papel"
          ? "empate 🙄"
          : ebaChoice == "tesoura"
          ? "kkk ✨perdeu✨"
          : ebaChoice == "pedra"
          ? "ta, ganhou :("
          : 0;
      break;
    case "!s":
      ebaText =
        ebaChoice == "tesoura"
          ? "empate 🙄"
          : ebaChoice == "pedra"
          ? "kkk ✨perdeu✨"
          : ebaChoice == "papel"
          ? "ta, ganhou :("
          : 0;
      break;

    default:
      ebaText = `Faz o comando certo, por favor, anjão. Mete um !eba ai`;
      break;
  }
  embed
    .setDescription(`Hmmmm.... ${ebaChoice}! \n\n${ebaText}`)
    .setColor(0xe1ad01);
  msg.channel.send(embed);
}
