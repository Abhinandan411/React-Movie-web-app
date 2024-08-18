import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import First from './First.jsx'
import { Provider } from 'react-redux'
import { store } from './redux-toolkit/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <First />
  </Provider>,
)
