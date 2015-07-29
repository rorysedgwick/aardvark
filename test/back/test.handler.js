"use strict";

var handler = require("../../api/handler");
var server  = require("../../api/server");
var test    = require("tape");

test("The home handler", function(t) {

  var options = {
    method  : "GET",
    url     : "/",
    handler : handler.home
  };


  server.inject(options, function(res) {
    t.equal(200, res.statusCode, "replies with a 200 status code");
    t.end();
  });
});
