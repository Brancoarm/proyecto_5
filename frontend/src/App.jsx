import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router, Routes y Route para la navegación entre páginas
import './index.css';
import ErrorBoundary from './components/ErrorBoundary'; // Importa ErrorBoundary para manejo de errores en los componentes
import Home from './components/Home'; // Importa el componente Home para la página principal
import ComicDetails from './components/ComicDetails'; // Importa el componente ComicDetails para la vista de detalles de un cómic

const App = () => {
  // Definición de los estados para la búsqueda
  const [searchTerm, setSearchTerm] = useState(''); // Almacena el término de búsqueda ingresado por el usuario
  const [comics, setComics] = useState([]); // Almacena los resultados de los cómics obtenidos de la API
  const [loading, setLoading] = useState(false); // Indica si la solicitud a la API está en curso
  const [shouldSearch, setShouldSearch] = useState(false); // Controla cuándo debe ejecutarse la búsqueda

  // useEffect para manejar la búsqueda de cómics cuando shouldSearch es true
  useEffect(() => {
    if (shouldSearch) {
      // Función asíncrona para buscar cómics en la API de Marvel
      const searchComics = async () => {
        setLoading(true); // Establece el estado de "cargando" mientras se hace la solicitud
        try {
          // Solicita las credenciales necesarias para autenticar la API
          const authResponse = await axios.get('http://localhost:5000/auth');
          const { ts, hash, publicKey } = authResponse.data;

          // Realiza la solicitud a la API de Marvel para obtener los cómics
          const response = await axios.get(`https://gateway.marvel.com/v1/public/comics`, {
            params: {
              apikey: publicKey,
              hash,
              ts,
              titleStartsWith: searchTerm, // Filtra los cómics según el término de búsqueda
              limit: 10 // Limita los resultados a 10 cómics
            }
          });

          // Filtra los cómics que no tienen imagen disponible
          const filteredComics = response.data.data.results.filter(comic => comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available');
          
          setComics(filteredComics); // Almacena los cómics filtrados en el estado
        } catch (error) {
          // Manejo de errores en caso de que falle la solicitud a la API
          console.error('Error fetching comics:', error);
        } finally {
          setLoading(false); // Finaliza el estado de "cargando"
          setShouldSearch(false); // Resetea el estado para evitar que la búsqueda se ejecute repetidamente
        }
      };

      searchComics(); // Llama a la función de búsqueda
    }
  }, [shouldSearch, searchTerm]); // Ejecuta el efecto cuando cambia shouldSearch o searchTerm

  // Función para manejar el envío del formulario de búsqueda
  const handleSearch = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    setShouldSearch(true); // Activa la búsqueda estableciendo shouldSearch a true
  };

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          {/* Ruta para la página principal de búsqueda de cómics */}
          <Route
            path="/"
            element={
              <Home
                searchTerm={searchTerm} // Pasa el término de búsqueda como prop al componente Home
                setSearchTerm={setSearchTerm} // Pasa la función para actualizar el término de búsqueda
                comics={comics} // Pasa los cómics obtenidos como prop al componente Home
                loading={loading} // Pasa el estado de carga como prop
                handleSearch={handleSearch} // Pasa la función de manejo de búsqueda al componente Home
              />
            }
          />

          {/* Ruta para la página de detalles de un cómic */}
          <Route path="/details/:comicId" element={<ComicDetails />} /> {/* El parámetro comicId es dinámico */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
