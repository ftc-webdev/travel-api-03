import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.css';
import { NotificationProvider } from './context/Notification'
import User from './components/User'
import ErrorBoundary from './components/ErrorBoundary'
import Flight from './components/Flight'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <User.Provider >
          <NotificationProvider >
            <Flight.Provider> 
              <App />
            </Flight.Provider> 
          </NotificationProvider >
        </User.Provider>
      </BrowserRouter>
    </ErrorBoundary>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
