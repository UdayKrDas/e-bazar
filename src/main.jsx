import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ClerkProvider} from '@clerk/react'

const clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!clerk_key){
  throw new Error('Key was not found')
}

console.log(clerk_key);


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerk_key} >
      <App/>
    </ClerkProvider>
  </BrowserRouter>,
)
