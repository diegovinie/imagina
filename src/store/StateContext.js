import React, {createContext, useContext, useReducer} from 'react'
import {initialState, reducer} from './state'

export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

export const TestContext = ({children}) => (
  <StateProvider initialState={initialState} reducer={reducer}>
    { children }
  </StateProvider>
)
