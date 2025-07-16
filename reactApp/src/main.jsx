import ReactDOM from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)
