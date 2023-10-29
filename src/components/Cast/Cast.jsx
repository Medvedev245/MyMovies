import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from '../API';

const Casts = () => {
  const [selectedCast, setSelectedCast] = useState([]);

  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const result = async () => {
      try {
        const elements = await fetchCast(movieId);
        if (elements) {
          setSelectedCast(elements);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <div>
      <ul>
        {selectedCast.map(card => {
          const { name, profile_path, character, credit_id } = card;
          return (
            <li key={credit_id}>
              <img src={imgBaseUrl + profile_path} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
      <div>hi</div>
    </div>
  );
};

export default Casts;
