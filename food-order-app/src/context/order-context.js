import React, { useState } from 'react';

const OrderContext = React.createContext({
  orders: [],
  addMeal: (meal) => {},
  addAmount: (id) => {},
  removeAmount: (id) => {},
  submitOrder: () => {},
});

export const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([]);

  const addMeal = (m, amount) => {
    setOrders((prev) => {
      const newMeal = [...prev];
      const position = prev.findIndex((meal) => meal.id === m.id);
      if (position === -1) {
        newMeal.push({ ...m, amount: +amount });
      } else {
        newMeal[position].amount += +amount;
      }
      return newMeal;
    });
  };

  const addAmount = (id) => {
    setOrders((prev) => {
      const newMeal = [...prev];
      const position = prev.findIndex((meal) => meal.id === id);
      newMeal[position].amount++;
      return newMeal;
    });
  };
  const removeAmount = (id) => {
    setOrders((prev) => {
      const newMeal = [...prev];
      const position = prev.findIndex((meal) => meal.id === id);
      newMeal[position].amount--;
      if (newMeal[position].amount === 0) {
        return newMeal.filter((meal) => meal.id !== id);
      }
      return newMeal;
    });
  };

  const submitOrder = () => {
    // TODO: Axios POST /orders
    setTimeout(() => {
      console.log('Ordering...');
    }, 3000);
  };
  return (
    <OrderContext.Provider
      value={{
        orders,
        addMeal,
        addAmount,
        removeAmount,
        submitOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
