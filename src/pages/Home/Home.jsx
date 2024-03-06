import React, { useEffect, useState } from 'react';
import { fetchAllMovies } from '../../components/API';
import { AllMovies } from 'components/AllMovies/AllMovies';
import { Title } from './Home.styled';
import LoadMore from 'components/LoadMore/LoadMore';
import { Footer } from 'components/Footer/Footer';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchAllMovies(page);
        if (movies.length) {
          setMoviesList(movies);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePageCange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Title>Trending today</Title>
      <AllMovies elements={moviesList} />
      <LoadMore loadMore={handleLoadMore} onPageChange={handlePageCange} />
    </>
  );
};

export default Home;
