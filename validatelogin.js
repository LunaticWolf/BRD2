function validatelogin()
{
	var userId = document.forms["myForm1"]["UserId"].value;
	var password = document.forms["myform1"]["Password"].value;


	if(!(username.search(/[^a-zA-Z0-9]+/) === -1)) 
    {
    	alert("Invalid User ID");
    	return false;
    }

    if(x==null || x==" ")
	{	
		alert("Invalid User ID");
		return false;
	}


	if(password.length < 6 )
	{
		alert("Invalid Password Length");
		return false;
	}

 }

}