import React, { useContext } from 'react';

import OrderContext from '../../context/order-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const context = useContext(OrderContext);

  const totalAmount = context.orders
    .reduce((prev, current) => {
      return prev + current.amount * current.price;
    }, 0)
    .toFixed(2);

  return (
    <>
      <ul className={classes['cart-items']}>
        {context.orders.map((meal) => (
          <li key={meal.id}>
            <CartItem
              id={meal.id}
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
            ></CartItem>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          type="button"
          onClick={props.close}
        >
          Close
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={context.submitOrder}
        >
          Order
        </button>
      </div>
    </>
  );
};

export default Cart;
