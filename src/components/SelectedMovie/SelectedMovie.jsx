import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Img,
  ImgComtainer,
  Container,
  Description,
  Wrapper,
  Paaragraf,
  Score,
  ListInfo,
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
          <Paaragraf>Name: {title}</Paaragraf>
          <Score>
            User score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%
          </Score>
          <p>Overview:</p>
          <Paaragraf>{overview}</Paaragraf>
        </Description>
      </Wrapper>
      <div>
        <ListInfo>
          <li>
            <Link to="casts">casts</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ListInfo>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
