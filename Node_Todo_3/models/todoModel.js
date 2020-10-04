var mongoose = require("mongoose");

var schema = mongoose.Schema;

var todoVO = new schema({
  // 칼럼이름 : 데이터Type
  to_date: String,
  to_time: String,
  to_text: String,
});

module.exports = mongoose.model("tbl_todo", todoVO);
