// Define action types
const ADD_ORDER = 'ADD_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';

// Action creators
export const addOrder = (order) => {
  return {
    type: ADD_ORDER,
    payload: order,
  };
};

export const updateOrder = (order) => {
  return {
    type: UPDATE_ORDER,
    payload: order,
  };
};

export const deleteOrder = (orderId) => {
  return {
    type: DELETE_ORDER,
    payload: orderId,
  };
};
