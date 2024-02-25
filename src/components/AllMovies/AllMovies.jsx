import { useLocation } from 'react-router-dom';
import { Item, List, Image, LinkFilm, ElementText } from './AllMovies.styled';

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
              <ElementText>
                <span>{element.title}</span>
                <span>{element.release_date}</span>
              </ElementText>
            </LinkFilm>
          </Item>
        );
      })}
    </List>
  );
};
