import React, { createContext, useContext, useReducer } from 'react'

// Prepares the data layer
export const StateContext = createContext();

// Wraps the app and provide the data layer
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);