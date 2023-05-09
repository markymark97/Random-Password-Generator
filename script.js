var char_length = 8;
var array =[];

var lower_case =[,'a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper_case =[,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var num =[,'0','1','2','3','4','5','6','7','8','9'];
var special =['!','@','#','$','%','^','&','*','(',')','_','+','-','=','<','>','?','{','}'];


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


function writePassword() {

    var new_data = getData();
    var passwordText = document.querySelector("#password");


      if (new_data){
        var user_password = generatePassword();

        passwordText.value = user_password;
     }

    else {
      passwordText.value = "";
    }
}


function generatePassword(){

  var password ="";

  for (var i = 0; i < char_length; i++ ){

    var randomString = Math.floor(Math.random() * array.length);
    password =password + array[randomString];
  }

  return password;
}

function getData(){

  array =[];

  
  char_length = parseInt(prompt("How many characters (8-128):"));

  if(isNaN(char_length) || char_length <8 || char_length >128){ //Checks if correct info is given, and a number and within the range.

    alert("Please enter a number betwen 8-12")// Alerts user to re-enter with correct notation.
    return false;

  }

  else{

  if (confirm("Lower Case Letters")){
    array = array.concat(lower_case);
  

  }

  if (confirm("Upper Case Letters")){
    array = array.concat(upper_case);


  }

  if (confirm("Numbers")){
    array = array.concat(num);


  }

  if (confirm("Special Characters")){
    array = array.concat(special);
   

  }
  if(array.length==0){ //Makes sure that at least attribute is selected
    alert("Please select one character trait to generate password!")
    return false;
   
  }
  return true; 




  }
  

}
