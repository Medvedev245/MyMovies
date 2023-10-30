import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../components/API';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

const SearchMovie = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('searchQuery') ?? '');
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  const location = useLocation();

  const input = searchParams.get('searchQuery') ?? '';

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
      <SearchBar
        onSubmit={handleSubmit}
        inputData={query}
        onChange={handleInputChange}
      />
      <MovieList items={queryResult} stateItem={{ from: location }} />
    </div>
  );
};

export default SearchMovie;
