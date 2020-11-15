//POSSIBLE PW VALUES:

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var character = "!@#$^&%*()+=-[]{}|:<>?,.";




var lowerSelection = false;
var upperSelection = false;
var numberSelection = false;
var characterSelection = false;


 

//GENERATE PW FUNCTION
function generatePassword() {
  
  

  var confirmLength = "";
  //LENGTH INPUT FROM USER
  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("The length of your random password can be between 8-128 characters. Please type your answer below to select the length.");
  if (confirmLength === null) {
  break;
    }
  }

//CHARACTER TYPE INPUT FROM USER
  if (confirmLength) {

  if (confirm("Would you like to use lowercase characters in your strong password?") == true) {
      lowerSelection = true
  }   

  if (confirm("Would you like to use uppercase characters in your strong password?") == true) {
    upperSelection = true
  }

  if (confirm("Would you like to use special characters in your strong password?") == true) {
    characterSelection = true
  }

  if (confirm("Would you like to use numerical characters in your strong password?") == true) {
    numberSelection = true
  }

//NO CHAR TYPE SELECTED
  if (lowerSelection === false && upperSelection === false && characterSelection === false && numberSelection === false) {
    alert("You must choose at least one character type to generate a strong password.")
    }
  }




//PW GENERATION
var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (characterSelection ? character : '');
    characters += (numberSelection ? number : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;
}



function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; ++i) {
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}


//GET REFERENCES TO THE GENERATE ELEMENT
var generateBtn = document.querySelector("#generate");


//ADD EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener("click", generatePassword);


//WRITE PW TO THE PASSWORD INPUT
function writePassword() {
  var password = generatePassword();
}





//GENERATE FUNCTION CALL
generatePassword();