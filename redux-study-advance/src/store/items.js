import { createSlice } from '@reduxjs/toolkit';

const itemSlide = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },
  reducers: {
    init(state, { payload }) {
      state.items = payload;
    },
  },
});

export const itemActions = itemSlide.actions;
export const fetchItems = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    dispatch(itemActions.init(data));
  };
};
export default itemSlide.reducer;
