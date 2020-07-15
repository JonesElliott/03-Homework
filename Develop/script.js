// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Variables
// Special characters
var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '+', '-', '/', ':', ';', '<', '=', '>', '?', '[', '/', ']', '^', '_', '`', '{', '}', '|', '~'];
// Password length
var pLength;

do {
  pLength = prompt("Enter desired password length (Min: 8, Max: 128");
}
while (pLength < 8 || pLength > 128);
console.log(pLength);


function generatePassword() {

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
