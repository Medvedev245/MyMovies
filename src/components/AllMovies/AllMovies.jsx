import { Link } from 'react-router-dom';

const imgUrl = 'https://image.tmdb.org/t/p/w300';

export const AllMovies = ({ elements, stateItem }) => {
  console.log(elements, stateItem);
  return (
    <ul>
      {elements.map(element => {
        return (
          <li key={element.id}>
            <Link to={'/movies/' + element.id} state={stateItem}>
              {/* <Link to={`${element.id}`} state={stateItem}> */}
              <p>{element.original_titsle}</p>
              <img src={imgUrl + element.poster_path} alt={element.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
