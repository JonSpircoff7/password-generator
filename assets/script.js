// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the input
function genPassCode() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Event
generateBtn.addEventListener("click", genPassCode);

function generate() {
  var invalid = true;
  while (invalid) {
    var passwordLength = Number(
      prompt(
        "How many characters would you like your password to be?\nMust be between 8 and 128 characters"
      )
    );
    if (passwordLength > 7 && passwordLength < 129) {
      invalid = false;
    } else if (passwordLength == 0) {
      Window.close();
    } else {
      alert("Please enter a number between 8 and 128 characters");
    }
  }

  while (!invalid) {
    var lowerCase = confirm(
      "Would you like your password to include: \nLower Case letters?"
    );
    var upperCase = confirm(
      "Would you like your password to include: \nUpper Case letters?"
    );
    var numeric = confirm(
      "Would you like your password to include: \nNumbers?"
    );
    var special = confirm(
      "Would you like your password to include: \nSpecial Characters? \nEx: ?, !, >"
    );
    alert(
      "You chose: \n Lower Case Letters: " +
        lowerCase +
        "\n Upper Case Letters: " +
        upperCase +
        "\n Numbers: " +
        numeric +
        "\n Special Characters: " +
        special
    );
    if (
      lowerCase == true ||
      upperCase == true ||
      numeric == true ||
      special == true
    ) {
      invalid = true;
    } else {
      alert("At least one character type must be selected. Please try again");
    }
  }

  // Defines available password characters based on user input
  if (lowerCase == true) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowerCase = "";
  }
  if (upperCase == true) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    upperCase = "";
  }
  if (numeric == true) {
    numeric = "123456789";
  } else {
    numeric = "";
  }
  if (special == true) {
    special = " ~`!@#$%^&*()-+={}[]|/:;<>,.?";
  } else {
    special = "";
  }

  // Merges strings of all chosen options
  var grandString = special.concat(lowerCase, upperCase, numeric);

  // creates final password by randomizing through each item in the string
  var randomNumber = "";
  for (var i = 0; i < passwordLength; i++) {
    randomNumber += grandString[Math.floor(Math.random() * grandString.length)];
  }
  return randomNumber;
}
