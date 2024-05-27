import { fetchOneMovie } from '../../components/API';
import { SelectedMovie } from 'components/SelectedMovie/SelectedMovie';
import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { LinkBack, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [selecteMovie, setselecteMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const result = async () => {
      try {
        const movie = await fetchOneMovie(movieId);
        if (movie) {
          setselecteMovie(movie);
          setGenres(movie.genres);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <Container>
      {selecteMovie && (
        <div>
          <LinkBack>
            <Link to={backLinkLocation.current}>Go back</Link>
          </LinkBack>
          <SelectedMovie movie={selecteMovie} genres={genres} />
        </div>
      )}
    </Container>
  );
};

export default MovieDetails;
