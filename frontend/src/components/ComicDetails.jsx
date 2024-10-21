import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams se utiliza para obtener el parámetro de la URL (comicId)
import axios from 'axios';

const ComicDetails = () => {
  // Obtén el ID del cómic desde la URL usando el hook useParams
  const { comicId } = useParams(); 
  
  // Estado para almacenar los detalles del cómic
  const [comic, setComic] = useState(null);
  // Estado para manejar la visualización del spinner de carga
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta cuando el componente se monta y cada vez que el comicId cambia
  useEffect(() => {
    // Función asíncrona para obtener los detalles del cómic
    const fetchComic = async () => {
      try {
        // Solicitud a un servidor local para obtener las credenciales de la API de Marvel
        const authResponse = await axios.get('http://localhost:5000/auth');
        const { ts, hash, publicKey } = authResponse.data; // Extrae el timestamp (ts), el hash y la clave pública

        // Solicitud a la API de Marvel para obtener los detalles del cómic usando el comicId
        const response = await axios.get(`https://gateway.marvel.com/v1/public/comics/${comicId}`, {
          params: {
            apikey: publicKey, // Clave pública de la API de Marvel
            hash,              // Hash generado para autenticación
            ts                 // Timestamp de la solicitud
          }
        });

        // Almacena los detalles del cómic en el estado
        const fetchedComic = response.data.data.results[0];
        setComic(fetchedComic);
      } catch (error) {
        // Manejo de errores en caso de que la solicitud falle
        console.error('Error fetching comic details:', error);
      } finally {
        // Una vez que la solicitud finaliza, se establece loading en false
        setLoading(false);
      }
    };

    fetchComic(); // Llama a la función fetchComic
  }, [comicId]); // El efecto se ejecuta cuando comicId cambia

  // Muestra un spinner mientras se están cargando los detalles del cómic
  if (loading) {
    return <div className="spinner-container"><div className="spinner"></div></div>;
  }

  // Si no se encontraron detalles del cómic, se muestra un mensaje alternativo
  if (!comic) {
    return <p>No hay detalles disponibles.</p>;
  }

  return (
    <div className="comic-details">
      {/* Título del cómic */}
      <h2>{comic.title}</h2>
      
      {/* Imagen del cómic */}
      <img 
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
        alt={comic.title} 
        className="comic-thumbnail-large" 
      />
      
      {/* Descripción del cómic, si está disponible */}
      <p className="comic-description">{comic.description || "Descripción no disponible"}</p>
      
      {/* Lista de creadores del cómic */}
      <h6>Creadores:</h6>
      <ul>
        {comic.creators.items.map(creator => (
          <li key={creator.resourceURI}>
            <span className="creator-item">{creator.name}</span>
          </li>
        ))}
      </ul>
      
      {/* Lista de personajes del cómic */}
      <h6>Personajes:</h6>
      <ul>
        {comic.characters.items.map(character => (
          <li key={character.resourceURI}>
            <span className="character-item">{character.name}</span>
          </li>
        ))}
      </ul>
      
      {/* Botón para regresar a la página anterior */}
      <button className="btn btn-secondary" onClick={() => window.history.back()}>Cerrar Detalles</button>
    </div>
  );
};

export default ComicDetails;
