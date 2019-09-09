var express = require('express');
var router = express.Router();
// app.use('/', indexRouter);

//router address localhost:3000/
//descriptions: Index Page
//comments: Welcome Users
router.get('/', function(req, res, next) {
  res.render('index');
});

//router address localhost:3000/about/
//descriptions: about the home page for test only 
//comments:
router.get('/about', function(req, res, next) {
  res.render('about', { layout: 'hero_layout' });
});

module.exports = router;
