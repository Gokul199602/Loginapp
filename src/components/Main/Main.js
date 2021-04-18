import React from 'react';
import styles from './Main.css';
import Button from "../Button/Button";
import LogoText from "../svg/LogoTxt";
import Logo from "../svg/Logo";

const Main = () => (
  <div className="main">
       <div className="main--topContainer">
        <LogoText/>
        <Logo />
        <div className="text-gradient text-center mg-md">
          <span>Stay on the top of your finance</span>
        </div>
        <div className="text-center normal--text mg-sm">
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</span>
        </div>
       </div>
    <div className="buttonElement text-center">
      <Button text="가입하기" link="/register"/>
      <div>
        <span className="normal--text--2 mg-xs">로그인</span>
      </div>
    </div>
  </div>
);

export default Main;