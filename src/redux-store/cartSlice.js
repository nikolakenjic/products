import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    remveFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
