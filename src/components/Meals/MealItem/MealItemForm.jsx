import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();
  const [isValidInput, setIsValidInput] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredNumber = +enteredAmount;
    if (enteredNumber < 1 || enteredNumber > 999) {
      setIsValidInput(false);
      return;
    }

    onAddToCart(enteredNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `Amount + ${id}`,
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidInput && <p>Please enter a valid Amount (1-999)</p>}
    </form>
  );
};

export default MealItemForm;
