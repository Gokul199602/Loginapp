import React, {useState,useEffect}  from 'react';
import styles from './Login.css';
import Auth from "../Auth";

const Login = (props) => {
  const [formData,setFormData] = useState({
    email:{
      input:"",
      name:"email",
      isRequired:true,
      isValid:true,
      erroTextArr:[]
    },
    password:{
      input:"",
      name:"password",
      isRequired:true,
      isValid:true,
      erroTextArr:[]
    }
  });
  useEffect(()=>{
    if(props.isValidate)
    {
      var checkValidation = true;
      var errorText = [];
      for (const property in formData) {
        if(!Auth(formData[property].input,formData[property].name).isValid)
        {
          let errorText = Auth(formData[property].input,formData[property].name).error;
          checkValidation = false;
          setFormData(prevState => ({
            ...prevState,
            [property]: {
              name:formData[property].name,
              input:formData[property].input,
              isRequired:true,
              isValid:false,
              erroTextArr:errorText
            }
        }));
        props.validation(false);
        }
      }
      if(checkValidation)
      {
        console.log("You are logged in");
        if(formData.email.input == "test@luxpmsoft.com" &&
        formData.password.input == "test1234!")
        {
          window.location.href="/home";
          localStorage.setItem("isLogged",true);
          props.validation(true);
        }
        else
        {
          alert("Invalid username or password");
          props.validation(false);
        }
      }
    }
  });
  const formHandler = (event)=>
  {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: {
        name:event.target.name,
        input:event.target.value,
        isRequired:true,
        isValid:true,
        erroTextArr:[]
      }
  }));
  }
  return(
  <form className="form mg-lg">
  <label>
     Email
     <input type="email" name="email" placeholder="Email" className={formData.email.isValid?"":"error"} value={formData.email.input} onChange={formHandler} />
     {formData.email.erroTextArr.map((err,index)=>{
        return (<span key={index} className="errorText">{err}</span>)
     })}
   </label>
   <label>
   로그인
     <input type="password" name="password" placeholder="Password" className={formData.password.isValid?"":"error"} value={formData.password.input} onChange={formHandler} />
     {formData.password.erroTextArr.map((err,index)=>{
       return (<span key={index} className="errorText">{err}</span>)
     })}
   </label>
   <span className="textEl">
     비밀번호 찾기
   </span>
   </form>
  )
};

export default Login;