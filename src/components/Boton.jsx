import React from "react";
import '../styles/button.css';


function Button({ text,isClickButton, onClickButton }) {
  return (
    <button
      className={ isClickButton ? 'buttonClick' : 'buttonRestart' }
      onClick = { onClickButton } >
      {text}
    </button>
  );
}

export default Button;