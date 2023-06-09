import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
