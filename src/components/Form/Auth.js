const Auth = (input,type) => {
  var errorTextArr = [],
  isValid = true;
  switch(type)
  {
    case "email":
        if(!input)
        {
            errorTextArr.push("This Field is Required");
            isValid = false;
        }
        else if(!ValidateEmail(input))
        {
            errorTextArr.push("Invalid Email");
            isValid = false;
        }
    break;
    case "password":
        if(!input)
        {
            errorTextArr.push("This Field is Required");
            isValid = false;
        }
        else if(!(input.length>3 && input.length<13))
        {
            errorTextArr.push("The password should be between 2 and 12");
            isValid = false;
            localStorage.isAut = "true";
        }
    break;
  }
  var returnValue = {
        error:errorTextArr,
        isValid:isValid
  }
  return returnValue;
};

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}

export default Auth;