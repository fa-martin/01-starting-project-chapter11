import classes from "./Input.module.css";

const Input = (props) => {
  return (
  <div className={classes.Input}>
    <label htmlFor={props.input.id}> {props.text}</label>
    <input {...props.input} />
  </div>);
};

export default Input;
