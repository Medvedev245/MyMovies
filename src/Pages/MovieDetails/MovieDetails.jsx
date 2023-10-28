import { fetchOneMovie } from 'components/API';
import { SelectedMovie } from 'components/SelectedMovie/SelectedMovie';
import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

// /movies/:movieId

const MovieDetails = () => {
  const [selecteMovie, setselecteMovie] = useState();
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const selectedMovie = async () => {
      try {
        const movie = await fetchOneMovie(movieId);
        setselecteMovie(movie);
        setGenres([...movie.genres]);
      } catch (error) {
        console.log(error);
      }
    };
    selectedMovie();
  }, [movieId]);

  return (
    <section>
      <Link to={backLink.current}>Back</Link>
      <div>
        <SelectedMovie selecteMovie={selecteMovie} genres={genres} />
      </div>
    </section>
  );
};

export default MovieDetails;
