// Assignment code here

//Created password characters here:
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numChar = '0123456789';
var specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

//Create array to store password characters in, strings will be added as user picks "ok=true"
charArray = [upperCase, lowerCase, numChar, specialChar];
//creating global variable for password length
var userLength;
//empty string to hold user password character choices 
var sumChar = '';

function checkLength(userLength)
{
  userLength = prompt('Please choose a password length from 8 to 128.');

  if(userLength < 8 || userLength > 128 || userLength === null)
  {
    alert('Please choose a number from 8 to 128.');
    generatePassword();
  }
  else
  {
    userChoices();
    //continuing program here
  }
}

function userChoices()
{
//prompts for user choices ok = true cancel = false
var userUpper = confirm("Would you like to have uppercase letters?");
var userLower = confirm("Would you like to have lowercase letters?");
var userNum = confirm("Would you like to have numbers?");
var userSpec = confirm("Would you like to have special characters?");
//storing user choices in an array
userChoice = [userUpper, userLower, userNum, userSpec];
//creating an empty array to add user password character options below 
emptyArray = [];

for( i = 0; i < userChoice.length; i++)
{
  if(userChoice[i] === true)
  emptyArray.push(charArray[i]);
  //above will add the password character strings to an empty array
}
//this for loop below will add all of the wanted characters together in a string variable
for(i = 0; i < emptyArray.length; i++)
{
  sumChar = sumChar + emptyArray[i];
}
}

function generatePassword()
{
  checkLength();
  console.log(sumChar);
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
