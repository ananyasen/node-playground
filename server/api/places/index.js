'use strict';

var express = require('express');
var places_controller = require('./places.controller.js');

var router = express.Router();


//URI Base: /api/places

router.get('/', function(req, res, next){
  res.send("[Places API]")
});
router.get('/textsearch', places_controller.textsearch);
router.get('/nearbysearch', places_controller.nearbysearch);


module.exports = router;
