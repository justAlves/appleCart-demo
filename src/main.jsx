import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './screens/Store'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Store />
    </BrowserRouter>
  </React.StrictMode>,
)
