import React from 'react';
import styles from './Button.css';
import {browserHistory} from "react-router-dom";

const Button = (props) => {
  let buttonText = props.text,
  callback = props.eventFunction,
  link =  props.link;
  const buttonAction = ()=>
  {
    if(link)
    window.location.href=link;
    else
    callback();
  }
  return(
  <div className="Button">
      <button className="mainButton" onClick={buttonAction}>{buttonText}</button>
  </div>
  )
};

export default Button;