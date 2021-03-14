// Assignment code here

//Created password characters here:
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numChar = '0123456789';
var specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

//Create array to store password characters in 
charArray = [upperCase, lowerCase, numChar, specialChar];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
