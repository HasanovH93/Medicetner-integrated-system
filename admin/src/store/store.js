import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import sidebarSlice from "./slices/sidebar-slice";
import authReducer, { setUserToken, clearUserToken } from "./slices/auth-slice";

const persistConfig = {
  key: "flone",
  version: 1.1,
  storage,
};

export const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  auth: authReducer,
});

const autoLogoutMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/setUserToken") {
    const { expiresIn } = action.payload;
    setTimeout(() => {
      store.dispatch(clearUserToken());
    }, expiresIn * 1000);
  }

  return next(action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(autoLogoutMiddleware), // Add the autoLogoutMiddleware here
});

export const persistor = persistStore(store);
