var express = require('express');
var router = express.Router();

router.get('/admin', function (req, res) {
  var user = req.user;
  if(user){
    res.render('/admin/index', { user : req.user });
  } else {
    res.redirect('/admin/login');
  }
});

router.get('/admin/login', function(req, res) {
  res.render('admin/login', { user : req.user });
});

module.exports = router;
