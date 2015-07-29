"use strict";

var server = require("./api/server.js");

server.start(function() {
  console.log("server running at port: " + server.info.port);
});
