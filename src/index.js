import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'assets/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
