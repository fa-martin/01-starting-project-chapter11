import { useRef , useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [validState, setValidState]= useState(true);
  const amountInputRef = useRef();  

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount= +amountInputRef.current.value;//type number
    if (enteredAmount < 1 || enteredAmount >5 ){
      setValidState(false);
      return ;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
      {!validState && <p>Please enter a valid value!.(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
