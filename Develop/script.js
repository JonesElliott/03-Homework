// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Variables
// Special characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
// Password Options
var pLength;
var pNumbers = false;
var pSpecialChars = false;
var pUpCase = false;
var pLowCase = false

// Prompt user for password length
do {
  pLength = prompt("Enter desired password length (Min: 8, Max: 128");
}
// Only allows password length within range
while (pLength < 8 || pLength > 128);
console.log(pLength); // Sanity Check
// Will the password include upper case?
pUpCase = confirm("Do you want upper case characters in the password?");
console.log(pUpCase);
// Will the password include lower case>
pLowCase = confirm("Do you want lower case characters in the password?");
console.log(pLowCase); // Sanity Check
// Will the password include numbers?
pNumbers = confirm("Do you want numbers in the password?");
console.log(pNumbers); // Sanity Check
// Will the password include special characters?
pSpecialChars = confirm("Do you want special characters in the password?");
console.log(pSpecialChars);

// Function to generate password given user input
function generatePassword() {
  var allowed = "";
  if (pUpCase) {
    allowed = allowed + upperCase;
  }
  if (pLowCase) {
    allowed = allowed + lowerCase;
  }
  if (pNumbers) {
    allowed = allowed + numbers;
  }
  if (pSpecialChars) {
    allowed = allowed + specialCharacters;
  }
  return allowed;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
