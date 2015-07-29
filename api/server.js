"use strict";

var Hapi    = require("hapi");
var path    = require("path");
var handler = require("./handler");
var server  = new Hapi.Server();

server.connection({
  port : Number(process.env.PORT) || 8000
});

server.route(require("./routes.js"));

module.exports = server;
