import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate se utiliza para manejar la navegación entre rutas

const Home = ({ searchTerm, setSearchTerm, comics, loading, handleSearch }) => {
  const navigate = useNavigate(); // Hook de React Router que permite la navegación programática

  // Función para navegar a los detalles de un cómic cuando se selecciona uno
  const fetchComicDetails = (comicId) => {
    navigate(`/details/${comicId}`); // Navega a la ruta de detalles usando el ID del cómic
  };

  return (
    <div className="container">
      <div className="center-section">
        {/* Logo de Marvel centrado */}
        <div className="text-center mb-4">
          <img src="/marvel_logo.svg" alt="Marvel Logo" className="logo" />
        </div>

        {/* Título de la página */}
        <h1 className="text-center mb-4">- - Buscar Marvel Comics - -</h1>

        {/* Formulario de búsqueda */}
        <form onSubmit={handleSearch} className="mb-4 text-center">
          <input
            type="text"
            placeholder="Nombre del comic..." // Texto de sugerencia para el input
            value={searchTerm} // Muestra el valor del término de búsqueda actual
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado cuando el usuario escribe
            className="search-box" // Clase CSS para el cuadro de búsqueda
          />
          <button type="submit" className="btn btn-danger">Buscar</button> {/* Botón para iniciar la búsqueda */}
        </form>

        {/* Si la búsqueda está en proceso, muestra un spinner de carga */}
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="results-container">
            {/* Si no hay resultados, muestra un mensaje al usuario */}
            {comics.length === 0 ? (
              <p className="no-results">No se encontraron cómics que coincidan con la búsqueda.</p>
            ) : (
              // Si hay resultados, muestra los cómics en una lista
              comics.map(comic => (
                <div key={comic.id} className="comic-result">
                  {/* Imagen del cómic */}
                  <img 
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                    alt={comic.title} 
                    className="comic-thumbnail" 
                  />
                  {/* Información del cómic */}
                  <div className="comic-info">
                    <h5>{comic.title}</h5>
                    <p>{comic.description ? comic.description : "Descripción no disponible"}</p>
                    <button
                      className="btn btn-info"
                      onClick={() => fetchComicDetails(comic.id)} // Navega a la página de detalles del cómic
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
