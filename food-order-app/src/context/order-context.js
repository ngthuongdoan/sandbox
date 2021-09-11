import React, { useState } from 'react';

const OrderContext = React.createContext({
  orders: [],
  addMeal: (meal) => {},
});

export const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([]);

  const addMeal = (meal) => {
    setOrders((prev) => {
      // TODO: Remove old meal with id
      return [...prev, meal];
    });
    console.log(meal);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addMeal,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
