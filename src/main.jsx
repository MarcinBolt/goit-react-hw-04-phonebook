import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PhonebookProvider } from './Components/PhonebookContext/PhonebookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhonebookProvider>
      <App />
    </PhonebookProvider>
  </React.StrictMode>
);
