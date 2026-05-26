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
import axios from 'axios'

// Add a request interceptor to include the JWT token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
