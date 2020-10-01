var mongoose = require("mongoose");

var schema = mongoose.Schema;

var todoVO = new schema({
  // 칼럼이름 : 데이터Type
  t_date: String,
  t_title: String,
  t_write: String,
  t_text: String,
  t_count: Number,
});

module.exports = mongoose.model("tbl_todo", todoVO);
