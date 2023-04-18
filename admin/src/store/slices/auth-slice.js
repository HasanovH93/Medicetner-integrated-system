import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: null,
    userId: null,
    expiresIn: null,
    user: null,
  },
  reducers: {
    setUserToken(state, action) {
      console.log(action.payload.expiresIn);
      state.userToken = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
    },
    clearUserToken(state) {
      state.userToken = null;
      state.userId = null;
      state.expiresIn = null;
      state.user = null;
    },
  },
});

export const { setUserToken, clearUserToken, setUser } = authSlice.actions;
export default authSlice.reducer;
