import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import './index.css';
import Portfolio from './Portfolio';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Portfolio />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

