var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify({text: 'test data from node.js at ' + new Date()}));
});

module.exports = router;
