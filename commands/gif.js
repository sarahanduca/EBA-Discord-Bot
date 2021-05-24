import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export default async function (msg, choosenGif) {
  choosenGif.shift();
  choosenGif.join(" ");
  let url = `https://g.tenor.com/v1/search?q=${choosenGif}&key=${process.env.GIFTOKEN}&ContentFilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  let index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
}
