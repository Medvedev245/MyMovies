import { useEffect, useState } from 'react';
import { fetchAllMovies } from '../../components/API';
import { AllMovies } from 'components/AllMovies/AllMovies';
import { Title } from './Home.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchAllMovies();
        if (movies.length) {
          setMoviesList(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <AllMovies elements={moviesList} />
    </>
  );
};

export default Home;
