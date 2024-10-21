import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router, Routes y Route
import './index.css';
import ErrorBoundary from './components/ErrorBoundary'; // Asegúrate de importar tu ErrorBoundary
import Home from './components/Home'; // Importa el componente de Home
import ComicDetails from './components/ComicDetails'; // Importa el componente de detalles de cómics

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shouldSearch, setShouldSearch] = useState(false);

  // Manejo de búsqueda de cómics
  useEffect(() => {
    if (shouldSearch) {
      const searchComics = async () => {
        setLoading(true);
        try {
          const authResponse = await axios.get('http://localhost:5000/auth');
          const { ts, hash, publicKey } = authResponse.data;

          const response = await axios.get(`https://gateway.marvel.com/v1/public/comics`, {
            params: {
              apikey: publicKey,
              hash,
              ts,
              titleStartsWith: searchTerm,
              limit: 10
            }
          });

          const filteredComics = response.data.data.results.filter(comic => comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available');
          setComics(filteredComics);
        } catch (error) {
          console.error('Error fetching comics:', error);
        } finally {
          setLoading(false);
          setShouldSearch(false);
        }
      };

      searchComics();
    }
  }, [shouldSearch, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setShouldSearch(true);
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
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                comics={comics}
                loading={loading}
                handleSearch={handleSearch}
              />
            }
          />

          {/* Ruta para los detalles de un cómic */}
          <Route path="/details/:comicId" element={<ComicDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
