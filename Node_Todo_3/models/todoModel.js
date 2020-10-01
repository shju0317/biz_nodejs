var mongoose = require("mongoose");

var schema = mongoose.Schema;

var todoVO = new schema({
  // 칼럼이름 : 데이터Type
  to_date: String,
  to_time: String,
  //to_title: String
  to_write: String,
  to_text: String,
  //to_count: Number,
});

module.exports = mongoose.model("tbl_todo", todoVO);
