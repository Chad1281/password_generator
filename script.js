// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  // Character arrays
  var randomLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var randomUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", ";", ":", "?"];

  // Confirm answers will be input here
  var character = [];

  // Random characters will be pushed here
  var password = [];

  // Prompt the user to pick the length of desired password
  var userPrompt = prompt("Please choose a password length between 8 and 128");

  // change user input from string to number
  var userPromptNumber = parseInt(userPrompt);

  // Alert if user doesn't choose a NUMBER between 8 & 128
  if (userPrompt > 128 || userPrompt < 8 || !userPromptNumber) {
    alert("Please choose a number between 8 & 128.");
    return;
  }
  else {
    alert("Your password will be "+userPromptNumber+" characters long.");
  }

  // Confirm which characters the user wants to use for their password
  var ranLwCs = confirm("Would you like to use lower case letters?");
  var ranUpCs = confirm("Would you like to use upper case letters?");
  var ranNum = confirm("Would you like to use numbers?");
  var ranSp = confirm("Would you like to use special characters?");

  // Alert if user does not choose a character to use
  if (!ranLwCs && !ranUpCs && !ranNum && !ranSp) {
    alert("Please choose at least one of the characters.");
    return;
  }

  // If user wants lower case, pushes lower case letters into character array
  if ( ranLwCs == true ) {
    for (var i=0; i < randomLowerCase.length; i++){
      character.push(randomLowerCase[i]);
    }
  }

    // If user wants uppper case, pushes upper case letters into character array
  if ( ranUpCs == true) {
    for (var i=0; i < randomUpperCase.length; i++){
      character.push(randomUpperCase[i]);
    } 
  }

    // If user wants numbers, pushes numbers into character array
  if ( ranNum == true) {
    for (var i=0; i < randomNumber.length; i++){
      character.push(randomNumber[i]);
    } 
  }

    // If user wants special characters, pushes special characters into character array
  if ( ranSp == true) {
    for (var i=0; i < special.length; i++){
      character.push(special[i]);
    } 
  }

  // Randomly chooses characters from character array based on the number of characters selected by user
  for (i=0; i<userPromptNumber; i++) {
    var index = Math.floor(Math.random() * character.length);  
      password = password + character[index];
  }

  // Defines password and inserts into password box
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

