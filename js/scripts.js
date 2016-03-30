$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var vowelArray = ["a", "e", "i", "o", "u"];
    var userInput = $("#userInput").val().toLowerCase().split("");
    var output = [];

      for (var letter = 0; letter < userInput.length; letter++) {
        for (var vowel = 0; vowel < vowelArray.length; vowel++) {
          if (letter[vowel] !== vowelArray[letter]) {
            output.push(userInput.concat("ay"));
          } else {
            output.push("FAILURE");
          }
        }

      }

      output.splice(1);
      var almostFinal = output.join("");
      var final = almostFinal.replace(/,/g , "");
      console.log(final);
      $("#result").text(final);
  });
});






// for (var letter = 0; letter < userInput.length; letter++) {
//   for (var consonant = 0; consonant < consonants.length; consonant++) {
//     if (consonants[consonant] !== userInput[letter]) {
//       output.push(userInput + "ay");
//     }
//   }
// }
