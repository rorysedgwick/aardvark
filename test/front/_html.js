"use strict";

test("The Qunit frame should exist", function() {
  ok(document.getElementById("qunit"), "the Qunit frame exists");
});

test("The QUnit-fixture frame should exist", function() {
  ok(document.getElementById("qunit-fixture"), "the qunit div exists")
});

test("The title <h1> should exist", function() {
  ok(parent.document.getElementById("title"), "the title <h1> exists");
});

test("The description <div> should exist", function() {
  ok(parent.document.getElementById("description"), "the description <div> exists");
});

test("There should be a form element with four child elements", function() {

  var gameForm = parent.document.getElementById("game-controls");

  ok(gameForm, "the form exists");
  equal(gameForm.getElementsByTagName("input").length, 4, "the form contains four input elements");
});

test("There should be two game-selector radio buttons", function() {

  var buttons = parent.document.getElementsByClassName("game-selector");
  var buttonOne = buttons[0];
  var buttonTwo = buttons[1];

  equal(buttons.length, 2, "there are two elements with the class 'game-selector'");
  equal(buttonOne.name, "game-selector", "the first button has a name of 'game-selector'");
  equal(buttonTwo.name, "game-selector", "the second button has a name of 'game-selector'");
  equal(buttonOne.value, "Infinite Play", "the first button has the text value 'Infinite Play");
  equal(buttonTwo.value, "Single Round", "the second button has the text value 'Single Round");
});

test("There should be a <text input> element to fill in answers", function() {
  ok(parent.document.getElementById("submission-box"), "the submission box exists");
});

test("There should be a submit button to enter an answer", function() {
  ok(parent.document.getElementById("submit-answer"));
});

test("There should be a <div> to display the current country being matched", function() {
  ok(parent.document.getElementById("current-country"), "the div exists");
});
