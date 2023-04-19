import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteOrderById,
  fetchAllOrders,
  updateOrderComment,
  updateOrderStatus,
} from "../../api";

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

export const updateOrderStatusInStore = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ id, status }, { dispatch }) => {
    await updateOrderStatus(id, status);
    dispatch(fetchOrders());
  }
);

export const addCommentToOrder = createAsyncThunk(
  "orders/addComment",
  async ({ id, comment }, { dispatch }) => {
    await updateOrderComment(id, comment);
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
