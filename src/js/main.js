var T = (function () {

  var selected = Math.floor(Math.random() * data.length);
  var currentScore = 0;

  var scoreBox = parent.document.getElementById("score")
  var countryBox = parent.document.getElementById("current-country");
  var submissionBox = parent.document.getElementById("submission-box");

  scoreBox.innerText = currentScore;

  countryBox.innerText = data[selected].code;

  matchChecker = function() {

    console.log("checking");

  };


  return {
    selected     : selected,
    currentScore : currentScore,
    matchChecker : matchChecker
  }


}());
