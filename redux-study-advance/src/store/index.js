import { configureStore } from '@reduxjs/toolkit';
import cartModule from './cart';
import itemModule from './items';
import toggleModule from './toggle';

const store = configureStore({
  reducer: { cart: cartModule, toggle: toggleModule, items: itemModule },
});

export default store;
