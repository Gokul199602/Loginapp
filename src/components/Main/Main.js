import React from 'react';
import styles from './Main.css';
import Button from "../Button/Button";
import LogoText from "../svg/LogoTxt";
import Logo from "../svg/Logo";

const Main = () => (
  <div className={styles.Main}>
    <LogoText/>
    <Logo />
    <div className="text text-center">
       <span>Stay on the top of your finance</span>
    </div>
    <div className="text-center">
      <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</span>
    </div>
    <Button text="가입하기"/>
    <div className="text-center">
      <span>로그인</span>
    </div>
  </div>
);

export default Main;