import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// import './assets/css/loader.css'
// import './assets/css/medias.css'

import './assets/css/animacoes.css'
import './assets/css/style.css'
import './assets/css/estrelas.css'


import './assets/js/estrelas.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
