import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import App from './app/App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
