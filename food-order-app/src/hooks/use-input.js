import { useState } from 'react';

const useInput = (validateFunc) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const blurHandler = (event) => {
    setValue((prev) => event.target.value);
    if (validateFunc(event.target.value)) setIsValid(true);
  };

  const changeHandler = (event) => {
    setValue((prev) => event.target.value);
    if (validateFunc(event.target.value)) setIsValid(true);
  };

  return {
    value,
    isValid,
    blurHandler,
    changeHandler,
  };
};
export default useInput;
