import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Img,
  ImgComtainer,
  Container,
  Description,
  Wrapper,
} from './SelectedMovie.styled';

export const SelectedMovie = ({
  movie: { poster_path, title, vote_average, overview },
  genres,
}) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';

  return (
    <Container>
      <Wrapper>
        <ImgComtainer>
          <Img
            src={
              poster_path
                ? imgBaseUrl + poster_path
                : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
            }
            alt={title}
          />
        </ImgComtainer>
        <Description>
          <p style={{ marginBottom: '15px' }}>Name: {title}</p>
          <span style={{ marginBottom: '15px', display: 'inline-block' }}>
            User score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%
          </span>
          <p>Overview:</p>
          <p style={{ marginBottom: '15px' }}>{overview}</p>
        </Description>
      </Wrapper>
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
    </Container>
  );
};
