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
import sarah from "./commands/baboLovers.js";
import ke from "./commands/baboLovers.js";
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
  sarah,
  ke,
  r,
  p,
  s,
};

export default async function gotMessage(msg) {
  let msgContent = msg.content.split(" ");
  let command = msgContent[0];

  let guildMember = msg.member;
  if (guildMember.user.id == process.env.MORKTAG) {
    let rand = Math.floor(Math.random() * 10);
    rand <= 3 ? commands.bullying(msg) : 0;
  }
  if (command.charAt(0) === "!") {
    try {
      command = command.substring(1);
      commands[command](msg, msgContent);
    } catch (err) {
      console.log("err", msgContent);
    }
  }
}
