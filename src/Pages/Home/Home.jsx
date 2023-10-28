// import { useEffect } from "react";
import { useEffect, useState } from 'react';
import { fetchAllMovies } from '../../components/API';
import { useLocation } from 'react-router-dom';
import { AllMovies } from 'components/AllMovies/AllMovies';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();

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
      <AllMovies elements={moviesList} stateItem={{ from: location }} />
    </>
  );
};

// useEffect(() => {
//   const result = async () => {
//     try {
//       const movies = await fetchMovies();

// if (movies.length) {
//   setMovieList(movies);
// }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   result();
// }, []);

export default Home;
