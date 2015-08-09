test("The dataset should be stored in an array", function() {
  equal(Object.prototype.toString.call(data), "[object Array]", "the country data is stored in an array");
});

test("The country-code div displays the text from an element in the countryCodes array", function() {
  var currentCountry = parent.document.getElementById("current-country");

  equal(currentCountry.innerText, data[selected].code, "a country code is displayed in the div");
});
