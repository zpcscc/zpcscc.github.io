import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/react';
import { GlobalStyle } from './Styled';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${GlobalStyle}
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
