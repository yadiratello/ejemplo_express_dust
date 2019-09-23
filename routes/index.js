var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TD Consultores', description: 'lorem ipsum ezvt christopher yadira katherine' });
});

module.exports = router;
