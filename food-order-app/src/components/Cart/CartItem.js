import React, { useContext } from 'react';
import OrderContext from '../../context/order-context';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const context = useContext(OrderContext);
  const price = `$${props.price.toFixed(2)}`;

  const removeAmount = () => {
    context.removeAmount(props.id);
  };

  const addAmount = () => {
    context.addAmount(props.id);
  };

  return (
    <div className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={removeAmount}>
          −
        </button>
        <button type="button" onClick={addAmount}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
