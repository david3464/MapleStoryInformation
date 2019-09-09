var express = require('express');
var router = express.Router();
// app.use('/users', usersRouter);

//router address localhost:3000/users/
//descriptions: get all users 
//comments:
router.get('/', function(req, res, next) {
  res.render('users/index');
});

//router address localhost:3000/users/login
//descriptions: get all users 
//comments:
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

//router address localhost:3000/users/register
//descriptions: get all users 
//comments:
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

module.exports = router;
