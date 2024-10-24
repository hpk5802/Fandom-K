import React from "react";
import classes from "utils/classes";

function GradientButton({ children, name, handleClick }) {
  return (
    <button
      type='button'
      className={classes("button-gradient", name)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default GradientButton;
