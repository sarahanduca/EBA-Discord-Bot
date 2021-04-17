import dotenv from "dotenv";
import gif from "./commands/gif.js";
import bullying from "./commands/bullying.js";
import suzo from "./commands/suzo.js";
import mork from "./commands/mork.js";
import eba from "./commands/eba.js";
import nabo from "./commands/nabo.js";
import jaca from "./commands/jaca.js";
import ocean from "./commands/ocean.js";
import bea from "./commands/bea.js";
import babo from "./commands/babo.js";

dotenv.config();
const commands = {
  gif,
  mork,
  bullying,
  suzo,
  eba,
  nabo,
  ocean,
  bea,
  jaca,
  babo,
};

export default async function gotMessage(msg) {
  let token = msg.content.split(" ");
  let command = token.shift();
  let guildMember = msg.member;
  if (guildMember.user.discriminator == process.env.MORKTAG) {
    let rand = Math.floor(Math.random() * 10);
    rand <= 5 ? commands.bullying(msg) : 0;
  }
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    commands[command](msg, token);
  }
}
