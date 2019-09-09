var express = require('express');
var router = express.Router();
// app.use('/users', usersRouter);

//router address localhost:3000/users/
//descriptions: get all users 
//comments:
router.get('/', function(req, res, next) {
  res.send('Character Home Route');
});



module.exports = router;
