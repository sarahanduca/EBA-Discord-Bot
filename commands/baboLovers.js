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
const bea = new Babolover(0xff69b4, `LÃª o livrinho da Bea ð \n${url}`);
const babo = new Babolover(
  0x00ffff,
  `<@258634993549574144> CADÃ A BABOLIVE ð¥`
);
const ocean = new Babolover(0x10a5f5, `CadÃª meu bolinho? ð°`);
const jaca = new Babolover(0x66a103, `Ta na hora de dormir, lindo ð´`);
const sarah = new Babolover(0x98bf64, `Rummizada hoje? ð`);
const ke = new Babolover(0xfcd12a, `ðï¸ððï¸`);

export default function (msg, command) {
  let embedMsgText;
  let embedMsgColor;

  switch (command[0].substring(1)) {
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
    case "sarah":
      embedMsgText = sarah.getText();
      embedMsgColor = sarah.getcolor();
      break;
    case "ke":
      embedMsgText = ke.getText();
      embedMsgColor = ke.getcolor();
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
