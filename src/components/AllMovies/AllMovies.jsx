import { useLocation } from 'react-router-dom';
import { Item, List, Image, LinkFilm } from './AllMovies.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w300';

export const AllMovies = ({ elements }) => {
  const location = useLocation();

  return (
    <List>
      {elements.map(element => {
        return (
          <Item key={element.id}>
            <LinkFilm to={'/movies/' + element.id} state={{ from: location }}>
              <Image src={imgUrl + element.poster_path} alt={element.title} />
            </LinkFilm>
          </Item>
          console.log('object');
        );
      })}
    </List>
  );
};
