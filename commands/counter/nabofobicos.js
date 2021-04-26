import data from "./openFile.js";
import close from "./closeFile.js";

const fileConfig = { data, close };
export default function (msg) {
  let nabs;
  let el;
  let jsonData = fileConfig.data();
  try {
    nabs = jsonData.nabofobicos;
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
    fileConfig.close(jsonData);
  } catch (err) {
    console.log(err);
  }

  return nabs;
}
