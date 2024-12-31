import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Exmp from './Exmp.jsx'
//import './index.css'
import App from './App.jsx'
import Textbox from './Textbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Exmp/> */}
     <App /> 
     {/* <Textbox /> */}
  </StrictMode>,
)
