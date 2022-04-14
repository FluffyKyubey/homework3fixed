// Assignment Code
var generateBtn = document.querySelector("#generate");

const lcl = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const ucl = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

const numb = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
]

const spec = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  ',',
  '{',
  "}",
  "~",
  "-",
  "_",
  ".",
]

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  if (password === undefined) {
    return
  }

  passwordText.value = password;

}

function getUserselection ()  {
  let numberOfChars = parseInt(prompt("How many characters would you like your password to be? Please Select a number between 8 and 128."))

  if (Number.isNaN(numberOfChars)){
    alert("You must enter a number.")
    return
  }
  if (numberOfChars < 8) {
    alert("You must include at least 8 characters.")
    return
  }
  else if (numberOfChars > 128) {
    alert("You may not select more than 128 characters.")
    return
  }
  let uselcl = confirm("Would you like your password to include lower case leters?")
  let useucl = confirm("Would you like your password to include upper case leters?")
  let usespec = confirm("Would you like your password to include special characters?")
  let usenumb = confirm("Would you like your password to include numbers?")
  
  if(!uselcl && !useucl && !usespec && !usenumb) {
    alert("You need to select a minum of one characer type.")
    // return
  }
  
  let optionObj = {
    length: numberOfChars,
    lowercase: uselcl,
    uppercase: useucl,
    specialChars: usespec,
    numbers: usenumb
  }
  return optionObj
}

function generatePassword () {
  let selectOptions = getUserselection()

  if (selectOptions === undefined) {
    return
  }
  
  let { length, lowercase, uppercase, specialChars, numbers } = selectOptions
  let possibleCharacters = [];
  let generatedPassword = [];

  if (lowercase) {
    possibleCharacters = possibleCharacters.concat(lcl)
  }

  if (uppercase) {
    possibleCharacters = possibleCharacters.concat(ucl)
  }

  if (specialChars) {
    possibleCharacters = possibleCharacters.concat(spec)
  }

  if(numbers) {
    possibleCharacters = possibleCharacters.concat(numb)
  }

  for (i = 0; i < length + 1; i++) {
    let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length)
    generatedPassword += possibleCharacters[randomCharIndex]
  }

  return generatedPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

