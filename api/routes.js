"use strict";

var path        = require("path");
var handler     = require("./handler");
var server      = require("./server");

module.exports = ([

  {
    path    : "/",
    method  : "GET",
    config  : {
      handler : handler.home,
    }
  },

  {
    path    : "/{param*}",
    method  : "GET",
    handler : {
      directory : {
        path  : path.resolve(__dirname + "/../public"),
        index : false
      }
    }
  },

  {
    method  : "GET",
    path    : "/test/{param*}",
    handler : {
      directory : {
        path : path.resolve(__dirname + "/../test")
      }
    }
  }
]);

