const fs = require("fs");
const os = require("os");
// console.log("1");
// const r = fs.readFileSync("./test.txt", "utf-8");
// console.log(r);

// console.log("2");

console.log("1");
fs.readFile("./test.txt", "utf-8", (er, r) => {
  console.log(r);
});

console.log("2");
