// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Variables
// Special characters
var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '+', '-', '/', ':', ';', '<', '=', '>', '?', '[', '/', ']', '^', '_', '`', '{', '}', '|', '~'];
// Password Options
var pLength;
var pNumbers = false;
var pSpecialChars = false;

// Prompt user for password length
do {
  pLength = prompt("Enter desired password length (Min: 8, Max: 128");
}
// Only allows password length within range
while (pLength < 8 || pLength > 128);
console.log(pLength); // Sanity Check

pNumbers = confirm("Do you want numbers in the password?");
console.log(pNumbers);
pSpecialChars = confirm("Do you want special characters in the password?");
console.log(pSpecialChars);


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
