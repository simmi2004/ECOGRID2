// import { createRoot } from 'react-dom/client';

// function Hello() {
//   return (
//     <h1>hello react</h1>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Hello />
// );

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
