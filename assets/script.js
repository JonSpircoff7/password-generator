var genPw = document.querySelector("#generate");
// WHEN TO HAVE A FUNCTION EXPRESSIONS?
genPw.addEventListener("click", function () {
  var num = prompt(
    "What length do you need? It must be a number between 8 and 128."
  );
  //check if num is between 8 and 128
  for (var i = 0; i < ; i++)
    if (num < 8 || num > 128) {
      prompt("You entered a number that is less than 8 or greater than 128.");
    } else {
      console.log("ALL GOOD!");
    }
});

//prompt user when generate button is clicked
// function welcomeGreet() {
//   prompt(
//     "Must be between 8 - 128 characters"
//   ); return n
// }

// if (n < 8) {
//   console.log("This is correct");
// } else {
//   console.log("This is wrong");
// }
// //move to next prompt with "would you like uppcase?"
// pwUppercase = prompt("Would you like uppercase?");
// if ("yes") {
//   console.log(pwLength.toUpperCase());
// } else {
//   null;
// }
// //move to next prompt with "would you like numbers?"
// pwNumbers = prompt("Would you like numbers?");
// if ("yes") {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// //move to next prompt with "would you like special characters?"
// pwSpecialChar = prompt("Would you like special characters?");
// if ("yes") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var characters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var specialChar = [
//   "!",
//   '"',
//   "#",
//   "$",
//   "%",
//   "&",
//   "(",
//   ")",
//   "*",
//   "+",
//   ",",
//   "-",
//   ".",
//   "/",
//   ":",
//   ";",
//   "<",
//   "=",
//   ">",
//   "?",
//   "@",
//   "[",
//   "]",
//   "^",
//   "_",
//   "`",
//   "{",
//   "|",
//   "}",
//   "~",
//   "\\",
// ];

// //
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
