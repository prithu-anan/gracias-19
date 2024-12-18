import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'https://cse-19-farewell-hunt-5up3r-53cr37-b4ck3nd.azurewebsites.net/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
