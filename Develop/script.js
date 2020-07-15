// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Variables
// Password characters, numbers, & symbols
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

// Password Options
var pLength;
var pUpCase = false;
var pLowCase = false;
var pNumbers = false;
var pSpecialChars = false;


// Prompt user for password length
do {
  pLength = prompt("Enter desired password length (Min: 8, Max: 128");
}
// Only allows password length within range
while (pLength < 8 || pLength > 128);
console.log(pLength); // Sanity Check

do {
  // Will the password include upper case?
  pUpCase = confirm("Do you want upper case characters in the password?");
  console.log(pUpCase); // Sanity Check

  // Will the password include lower case>
  pLowCase = confirm("Do you want lower case characters in the password?");
  console.log(pLowCase); // Sanity Check

  // Will the password include numbers?
  pNumbers = confirm("Do you want numbers in the password?");
  console.log(pNumbers); // Sanity Check

  // Will the password include special characters?
  pSpecialChars = confirm("Do you want special characters in the password?");
  console.log(pSpecialChars);

  if (!pUpCase && !pLowCase && !pNumbers && !pSpecialChars) {
    alert("Please select password paramaters to continue");
  }
}

while (!pUpCase && !pLowCase && !pNumbers && !pSpecialChars);

// Function to generate password given user input
function generatePassword() {
  var allowed = "";
  // Add allowed paramaters to password generator
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
  console.log(allowed); // Sanity Check

  var password = "";
  // Convert user given password length to an integer
  var length = parseInt(pLength);
  
  // Loop to pick random allowed chars, nums, & Symbols at given password length
  for (i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  }

  // Return the generated password
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
