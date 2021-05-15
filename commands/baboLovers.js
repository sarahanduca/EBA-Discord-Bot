import { MessageEmbed } from "discord.js";

class Babolover {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }
  getcolor() {
    return this.color;
  }
  getText() {
    return this.text;
  }
}
const url = "https://www.wattpad.com/story/266206201-livro-sem-nome";
const bea = new Babolover(0xff69b4, `Lê o livrinho da Bea 💖 \n${url}`);
const babo = new Babolover(0x00ffff, `CADÊ A BABOLIVE 🎥`);
const ocean = new Babolover(0x10a5f5, `Cadê meu bolinho? 🍰`);
const jaca = new Babolover(0x66a103, `Ta na hora de dormir, lindo 😴`);

export default function (msg) {
  const keyWord = msg.content.split("");
  let embedMsgText;
  let embedMsgColor;

  keyWord.shift();

  switch (keyWord.join("")) {
    case "babo":
      embedMsgText = babo.getText();
      embedMsgColor = babo.getcolor();
      break;
    case "bea":
      embedMsgText = bea.getText();
      embedMsgColor = bea.getcolor();
      break;
    case "ocean":
      embedMsgText = ocean.getText();
      embedMsgColor = ocean.getcolor();
      break;
    case "jaca":
      embedMsgText = jaca.getText();
      embedMsgColor = jaca.getcolor();
      break;
    default:
      console.log("Not a valid keyWord");
      break;
  }
  const embed = new MessageEmbed()
    .setDescription(embedMsgText)
    .setColor(embedMsgColor);
  msg.channel.send(embed);
}
