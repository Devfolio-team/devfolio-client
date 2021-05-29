import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import App from './app/App';
import StoreProvider from 'store/store';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);
