// Import the action types from the action file
import { ADD_ORDER, UPDATE_ORDER, DELETE_ORDER } from "./orderActions";

// Define the initial state for orders
const initialState = {
  orders: [],
};

// Define the order reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case UPDATE_ORDER:
      const updatedOrders = state.orders.map((order) =>
        order.id === action.payload.id ? { ...order, ...action.payload } : order
      );
      return {
        ...state,
        orders: updatedOrders,
      };

    case DELETE_ORDER:
      const filteredOrders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      return {
        ...state,
        orders: filteredOrders,
      };

    default:
      return state;
  }
};

export default orderReducer;
