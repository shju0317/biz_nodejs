var express = require("express");
var app = express();

app.get("/topic/new", function (req, res) {
  res.send("Hi");
});

app.listen(3000, function () {
  console.log("Connected port 3000!");
});
