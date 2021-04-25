import fs from "fs";

export default function (fulano) {
  let i;

  try {
    const jsonString = fs.readFileSync("commands/counter/count.json");
    const data = JSON.parse(jsonString);
    switch (fulano) {
      case "countMork":
        data.countMork += 1;
        i = data.countMork;
        break;
      case "countNabo":
        data.countNabo += 1;
        i = data.countNabo;
        break;
      case "countSuzo":
        data.countSuzo += 1;
        i = data.countSuzo;
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

  return i;
}
