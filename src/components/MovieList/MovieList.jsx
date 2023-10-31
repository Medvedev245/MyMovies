import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ items }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  console.log(items);
  return (
    <>
      <ul>
        {items.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <img
                  src={
                    movie.poster_path
                      ? imgBaseUrl + movie.poster_path
                      : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
                  }
                  alt={movie.title}
                  width={300}
                  height={450}
                />
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
