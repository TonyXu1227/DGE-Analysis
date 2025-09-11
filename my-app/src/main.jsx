import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Hello() {
  return (
    <>
    <h1>Hello There</h1>
    <h1>Hello great world!</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Hello />
);