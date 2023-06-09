import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import Header from './components/Header';
import './css/style.css'
import ThemeProvider from './utils/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
        <Header/>
        <Main />
    </ThemeProvider>
  </React.StrictMode>
);
