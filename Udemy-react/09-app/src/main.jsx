import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './componentes/UseState/CounterApp'
import HooksApp from './HooksApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp/>
  </React.StrictMode>
)
