import React, { useState, useEffect, useContext } from 'react';

import OrderContext from '../../../context/order-context';
import Modal from '../Modal';
import Cart from '../../Cart/Cart';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const context = useContext(OrderContext);
  const [bump, setBump] = useState(false);
  const orders = context.orders;

  const totalAmount = orders.reduce(
    (previous, current) => previous + current.amount,
    0
  );
  useEffect(() => {
    // *Prevent first time run
    if (orders.length === 0) {
      return;
    }
    setBump(true);
    // *Prevent reset state too soon
    const timer = setTimeout(() => {
      setBump(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [orders]);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Modal close={closeModal}>
          <Cart close={closeModal}></Cart>
        </Modal>
      )}
      <button
        className={`${classes.button} ${bump ? classes.bump : ''}`}
        onClick={openModal}
      >
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.title}>Your Cart</span>
        <span className={classes.badge}>{totalAmount}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
