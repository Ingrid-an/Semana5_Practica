import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// CSR: React toma el <div id="root"> vacío de index.html y construye el DOM aquí
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
