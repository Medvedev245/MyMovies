import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const SelectedMovie = ({
  movie: { poster_path, title, vote_average, overview },
  genres,
}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';

  return (
    <div>
      <div>
        <img
          src={
            poster_path
              ? imgBaseUrl + poster_path
              : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
          }
          alt={title}
        />
      </div>
      <div>
        <p>{title}</p>
        <span>
          User score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%
        </span>
        <p>Overview</p>
        <p>{overview}</p>
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="casts">casts</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
