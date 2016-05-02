module.exports.controller = function(app) {
  app.get('/admin', router);
};

function router (req, res) {
  res.render('admin/index');
}
