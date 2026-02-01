import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ColorProvider } from './context/colorContext.tsx'
import { AudioProvider } from './context/audioContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <ColorProvider>
      <App />
      </ColorProvider>
      </AudioProvider>
  </StrictMode>,
)
