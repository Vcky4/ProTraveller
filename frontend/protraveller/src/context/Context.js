// AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  counter: 0,
  user: null,
};

// Define actions
const actions = {
  INCREMENT: 'INCREMENT',
  SET_USER: 'SET_USER',
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Create a context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for using the context
export const useAppContext = () => useContext(AppContext);
