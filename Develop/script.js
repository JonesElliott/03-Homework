// Assignment Code
var generateBtn = document.querySelector("#generate");

var parametersBtn = document.querySelector("#parameters");

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

// Function to request password parameters from user
function getParameters() {
  // Prompt user for password length
  do {
    pLength = prompt("Enter desired password length (Min: 8, Max: 128)");
    // Alert message when given length is out of range
    if (pLength < 8 || pLength > 128) {
      alert("Please eneter a password length within range.")
    }
  }
  // Repeat above if given password length is out of range
  while (pLength < 8 || pLength > 128);
  console.log("Password Length: " + pLength); // Sanity Check

  // Get desired parameters
  do {
    // Will the password include upper case?
    pUpCase = confirm("Do you want upper case characters in the password?");
    console.log("Upper Case: " + pUpCase); // Sanity Check

    // Will the password include lower case>
    pLowCase = confirm("Do you want lower case characters in the password?");
    console.log("Lower Case:" + pLowCase); // Sanity Check

    // Will the password include numbers?
    pNumbers = confirm("Do you want numbers in the password?");
    console.log("Numbers: " + pNumbers); // Sanity Check

    // Will the password include special characters?
    pSpecialChars = confirm("Do you want special characters in the password?");
    console.log("Special Characters: " + pSpecialChars);

    if (!pUpCase && !pLowCase && !pNumbers && !pSpecialChars) {
      alert("Please select password paramaters to continue");
    }
  }

  // Repeat above if no parameters were selected
  while (!pUpCase && !pLowCase && !pNumbers && !pSpecialChars);
}

// Function to generate password given user parameters
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
  console.log("Parameters Allowed: " + allowed); // Sanity Check

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

// Add event listener to parameters button
parametersBtn.addEventListener("click", getParameters);
