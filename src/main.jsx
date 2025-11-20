import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
