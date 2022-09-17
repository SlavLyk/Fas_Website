import React from "react";
import "./Button.css";

//array of available styles that we will write in our css
const styles = ["btn--primary", "btn--secondary"];

function Button({ children, type, onClick, buttonStyle, btnImg }) {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      <div className="btnText">{children}</div>
      <div className="btnImgContainer">
        <img src={btnImg} alt="" className="btnImg" />
      </div>
    </button>
  );
}

export default Button;
