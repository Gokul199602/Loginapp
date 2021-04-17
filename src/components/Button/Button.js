import React from 'react';
import styles from './Button.css';

const Button = (props) => {
  let buttonText = props.text;
  return(
  <div className="Button">
      <button className="mainButton">{buttonText}</button>
  </div>
  )
};

export default Button;