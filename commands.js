import dotenv from "dotenv";
import gif from "./commands/gif.js";
import bullying from "./commands/bullying.js";
import suzo from "./commands/suzo.js";
import mork from "./commands/mork.js";
import eba from "./commands/eba.js";
import nabo from "./commands/nabo.js";
import bea from "./commands/baboLovers.js";
import jaca from "./commands/baboLovers.js";
import ocean from "./commands/baboLovers.js";
import babo from "./commands/baboLovers.js";
import r from "./commands/paper.js";
import p from "./commands/paper.js";
import s from "./commands/paper.js";

dotenv.config();
const commands = {
  gif,
  mork,
  bullying,
  suzo,
  eba,
  nabo,
  ocean,
  jaca,
  babo,
  bea,
  r,
  p,
  s,
};

export default async function gotMessage(msg) {
  let token = msg.content.split(" ");
  let command = token.shift();
  let guildMember = msg.member;
  if (guildMember.user.id == process.env.MORKTAG) {
    let rand = Math.floor(Math.random() * 10);
    rand <= 3 ? commands.bullying(msg) : 0;
  }
  if (command.charAt(0) === "!") {
    try {
      command = command.substring(1);
      commands[command](msg, token);
    } catch (err) {
      console.error("Not a command");
    }
  }
}
