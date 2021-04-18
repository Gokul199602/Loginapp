import React from 'react';
import Header from '../Header/Header';
import Button from "../Button/Button";
import Registration from "../Form/Registration/Registration"


const RegisterForm = () => (
   <div className="main">
   <div className="main--topContainer">
     <Header />   
     <Registration /> 
    </div>
   <div className="buttonElement text-center">
     <Button text="가입하기" link="/login"/>
     <div>
       <span className="normal--text--2 mg-sm">이미 계정이 있으신가요? 로그인</span>
     </div>
   </div>
 </div>
);

export default RegisterForm;