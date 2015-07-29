"use strict";

var path  = require("path");
var index = path.join(__dirname, "/../public/index.html");

var handler = {

  home: function(request, reply) {
    return reply.file(index);
  }
}


module.exports = handler;
