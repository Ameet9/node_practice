const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end;
  //   console.log("new req server");
  //   console.log(req);
  const log = `${Date.now()}: New req received` + req.method + req.url + "\n";
  const myurl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (er, data) => {
    switch (req.url) {
      case "/":
        if (req.method === "GET") res.end("Homepage");

        break;
      case "/about":
        res.end("About Page");

        break;
      case "/signup":
        if (req.method === "GET") res.end("this is signup form");
        else if (req.method === "POST") {
          res.end("succes");
        }
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

myserver.listen(8000, () => console.log("server started"));
