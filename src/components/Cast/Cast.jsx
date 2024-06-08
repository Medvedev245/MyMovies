import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from '../API';
import { CastsContainer, CastsElement, CastsList } from './Cast.styled';

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
    <CastsContainer>
      {selectedCast.length ? (
        <CastsList>
          {selectedCast.map(card => {
            const { name, profile_path, character, credit_id } = card;
            return (
              <CastsElement key={credit_id}>
                <img
                  src={
                    profile_path
                      ? imgBaseUrl + profile_path
                      : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </CastsElement>
            );
          })}
        </CastsList>
      ) : (
        <p>No Casts available</p>
      )}
    </CastsContainer>
  );
};

export default Casts;
