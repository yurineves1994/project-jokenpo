import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './templates/Home';
import { GlobalStyle } from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
);
