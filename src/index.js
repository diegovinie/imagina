import React from 'react'
import ReactDOM from 'react-dom'
import './theme.css'
import 'font-awesome/css/font-awesome.css'
import App from './App'

import {initialState, reducer} from './store/state'
import {StateProvider} from './store/StateContext'

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>, document.getElementById('root')
)
