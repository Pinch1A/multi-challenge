import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-full w-full flex items-center justify-center p-6">
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
