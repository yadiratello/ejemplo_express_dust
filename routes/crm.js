var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lista', function(req, res, next) {

  const dataJson = [{"id":1,"description":"Health Care"},{"id":2,"description":"Miscellaneous"},{"id":3,"description":"Finance"},{"id":4,"description":"Technology"},{"id":5,"description":"Public Utilities"},{"id":6,"description":"Public Utilities"},{"id":7,"description":"Capital Goods"},{"id":8,"description":"Health Care"},{"id":9,"description":"Technology"},{"id":10,"description":"Consumer Services"},{"id":11,"description":"Consumer Non-Durables"},{"id":12,"description":"Technology"},{"id":13,"description":"Public Utilities"},{"id":14,"description":"Consumer Services"},{"id":15,"description":"n/a"},{"id":16,"description":"n/a"},{"id":17,"description":"Capital Goods"},{"id":18,"description":"Finance"},{"id":19,"description":"Finance"},{"id":20,"description":"Technology"},{"id":21,"description":"Finance"},{"id":22,"description":"n/a"},{"id":23,"description":"Finance"},{"id":24,"description":"n/a"},{"id":25,"description":"Basic Industries"},{"id":26,"description":"Technology"},{"id":27,"description":"Transportation"},{"id":28,"description":"n/a"},{"id":29,"description":"Technology"},{"id":30,"description":"Consumer Durables"},{"id":31,"description":"Technology"},{"id":32,"description":"Consumer Durables"},{"id":33,"description":"Transportation"},{"id":34,"description":"Finance"},{"id":35,"description":"Health Care"},{"id":36,"description":"Transportation"},{"id":37,"description":"Health Care"},{"id":38,"description":"Consumer Services"},{"id":39,"description":"Finance"},{"id":40,"description":"Consumer Services"},{"id":41,"description":"Health Care"},{"id":42,"description":"Consumer Services"},{"id":43,"description":"Capital Goods"},{"id":44,"description":"Technology"},{"id":45,"description":"Health Care"},{"id":46,"description":"Basic Industries"},{"id":47,"description":"Consumer Services"},{"id":48,"description":"Energy"},{"id":49,"description":"Energy"},{"id":50,"description":"Capital Goods"}];

  res.render('crm-01', { title: 'Lista de electrodomésticos' , data: dataJson  });
});

module.exports = router;
