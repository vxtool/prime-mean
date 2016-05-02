var mongoose   = require('mongoose');
var AdminModel = require('../models/admin');

module.exports.controller = function(app) {
  app.get('/admin', router);
};

function router (req, res) {
  res.render('admin/index');
}
