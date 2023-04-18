import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: null,
    expiresIn: null,
    userData: null,
  },
  reducers: {
    setUserToken(state, action) {
      state.userToken = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    clearUserToken(state) {
      state.userToken = null;
      state.userId = null;
      state.expiresIn = null;
      state.user = null;
    },
  },
});

export const { setUserToken, setUserData, clearUserToken } = authSlice.actions;
export default authSlice.reducer;
