var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add');
});

router.post('/submit', function(req, res) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
  var title = req.body.title;
  var content = req.body.content;
  var newString = req.body.title.replace(/\s/gi, '_');
  var url_name = newString.replace(/\W/g, '');
  var tags = req.body.tags.split(", ");
  console.log(tags);

  var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name, 'tags': tags});
  page.save();
  res.redirect('/');
});

// router.put('/:id/', function(req, res) {
//   var models = require('../models/');
//
//   // STUDENT ASSIGNMENT:
//   // add definitions of the `title`, `content` and `url_name` variables here
//   var title = req.body.title;
//   var content = req.body.content;
//   var newString = req.body.title.replace(/\s/gi, '_');
//   var url_name = newString.replace(/\W/g, '');
//   var tags = req.body.tags.split(", ");
//   console.log(tags);
//
//   mongo.Page.findOneAndUpdate({ '_id': currentDoc._id }, { 'title': title, 'content': content, 'tags': tags} );
//   //var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name, 'tags': tags});
//   page.save();
//   res.redirect('/:url');
// });

module.exports = router;
