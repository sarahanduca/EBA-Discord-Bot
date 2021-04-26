import data from "./openFile.js";
import close from "./closeFile.js";

const fileConfig = { data, close };
export default function (fulano) {
  let i;
  let jsonData = fileConfig.data();
  try {
    switch (fulano) {
      case "countMork":
        jsonData.countMork += 1;
        i = jsonData.countMork;
        break;
      case "countNabo":
        jsonData.countNabo += 1;
        i = jsonData.countNabo;
        break;
      case "countSuzo":
        jsonData.countSuzo += 1;
        i = jsonData.countSuzo;
        break;

      default:
        break;
    }
    fileConfig.close(jsonData);
  } catch (err) {
    console.log(err);
  }

  return i;
}
