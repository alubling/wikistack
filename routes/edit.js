var express = require('express');
var mongo = require('../models/index.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('edit', { docs });
});

router.post('/:url/submit', function(req, res) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
  var title = req.body.title;
  var content = req.body.content;
  var newString = req.body.title.replace(/\s/gi, '_');
  var url_name = newString.replace(/\W/g, '');
  var tags = req.body.tags.split(", ");
  console.log(tags);

  mongo.Page.findOneAndUpdate({ 'url_name': req.params.url }, { 'title': title, 'content': content, 'tags': tags} );
  //var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name, 'tags': tags});
  page.save();
  res.redirect('/');
});

module.exports = router;
