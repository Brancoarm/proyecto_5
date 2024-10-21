import React from 'react';
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Importa el componente principal
import './index.css'; // Estilos globales de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap

// Renderiza la aplicación dentro del div con id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
