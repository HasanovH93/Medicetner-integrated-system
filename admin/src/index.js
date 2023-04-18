import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import { fetchOrders } from "./store/slices/orders-slice";
import "./assets/scss/style.scss";

const renderApp = async () => {
  try {
    await store.dispatch(fetchOrders());
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <PersistProvider>
        <App />
      </PersistProvider>
    </Provider>
  );
};

renderApp();
