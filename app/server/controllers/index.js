module.exports.controller = function(app) {
  app.get('/', router);
};

function router (req, res) {
  res.render('index');
}
