// Assignment code here

//Created password characters here:
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numChar = '0123456789';
var specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

//Create array to store password characters in, strings will be added as user picks "ok=true"
charArray = [upperCase, lowerCase, numChar, specialChar];


function generatePassword()
{

  var userLength = prompt('Please choose a password length from 8 to 128.');
  
  userLength = parseInt(userLength);

  if(userLength < 8 || userLength > 128 || userLength === null)
  {
   alert('Please type 8 to 128');
   return 'Please click the button again :).';
  }
else {

//prompts for user choices ok = true cancel = false?
var userUpper = confirm("Would you like to have uppercase letters?");
var userLower = confirm("Would you like to have lowercase letters?");
var userNum = confirm("Would you like to have numbers?");
var userSpec = confirm("Would you like to have special characters?");
//storing user choices in an array
userChoice = [userUpper, userLower, userNum, userSpec];
//creating an empty array to add user password character options 
emptyArray = [];

for( i = 0; i < userChoice.length; i++)
{
  if(userChoice[i] === true)
  emptyArray.push(charArray[i]);
  //above will add the password character strings to an empty array
}
//this for loop below will add all of the wanted characters together in a string variable
var sumChar = '';
for(i = 0; i < emptyArray.length; i++)
{
  sumChar = sumChar + emptyArray[i];
}

//this loop will take the newly formed string sumChar and randomize the characters for the user
  var genPassword= '';
  for(i = 0; i < userLength; i++)
  {
  genPassword = genPassword + sumChar.charAt(Math.floor(Math.random() * sumChar.length));
  }
  return genPassword;

}
}

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
