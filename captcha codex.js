function Captcha()
{
                     var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
                     var i;
                     for (i=0;i<6;i++)
                     {
                       var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                       var e = alpha[Math.floor(Math.random() * alpha.length)];
                       var f = alpha[Math.floor(Math.random() * alpha.length)];
                       var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
                    
                    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
                    document.getElementById("mainCaptcha").value = code
}




function ValidCaptcha()
{
  var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
  var string2 = removeSpaces(document.getElementById('txtInput').value);
  if (string1 == string2)
  {
    return alert("Test Verified. You can now Register Yourself.");
  }
  else{        
    return alert("Incorrect Captcha!! Re-Enter the Captcha Code, Please!");
  }
}



function removeSpaces(string)
{
  return string.split(' ').join('');
}




function generateID()
{
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
                     var i;
             for(i=0;i<6;i++)
             {

                      var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                       var e = alpha[Math.floor(Math.random() * alpha.length)];
                       var f = alpha[Math.floor(Math.random() * alpha.length)];
                       var g = alpha[Math.floor(Math.random() * alpha.length)];

             }                     

             var code = a + '' + b + '' + '' + c + '' + d + '' + e + ''+ f + '' + g;
             document.forms["myform2"]["NewUserId"].value = code;


}


function validateform()
{
  var username = document.getElementById('UserName').value;
  var password1 = document.getElementById('Password1').value;
  var password2 = document.getElementById('Password2').value;
  var newuserid = document.getElementById('NewUserId').value;
   
   var userid = document.getElementById('UserId').value

var password = document.getElementById('Password').value;

  if(username="" || username==null)
  {
    alert("Invalid User Name");
    return false;
  }

  if(!(username.search(/[^a-zA-Z0-9]+/) === -1)) 
    {
      alert("Invalid Customer Name");
      return false;
    }



    if(password1!=password2)
    {
      alert("password mis-match");
      return false;
    }

    if(newuserid.length!=7 || userid.length!=7)
    {
      alert("Invalid UserID: Length must be 7: only including a-zA-Z0-9 characters ");
      return false;
    }

     if(!(userid.search(/[^a-zA-Z0-9]+/) === -1))
     {
      alert("Invalid User ID");
      return false;
     } 

      if(!(newuserid.search(/[^a-zA-Z0-9]+/) === -1))
      {
        alert("Invalid User ID");
        return false;
      } 


      if(password.length!=6)
      {
          alert("Invalid Password Length");
          return false;
      }

}