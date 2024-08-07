//const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => res.end("welcome to Home page"));
app.get("/about", (req, res) => res.end("welcome to About page"));
app.get("/sign", (req, res) => res.end("Hi to sign page " + req.query.name));
app.get("/profile", (req, res) => {
  return res.send("welcome to Profile page");
});

// const myserver = http.createServer(app);

// myserver.listen(8000, () => console.log("server started"));
app.listen(8000, () => console.log("server started"));
