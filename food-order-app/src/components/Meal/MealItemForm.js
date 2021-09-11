import React, { useContext, useState } from 'react';
import OrderContext from '../../context/order-context';

import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const context = useContext(OrderContext);
  const [amount, setAmount] = useState(0);
  const meal = props.meal;

  const amountInputHandler = (event) => {
    setAmount(event.target.value);
  };

  const addMeal = (event) => {
    event.preventDefault();
    context.addMeal({ ...meal, amount });
  };
  return (
    <form className={classes.form} onSubmit={addMeal}>
      <Input
        type="number"
        value={amount}
        onChange={amountInputHandler}
        name="amount"
        label="Amount"
      ></Input>
      <button type="submit" className={classes.button}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
