import fs from "fs";

export default function (data) {
  fs.writeFile("commands/counter/count.json", JSON.stringify(data), (err) => {
    if (err) console.log("Error writing file:", err);
  });
}
