import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetData } from 'react-helmet-async'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvide>
      <App />
    </HelmetProvide>
  </StrictMode>
);
