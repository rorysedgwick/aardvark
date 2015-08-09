test("The dataset should be stored in an array", function() {
  equal(Object.prototype.toString.call(data), "[object Array]", "the country data is stored in an array");
});

test("The country-code div displays the text from an element in the countryCodes array", function() {
  var currentCountry = parent.document.getElementById("current-country");
  equal(currentCountry.innerText, data[T.selected].code, "a country code is displayed in the div");
});

test("The score display should start at 0", function() {
  var scoreDisplay = parent.document.getElementById("score");
  equal(scoreDisplay.innerText, 0, "the div displays a 0 for the current score");
});

test("The matchChecker function should exist", function() {
  ok(T.matchChecker, "the matchChecker function exists");
  equal(typeof T.matchChecker, "function", "matchChecker is a function");
});

