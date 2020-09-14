var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "<font color='blue'>짝꿍</font>"});
});

module.exports = router;
