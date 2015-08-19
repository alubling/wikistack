var express = require('express');
var mongo = require('../models/index.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  mongo.Page.find(function(err, docs) {
    res.render('index', { title: 'BROWSE MY WIKISTACK', docs: docs });
  });
});

module.exports = router;
