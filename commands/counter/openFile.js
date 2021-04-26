import fs from "fs";

export default function () {
  const jsonString = fs.readFileSync("commands/counter/count.json");
  const data = JSON.parse(jsonString);
  return data;
}
