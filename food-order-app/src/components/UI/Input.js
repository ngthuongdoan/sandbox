import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
