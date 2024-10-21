import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams para obtener el parámetro de la URL
import axios from 'axios';

const ComicDetails = () => {
  const { comicId } = useParams(); // Obtén el ID del cómic desde la URL
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);

  // Efecto para obtener los detalles del cómic
  useEffect(() => {
    const fetchComic = async () => {
      try {
        const authResponse = await axios.get('http://localhost:5000/auth');
        const { ts, hash, publicKey } = authResponse.data;

        const response = await axios.get(`https://gateway.marvel.com/v1/public/comics/${comicId}`, {
          params: {
            apikey: publicKey,
            hash,
            ts
          }
        });

        const fetchedComic = response.data.data.results[0];
        setComic(fetchedComic);
      } catch (error) {
        console.error('Error fetching comic details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [comicId]);

  if (loading) {
    return <div className="spinner-container"><div className="spinner"></div></div>;
  }

  if (!comic) {
    return <p>No hay detalles disponibles.</p>;
  }

  return (
    <div className="comic-details">
      <h2>{comic.title}</h2>
      <img 
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
        alt={comic.title} 
        className="comic-thumbnail-large" 
      />
      {/* Aplica la clase "comic-description" al párrafo */}
      <p className="comic-description">{comic.description || "Descripción no disponible"}</p>
      
      <h6>Creadores:</h6>
      <ul>
        {comic.creators.items.map(creator => (
          <li key={creator.resourceURI}>
            <span className="creator-item">{creator.name}</span>
          </li>
        ))}
      </ul>
      <h6>Personajes:</h6>
      <ul>
        {comic.characters.items.map(character => (
          <li key={character.resourceURI}>
            <span className="character-item">{character.name}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={() => window.history.back()}>Cerrar Detalles</button>
    </div>
  );
}; // <-- Cierre de la función

export default ComicDetails;
