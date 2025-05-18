import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);