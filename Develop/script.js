/*Objective: To create a password generator using inputs from user and display on the page
  Author: AC
  Date Created: 10/04/2020
  Version: 1.0
  Module: 3
  Project: Bootcamp
*/  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
    alert("Enter Password Criteria. First please enter length of the password");
    var len = promptForNumber();
    alert ("Also, please enter character type(s) to include in the password ");
    var cType = selectCharacterType();
    var password = generatePassword(len, cType, cType.length);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment code here
function promptForNumber()
{
      var len = parseInt(prompt("Please choose a length in number of at least 8 characters and no more than 128 characters"));
      while (len < 8 || len > 128) 
      {
      len =  parseInt(prompt("Please choose a length in number of at least 8 characters and no more than 128 characters"));                           
      }   
  return len;
}
//function select Character Type and return an array of Character Type
function selectCharacterType()

{
  moreChoice = true; 
  var ctypeArr = [];
  while (moreChoice)
  {
    var charType = parseInt(prompt("Please character types to include in the password. Please choose 1 for lowercase, 2 for uppercase, 3 for number and 4 for special characters"));
    if (ctypeArr.length < 1 || ctypeArr.length <= 4)

    {
          switch(charType)
          {
          case 1:
                
                if(ctypeArr.indexOf(1) !== -1)
                {
                  alert("You have already selected this character type. Select a new character type of (1 Through 4)!")
                } 
                else
                {
                  //alert("Value does not exists!")
                  ctypeArr.push(1);
                }
               break;
          case 2:
                
                if(ctypeArr.indexOf(2) !== -1)
                {
                  alert("You have already selected this character type. Select a new character type of (1 Through 4)")
                } 
                else
                {
                  //alert("Value does not exists!")
                  ctypeArr.push(2);
                }
                break; 
          case 3:  
                
                if(ctypeArr.indexOf(3) !== -1)
                {
                  alert("You have already selected this character type. Select a new character type of (1 Through 4)")
                } 
                else
                {
                  //alert("Value does not exists!")
                  ctypeArr.push(3);
                }
                break;
          case 4:
               
                if(ctypeArr.indexOf(4) !== -1)
                {
                  alert("You have already selected this character type. Select a new character type of (1 Through 4)")
                } 
                else
                {
                  //alert("Value does not exists!")
                  ctypeArr.push(4);
                }
                break;
          default:
                window.alert("You did not pick a valid charcter type. \
                    Try again select at least one Character type."); 
                moreChoice = true;    
         }
        
      }   
      if (ctypeArr.length <= 4)
      {
          var strYesNo = prompt("Do you want to enter more character types? Enter Y or N");
          var YesNo = strYesNo.toUpperCase();
          if (YesNo === "Y") 
          { 
            moreChoice = true;
          }
          else if (YesNo === "N")
          {
            moreChoice = false;
          }   
          else
          {
            alert ("Invalid Choice. Please try again.."); 
            moreChoice = true; 
          }
      }
        else
        {
          moreChoice = false;
        }  
  }

return ctypeArr;
}

//Function to generate password
function generatePassword(pLength, cType, ctypeLen)
{
  generatedPassword = '';
  keyListAlpha = "qwertyuiopasdfghjklzxcvbnm";
  keyListAlphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  keyListInt="123456789";
  keyListSpec="!@#$%^&*(){}[]=<>/,.";
  
   for (j=0;j<ctypeLen;j++) 
   {
       if (cType[j] === 1)
      {
          for (i=0;i<pLength;i++)
          {
            generatedPassword+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
          }
        }    
       else if (cType[j] === 2)
        {
              for (i=0;i<pLength;i++)
              {
                generatedPassword+=keyListAlphaU.charAt(Math.floor(Math.random()*keyListAlphaU.length));
              }
        } 
        else if (cType[j] === 3)
        {
              for (i=0;i<pLength;i++)
              {
                generatedPassword+=keyListInt.charAt(Math.floor(Math.random()*keyListInt.length));
              }
        }  
        else if (cType[j] === 4)
        {
              for (i=0;i<pLength;i++)
              {
                generatedPassword+=keyListSpec.charAt(Math.floor(Math.random()*keyListSpec.length));
              }
        }           
    }
   
  generatedPassword=generatedPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
  const finalPassword = generatedPassword.slice(0, pLength);
  return finalPassword;
}


