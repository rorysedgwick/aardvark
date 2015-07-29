"use strict";

test("The Qunit frame should exist", function() {
  ok(document.getElementById("qunit"), "the Qunit frame exists");
});

test("The QUnit-fixture frame should exist", function() {
  ok(document.getElementById("qunit-fixture"), "the qunit div exists")
});

test("The title <h1> should exist", function() {
  ok(document.getElementById("title"), "the title <h1> exists");
});

test("The description <div> should exist", function() {
  ok(document.getElementById("description"), "the description <div> exists");
});

test("There should be a form element with two child elements", function() {

  var gameForm = document.getElementById("game-type-selector");

  ok(gameForm, "the form exists");
  equal(2, gameForm.getElementsByTagName("input").length, "the form contains two input elements");
});


test("There should be two game-selector radio buttons", function() {

  var buttons = document.getElementsByClassName("game-selector");

  ok((buttons.length >= 2), "there are at least two radio buttons");
  equal(2, buttons.length, "there are two elements with the class 'game-selector'");
  equal("game-selector", buttons[0].name, "the first button has a name of 'game-selector'");
  equal("game-selector", buttons[1].name, "the second button has a name of 'game-selector'");
  equal("Infinite Play", buttons[0].value, "the first button has the text value 'Infinite Play");
  equal("Single Round", buttons[1].value, "the second button has the text value 'Single Round");
});

