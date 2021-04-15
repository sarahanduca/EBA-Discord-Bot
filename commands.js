import fetch from "node-fetch";

export default async function gotMessage(msg) {
  //   if (msg.channel.id == "832025286336970807") {
  let gatinho = ["kitten", "cute kitten", "cat"];
  let indexGatinho = Math.floor(Math.random() * gatinho.length);

  let token = msg.content.split(" ");
  let url;

  if (token[0] === "!gif") {
    let keyword = token[1];

    if (token.length > 1) {
      keyword = token.slice(1, token.length).join(" ");
    }

    url = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.GIFTOKEN}&ContentFilter=high`;
  } else if (token[0] === "!gatinho") {
    url = `https://g.tenor.com/v1/search?q=${gatinho[indexGatinho]}&key=${process.env.GIFTOKEN}&contentfilter=high`;
  }
  let response = await fetch(url);
  let json = await response.json();
  let index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
  //   }
  if (msg.content === "!ai") {
    fetch("https://www.affirmations.dev")
      .then((response) => response.json())
      .then((q) => msg.channel.send(`pois é, ${q.affirmation}`));
  } else if (msg.content === "!quote") {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((q) =>
        msg.channel.send(
          `${q.quote} \n- do zé mané ${q.character}, participação incrivel no anime ${q.anime}`
        )
      );
    //   } else if (msg.content === "bjinho") {
    //     msg.channel.send("bjinho");
    //     // for (let index = 0; index < 10; index++) {
    //     //   msg.channel.send("bjinho");
    //     // }
  }
}
