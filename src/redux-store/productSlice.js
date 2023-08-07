import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../utils/StatusCode';

const productInitialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const cartAction = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
  const resolve = await fetch('https://fakestoreapi.com/products');
  const data = await resolve.json();
  return data;
});
