import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para manejar la navegación

const Home = ({ searchTerm, setSearchTerm, comics, loading, handleSearch }) => {
  const navigate = useNavigate();

  // Función para navegar a los detalles de un cómic
  const fetchComicDetails = (comicId) => {
    navigate(`/details/${comicId}`); // Navega a la ruta de detalles con el ID del cómic
  };

  return (
    <div className="container">
      <div className="center-section">
        <div className="text-center mb-4">
          <img src="/marvel_logo.svg" alt="Marvel Logo" className="logo" />
        </div>
        <h1 className="text-center mb-4">- - Buscar Marvel Comics - -</h1>

        <form onSubmit={handleSearch} className="mb-4 text-center">
          <input
            type="text"
            placeholder="Nombre del comic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-box"
          />
          <button type="submit" className="btn btn-danger">Buscar</button>
        </form>

        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="results-container">
            {/* Si no hay resultados, mostramos un mensaje */}
            {comics.length === 0 ? (
              <p className="no-results">No se encontraron cómics que coincidan con la búsqueda.</p>
            ) : (
              comics.map(comic => (
                <div key={comic.id} className="comic-result">
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} className="comic-thumbnail" />
                  <div className="comic-info">
                    <h5>{comic.title}</h5>
                    <p>{comic.description ? comic.description : "Descripción no disponible"}</p>
                    <button
                      className="btn btn-info"
                      onClick={() => fetchComicDetails(comic.id)} // Navega a los detalles
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
