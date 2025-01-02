import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Exmp from './Exmp.jsx'
//import './index.css'
import App from './App.jsx'
import Textbox from './Textbox.jsx'
import Stomach from './Stomach.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exmp/>
    <Stomach name="Pass"/>
     <App /> 
     <Textbox />

  </StrictMode>,
)
