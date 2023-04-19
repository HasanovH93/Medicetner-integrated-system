import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteOrderById, fetchAllOrders, updateOrder } from "../../api";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { dispatch }) => {
    const orders = await fetchAllOrders();
    dispatch(setOrders(orders));
  }
);

export const deleteProduct = createAsyncThunk(
  "orders/deleteProduct",
  async (id, { dispatch }) => {
    await deleteOrderById(id);
    dispatch(fetchOrders());
  }
);

export const updateOrderInStore = createAsyncThunk(
  "orders/updateOrder",
  async ({ id, status, comment }, { dispatch }) => {
    await updateOrder(id, status, comment);
    dispatch(fetchOrders());
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
