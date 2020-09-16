var express = require("express");
var router = express.Router();

const moment = require("moment");

router.post("/input", function (req, res) {
  let user = req.body.user;
  res.render("index", {
    user: user,
    title: "님 반갑습니다",
  });
});

router.get("/", function (req, res, next) {
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  res.render("index", { date: date, time: time });
});

module.exports = router;
