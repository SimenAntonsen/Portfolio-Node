var express = require('express');
var router = express.Router();

/* GET recommendations page. */
router.get('/', function(req, res, next) {
  res.render('recommendations');
});

module.exports = router;