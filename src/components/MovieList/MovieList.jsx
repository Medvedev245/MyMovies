import { Link } from 'react-router-dom';

const MovieList = ({ items, stateItem }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      <ul>
        {items.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={stateItem}>
                <img src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
