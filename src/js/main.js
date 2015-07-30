var data = require("./data.js");

var selected = Math.floor(Math.random() * data.length);

document.getElementById("current-country").innerText = data[selected].code;

function matchChecker() {

  if (document.getElementById("submission-box").value === data[selected].country) {
    console.log("match");
  }
}

var runner = require("../../test/runner.js");
