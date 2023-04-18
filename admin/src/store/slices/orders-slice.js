import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllOrders } from "../../api";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { dispatch }) => {
    const orders = await fetchAllOrders();
    console.log(orders);
    dispatch(setOrders(orders));
  }
);
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders(state, action) {
      console.log("orderstate", action.payload);
      state.orders = action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
