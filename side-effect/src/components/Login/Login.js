import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import InputField from './InputField';

const userInputReducer = (oldValue, newValue) => {
  let userInput = { ...oldValue };
  switch (newValue.type) {
    case 'USER_EMAIL':
      userInput.email.value = newValue.value;
      userInput.email.isValid = newValue.value.includes('@');
      break;
    case 'USER_PASSWORD':
      userInput.password.value = newValue.value;
      userInput.password.isValid = newValue.value.trim().length > 6;
      break;
  }
  return userInput;
};

const Login = (props) => {
  const context = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [userInput, dispatchUserInput] = useReducer(userInputReducer, {
    email: {
      value: '',
      isValid: null,
    },
    password: {
      value: '',
      isValid: null,
    },
  });

  // let emailValid = userInput.email.valid;
  // let passwordValid = userInput.password.valid;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Use Effect');
      setFormIsValid(userInput.email.isValid && userInput.password.isValid);
    }, 1000);
    return () => {
      console.log('Clear');
      clearTimeout(timer);
    };
  }, [userInput.email.isValid, userInput.password.isValid]);

  const emailChangeHandler = (event) => {
    dispatchUserInput({ type: 'USER_EMAIL', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchUserInput({ type: 'USER_PASSWORD', value: event.target.value });
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      context.onLogin(userInput.email.value, userInput.password.value);
    } else if (!userInput.email.isValid) {
      emailRef.current.activate();
    } else {
      passwordRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputField
          type="email"
          id="email"
          label="Email"
          isValid={userInput.email.isValid}
          value={userInput.email.value}
          onChange={emailChangeHandler}
          onBlur={emailChangeHandler}
        />
        <InputField
          type="password"
          id="password"
          label="Password"
          isValid={userInput.password.isValid}
          value={userInput.password.value}
          onChange={passwordChangeHandler}
          onBlur={passwordChangeHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
