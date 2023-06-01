import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Route/route.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
