const express = require("express");
const router = express.Router();
const moment = require("moment");

var todoVO = require("../models/todoModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  todoVO.find().then(function (todoList) {
    res.render("index", { todoList });
  });
});

router.post("/insert", function (req, res) {
  let to_text = req.body.todo;

  let to_date = moment(new Date()).format("YYYY-MM-DD");
  let to_time = moment().format("HH:mm:ss");
  // let todo_data = { ...req.body };
  // console.log(todo_data);

  req.body.to_date = to_date;
  req.body.to_time = to_time;
  req.body.to_text = to_text;

  let data = new todoVO(req.body);
  console.log(data);
  data
    .save()
    .then(function (todoVO) {
      res.redirect("/");
      //res.render("index", { todo_data: JSON.stringify(todo_data) });
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/update/:id", function (req, res) {
  let id = req.params.id;
  todoVO.findOne({ _id: id }).then(function (result) {
    res.render("update", { todoVO: result });
  });
});

router.post("/update/:id", function (req, res) {
  let id = req.params.id;
  req.body._id = id;

  let to_text = req.body.todo;
  req.body.to_text = to_text;

  let data = new todoVO(req.body);
  console.log(data);

  todoVO
    .updateOne({ _id: id }, { $set: { to_text: req.body.to_text } })
    .then(function (result) {
      // res.json(result);
      res.redirect("/");
    });
});

router.get("/delete/:id", function (req, res) {
  let id = req.params.id;
  todoVO
    .findOneAndDelete({ _id: id })
    .then(function (result) {
      res.redirect("/");
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
