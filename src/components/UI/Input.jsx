import classes from "./Input.module.css";

const Input = ({ label, input }) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
