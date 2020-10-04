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

router.post("/", function (req, res) {
  let to_text = req.body.todo;

  let to_date = moment().format("YYYY-MM-DD");
  let to_time = moment().format("HH:mm:ss");

  req.body.to_date = to_date;
  req.body.to_time = to_time;
  req.body.to_text = to_text;

  let todo_data = { ...req.body };

  console.log(todo_data);

  let data = new todoVO(req.body);
  data
    .save()
    .then(function (todoVO) {
      res.render("index", { todo_data: JSON.stringify(todo_data) });
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/update", function (req, res) {
  let id = req.params.id;
  todoVO.findOne({ _id: id }).then(function (result) {
    res.render("todoWrite", { todoVO: result });
  });
});

router.post("/update/:id", function (req, res) {
  let id = req.params.id;
  req.body._id = id;
  todoVO
    .updateOne(
      { _id: id },
      {
        to_text: req.body.to_text,
      }
    )
    .then(function (result) {
      // res.json(result);
      res.redirect("/todo/list");
    });
});

router.get("/delete/:id", function (req, res) {
  let id = req.params.id;
  todoVO
    .findOneAndDelete({ _id: id })
    .then(function (result) {
      res.redirect("/todo/list");
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
