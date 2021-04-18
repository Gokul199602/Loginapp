import React from 'react';
import styles from './Button.css';
import {Link} from "react-router-dom";

const Button = (props) => {
  let buttonText = props.text,
  callback = props.eventFunction,
  link =  props.link;
  const buttonAction = ()=>
  {
    callback();
  }
  return(
  <div className="Button">
    {link?<Link to={link}><button className="mainButton">{buttonText}</button></Link>:<button className="mainButton" onClick={buttonAction}>{buttonText}</button>}
  </div>
  )
};

export default Button;