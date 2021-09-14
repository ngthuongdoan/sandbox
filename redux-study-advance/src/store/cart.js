import { createSlice } from '@reduxjs/toolkit';

const cartSlide = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    add(state, { payload }) {
      const position = state.items.findIndex((item) => item.id === payload.id);
      if (position === -1) {
        state.items.push({
          id: payload.id,
          title: payload.title,
          price: payload.price,
          description: payload.description,
          quantity: 1,
        });
      } else {
        state.items[position].quantity++;
      }
    },
    remove(state, { payload }) {
      const position = state.items.findIndex((item) => item.id === payload.id);
      state.items[position].quantity--;
      if (state.items[position].quantity === 0) {
        state.items = state.items.filter((item) => item.id !== payload.id);
      }
    },
  },
});

export const cartActions = cartSlide.actions;
export default cartSlide.reducer;
