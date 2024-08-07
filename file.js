const fs = require("fs");

fs.writeFileSync("./test.txt", "hy there");

fs.writeFile("./tesst.txt", "hy there ansync", (err) => {});

const result = fs.readFileSync("./test.txt", "utf-8");
fs.readFile("./test.txt", "utf-8", (err, result) => {
  if (err) console.log("err", err);
  else console.log(result);
});
console.log(result);

fs.appendFileSync("./test.txt", "hyu sef sef\n");

console.log(fs.statSync("./test.txt"));
