import { useState } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import classes from './Checkout.module.css';

const toppings = [
  {
    name: 'Capsicum',
    price: 1.2,
  },
  {
    name: 'Paneer',
    price: 2.0,
  },
  {
    name: 'Red Paprika',
    price: 2.5,
  },
  {
    name: 'Onions',
    price: 3.0,
  },
  {
    name: 'Extra Cheese',
    price: 3.5,
  },
  {
    name: 'Baby Corns',
    price: 3.0,
  },
  {
    name: 'Mushroom',
    price: 2.0,
  },
];

const Checkout = (props) => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    blurHandler: nameBlurHandler,
    changeHandler: nameChangeHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: numberInput,
    isValid: numberIsValid,
    blurHandler: numberBlurHandler,
    changeHandler: numberChangeHandler,
  } = useInput((value) => +value < 0);

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  const confirmHandler = (event) => {
    event.preventDefault();
    // !IMPORTANT
    const indices = checkedState.reduce(
      (out, bool, index) => (bool ? out.concat(index) : out),
      []
    );

    let cleanCheckbox = [];
    indices.forEach((index) => {
      cleanCheckbox.push(toppings[index]);
    });
    console.log({
      name: nameInput,
      number: numberInput,
      checkbox: cleanCheckbox,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {/* Text */}
      <Input
        className={`${classes.control} ${!nameIsValid && classes.invalid}`}
        name="name"
        label="Your name"
        type="text"
        onBlur={nameBlurHandler}
        onChange={nameChangeHandler}
        value={nameInput}
      ></Input>
      {/* Number */}
      <Input
        className={`${classes.control} ${!numberIsValid && classes.invalid}`}
        name="Number"
        label="Number"
        type="number"
        onBlur={numberBlurHandler}
        onChange={numberChangeHandler}
        value={numberInput}
      ></Input>

      {/* Checkbox */}
      {toppings.map(({ name, price }, index) => {
        return (
          <li key={index}>
            <div className="toppings-list-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
              </div>
              <div className="right-section">{price}</div>
            </div>
          </li>
        );
      })}

      <div className={classes.actions}>
        <button type="button" onClick={props.close}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
