// Assignment Code
var generateBtn = document.querySelector("#generate");

// randomly pick a lower case letter from the unicode character set
function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// randomly pick an upper case letter from the unicode character set
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// randomly pick a number from the unicode character set
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// randomly pick a special character from the variable special
function randomSpecial() {
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", ";", ":", "?"];
  return special[Math.floor(Math.random() * special.length)];
};
 
// console.log(randomLowerCase());
// console.log(randomUpperCase());
// console.log(randomNumber());
// console.log(randomSpecial());












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  // Prompt the user to pick the length of desired password
  var userPrompt = prompt("Please choose a password length between 8 and 128");
  // change user input from string to number
  var userPromptNumber = parseInt(userPrompt)
  // Alert if user doesn't choose a NUMBER between 8 & 128
  if (userPrompt > 128 || userPrompt < 8 || !userPromptNumber) {
    alert("Please choose a number between 8 & 128.");
    return;
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
  for (i = 0; i < userPromptNumber; i++) {
    if (ranLwCs == true);
    randomLowerCase();
  }
}
