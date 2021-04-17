import React from 'react';
import styles from './LoginForm.css';
import Header from '../Header/Header';
import Button from "../Button/Button";

const LoginForm = () => (
  <div className="main">
   <Header />
   <div className="buttonElement text-center">
     <Button text="가입하기"/>
     <div>
       <span className="normal--text--2 mg-xs">로그인</span>
     </div>
   </div>
 </div>
);

export default LoginForm;