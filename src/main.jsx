import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme.css'
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById('beleasing')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
