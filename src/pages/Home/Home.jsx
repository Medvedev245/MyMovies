import { useEffect, useState } from 'react';
import { fetchAllMovies } from '../../components/API';
import { AllMovies } from 'components/AllMovies/AllMovies';

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
      <p>Trending today</p>
      <AllMovies elements={moviesList} />
    </>
  );
};

export default Home;
