import { createSlice } from '@reduxjs/toolkit';

const toggleSlide = createSlice({
  name: 'toggle',
  initialState: {
    isShow: false,
  },
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const toggleActions = toggleSlide.actions;
export default toggleSlide.reducer;
