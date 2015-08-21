// pages - /wiki/url route path
var express = require('express');
var mongo = require('../models/index.js');
var router = express.Router();

var currentDoc = null;

router.get('/:url' , function(req, res) { // where would you input req.params.url?
  mongo.Page.findOne({ 'url_name': req.params.url }, function(err, doc) { // use url_name or full_route here? Will /wiki be included?
    currentDoc = doc;
    res.render('show', { doc: doc });
  });
});

router.get('/:url/edit' , function(req, res) { // where would you input req.params.url?
  mongo.Page.findOne({ 'url_name': req.params.url }, function(err, doc) { // use url_name or full_route here? Will /wiki be included?
    var docDisplay = doc;
    docDisplay.tagsString = doc.tags.join(", ");
    res.render('edit', { doc: docDisplay });
  });
});

router.post('/:url/:url/edit/submit', function(req, res) {
  // throw Error ("We made it here!");
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
  var title = req.body.title;
  var content = req.body.content;
  var newString = req.body.title.replace(/\s/gi, '_');
  var url_name = newString.replace(/\W/g, '');
  var tags = req.body.tags.split(", ");
  console.log(tags);

  mongo.Page.findOneAndUpdate({ '_id': currentDoc._id }, { 'title': title, 'content': content, 'tags': tags, 'url_name': url_name} )
    .then(function(item) {
      // res.render('show', { doc: docDisplay});
      res.redirect('/wiki/' + url_name);
    });
  //var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name, 'tags': tags});
  // page.save();
});

module.exports = router;
