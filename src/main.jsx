import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/indexstyle.css'
import '../src/css/detallestyle.css'
import '../src/css/perfilstyle.css'
import '../src/css/proyectostyle.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
