import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../components/API';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ContainerSerch } from './Search.styled';
import { Empty } from '../../components/Empty/Empty.jsx';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

const SearchMovie = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('searchQuery') ?? '');
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  const input = searchParams.get('searchQuery') ?? '';

  console.log(totalPages); // для майбутнього розвитку проекту:)
  console.log(setPage); //для майбутнього розвитку проекту:)

  useEffect(() => {
    if (!input) {
      setQueryResult([]);
      return;
    }
    const result = async () => {
      try {
        const result = await fetchByQuery(input, page);
        setQueryResult(result.results);
        setTotalPages(result.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, [input, page]);

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return alert('Sorry, please provide a search word');
    }
    setSearchParams({ searchQuery: query });
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <ContainerSerch>
        <SearchBar
          onSubmit={handleSubmit}
          inputData={query}
          onChange={handleInputChange}
        />
      </ContainerSerch>
      {queryResult.length === 0 ? (
        <Empty></Empty>
      ) : (
        <MovieList items={queryResult} />
      )}
    </div>
  );
};

export default SearchMovie;
