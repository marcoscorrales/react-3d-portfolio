import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18NProvider } from 'react-i18next'
import i18next from 'i18next'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18NProvider i18n={i18next}>
      <App />
    </I18NProvider>
  </React.StrictMode>,
)
