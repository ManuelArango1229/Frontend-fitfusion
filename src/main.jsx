import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(import.meta.env);

createRoot(document.getElementById('root')).render(
  <App />
)
