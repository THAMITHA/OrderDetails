import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderReducer"; // Import your order reducer

const store = configureStore({
  reducer: {
    orders: orderReducer, // Assign your order reducer to the 'orders' slice of the store
    // You can add more slices and reducers here as needed
  },
});

export default store;
