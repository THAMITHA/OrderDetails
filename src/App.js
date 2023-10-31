import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import orderReducer from "./orderReducer"; // Import your order reducer
import MainScreen from "./MainScreen"; // Import your main screen component

// Create the Redux store
const store = createStore(orderReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Order Management App</h1>
        <MainScreen />
      </div>
    </Provider>
  );
}

export default App;
