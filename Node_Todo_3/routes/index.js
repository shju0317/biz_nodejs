const express = require("express");
const router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res) {
  let todo = req.body.todo;

  let to_date = moment().format("YYYY-MM-DD");
  let to_time = moment().format("HH:mm:ss");

  req.body.to_date = to_date;
  req.body.to_time = to_time;

  // ... : 전개연산자, spread op
  // req.body에 저장된 json 데이터를
  // { todo:"데이터", to_date:"날짜", to_time:"시간"}
  // 이 데이터를 통째로 구조까지 똑같이 todo_data로 복제하라
  let todo_data = { ...req.body };

  console.log(todo_data);

  // res.send(todo);
  // res.json(req.body);
  // JSON.strinify(jsonObject) : jsonObjcet(JSON 객체) 데이터를
  //   네트워크를 통해서 전송하기 위하여 문자열로 변환시키기
  //   string serializing : 일련화, 나열화
  res.render("index", { todo_data: JSON.stringify(todo_data) });
});

// get("/insert") : 입력을 받기 위해서
// 사용자(client)에게 입력 form을 보여주는 용도의 URL
router.get("/insert", function (req, res) {
  res.render("write");
});

// post("/insert") : form에서 입력받은 내용을 서버로 전송했을 때
// 데이터를 수신하여 처리할 용도의 URL
// write.pug의 form에 action을 지정하지 않아도 된다.
router.post("/insert", function (res, res) {
  // 데이터 저장 등의 코드
  res.redirect("/");
});

router.get("/update", function (res, res) {
  res.render("write");
});

router.post("/update", function (req, res) {
  // 데이터 수정 등의 코드
  res.redirect("/");
});

module.exports = router;
