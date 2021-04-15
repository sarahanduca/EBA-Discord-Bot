import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export default async function (msg, token) {
  token = token.join(" ");
  let url = `https://g.tenor.com/v1/search?q=${token}&key=${process.env.GIFTOKEN}&ContentFilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  let index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
}
