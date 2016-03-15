/**
 * GET     /place/textsearch?search=delhi
 * GET     /place/nearbysearch?location=28.6100,77.2300&destinationType=restaurant
 */

'use strict';

var _ = require('lodash');
var config = require("../../config/config.js");
var TextSearch = require("../../../node_modules/googleplaces/lib/TextSearch.js");
var textSearch = new TextSearch(config.apiKey, config.outputFormat);

exports.textsearch = function (req, res) {
  var search = req.query.search || "tourist attractions";

  var textSearch = new TextSearch(config.apiKey, config.outputFormat);
  var parameters = {
    query: search
  };

  textSearch(parameters, function (error, response) {
    if (error) {
      throw error;
    }

    res.json(response.results);

  });
};

var NearBySearch = require("../../../node_modules/googleplaces/lib/NearBySearch.js");
var nearBySearch = new NearBySearch(config.apiKey, config.outputFormat);


exports.nearbysearch = function(req, res){
  var location = req.query.location || "28.6100,77.2300";
  var radius = req.query.radius || 10000; //in meter
  var types = req.query.destinationType || "lodging|restaurant|food";
  var opennow = req.query.opennow;

  var parameters = {
    "location": location,
    "radius": radius,
    "types": types,
    //ensuring quality
    "rankby": "prominence"
  };

  if(opennow){
    parameters.opennow = opennow;
  }

  nearBySearch(parameters, function (error, response) {
    if (error) throw error;
    res.json(response.results);
  });
}
