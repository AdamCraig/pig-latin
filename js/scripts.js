// var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
// var userInput = ["a", "p", "p", "l", "e"];
// var translator = function(userInput) {
//   for (var letter = 0; letter < userInput.length; letter++) {
//     for (var consonant = 0; consonant < consonants.length; consonant++) {
//       if (consonants[consonant] != userInput[letter]) {
//         userInput + "ay";
//       }
//     }
//   }
// }


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
    var userInput = $("#userInput").val().toLowerCase().split("");
    var output = [];



      for (var letter = 0; letter < userInput.length; letter++) {
        for (var consonant = 0; consonant < consonants.length; consonant++) {
          if (consonants[consonant] !== userInput[letter]) {
            output.push(userInput[letter] + "ay");
          }
        }
      }
console.log(output);




  });
});
