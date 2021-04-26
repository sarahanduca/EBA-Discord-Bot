import fs from "fs";
import nabofobicos from "./nabofobicos.js";

export default function (fulano, msg) {
  let i;
  let nabs;

  try {
    const jsonString = fs.readFileSync("commands/counter/count.json");
    const data = JSON.parse(jsonString);
    switch (fulano) {
      case "countMork":
        data.countMork += 1;
        i = data.countMork;
        break;
      case "countSuzo":
        data.countSuzo += 1;
        i = data.countSuzo;
        break;

      case "countNabo":
        data.countNabo += 1;
        i = data.countNabo;
        nabs = nabofobicos(msg, data.nabofobicos);
        break;

      default:
        break;
    }
    fs.writeFile("commands/counter/count.json", JSON.stringify(data), (err) => {
      if (err) console.log("Error writing file:", err);
    });
  } catch (err) {
    console.log(err);
  }

  return fulano == "countNabo" ? { i, nabs } : i;
}
