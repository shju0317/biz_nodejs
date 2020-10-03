var express = require("express");
var router = express.Router();

const moment = require("moment");

var todoVO = require("../models/todoModel");

// localhost:3000/todo/list URL 접근했을 때
// router.get("/list", function (req, res) {
//   todoVO.find().then(function (todoList) {
//     res.render("todoList", { todoList });
//   });
// });

router.get("/", function (req, res) {
  todoVO.find().then(function (todoList) {
    res.render("index", { todoList });
  });
});

router.get("/list", function (req, res) {
  todoVO.find().then(function (todoList) {
    res.render("index", { todoList });
  });
});

router.get("/write", function (req, res) {
  let data = new todoVO();
  res.render("todoWrite", { todoVO: data });
});

router.post("/write", function (req, res) {
  req.body.to_date = moment(new Date()).format("YYYY-MM-DD");

  let data = new todoVO(req.body);

  data
    .save()
    .then(function (todoVO) {
      res.redirect("/todo/list");
    })
    .catch(function (error) {
      console.error(error);
    });

  // res.write(b_title);
  // res.write(b_write);
  // res.end(b_text);
  // res.json(req.body);
});

router.get("/view/:id", function (req, res) {
  let id = req.params.id;

  // findOne : findById()
  // { where : {_id:id}}
  // table의 _id값이 list에서 전달받은 id값과 일치하는 item이 있느니 검사
  todoVO
    // PK(_id)값이 id와 일치하는 데이터가 있는지 찾아라
    .findOne({ _id: id })
    .then(function (result) {
      // PK값과 일치하는 item이 있으면 그 결과를 result에 담아준다
      //res.json(result);
      // bbsView.pug를 rendering할 때  todoVO라는
      res.render("todoView", { todoVO: result });
    })
    .catch(function (error) {
      console.error(error);
    });

  // res.send(id);
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
        t_title: req.body.b_title,
        t_write: req.body.b_write,
        t_text: req.body.b_text,
      }
    )
    .then(function (result) {
      // res.json(result);
      res.redirect("/todo/list");
    });
});

module.exports = router;
