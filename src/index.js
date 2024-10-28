import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode calls useEffect() twice becz StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).
  
  // <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);


