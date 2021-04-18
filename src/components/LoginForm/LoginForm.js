import React,{useState}  from 'react';
import Header from '../Header/Header';
import Button from "../Button/Button";
import Login from "../Form/Login/Login";

const LoginForm = () => {
  const [isValidate,setisValidate] = useState(false);
  const loginButton = () => {
    setisValidate(true);
  }
  const validation = (check) => {
    setisValidate(check);
  }
  return(
  <div className="main">
   <Header />
   <Login isValidate={isValidate} validation={validation}/>
   <div className="buttonElement text-center">
     <Button text="가입하기" eventFunction={loginButton} />
     <div>
       <span className="normal--text--2 mg-sm">로그인</span>
     </div>
   </div>
 </div>
  )
};

export default LoginForm;