var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'http://localhost:3000/' });
});
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'http://localhost:3000/' });
});
router.get('/blog', function(req, res, next) {
  res.render('new', { title: 'http://localhost:3000/' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'http://localhost:3000/' });
});


module.exports = router;
												