import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlide = createSlice({
  name: 'Counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlide.reducer,
});

export const counterActions = counterSlide.actions;

export default store;
