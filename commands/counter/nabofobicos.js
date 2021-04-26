import fs from "fs";

export default function (msg) {
  let nabs;
  let el;
  try {
    const jsonString = fs.readFileSync("commands/counter/count.json");
    const data = JSON.parse(jsonString);
    nabs = data.nabofobicos;
    let currUser = msg.member.user;

    if (
      nabs.some((e) => {
        el = e;
        return e[0] == currUser.id;
      })
    ) {
      if (currUser.username != el[1]) {
        el[1] = currUser.username;
      }
    } else {
      nabs.push([currUser.id, currUser.username]);
    }

    fs.writeFile("commands/counter/count.json", JSON.stringify(data), (err) => {
      if (err) console.log("Error writing file:", err);
    });
  } catch (err) {
    console.log(err);
  }

  return nabs;
}
