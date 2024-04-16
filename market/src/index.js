import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeaderLogo from './header/headerLogo.jsx';
import MainSlider from './slider/mainSlider.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderLogo />
    <MainSlider />
  </React.StrictMode>
);

reportWebVitals();