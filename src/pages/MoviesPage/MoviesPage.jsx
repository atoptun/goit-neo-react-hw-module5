import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Section from '../../components/Section/Section';
import StateMessage from '../../components/StateMessage/StateMessage';
import { fetchSearchMovies } from '../../services/tmdb-api';
import styles from './MoviesPage.module.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    if (!params.query) return;

    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchSearchMovies(params);
        // console.info(data);
        setMovies(data.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      setMovies([]);
    };
  }, [searchParams, trigger]);

  const handleSearch = params => {
    setSearchParams(params);
    setTrigger(prev => prev + 1);
  };

  const searchObj = Object.fromEntries(searchParams.entries());

  const msgState =
    !isLoading && isError
      ? 'fetch-error'
      : !isLoading && !isError && movies.length === 0 && searchObj.query //searchParams.get('query')
        ? 'nothing-found'
        : !isLoading && !isError && movies.length === 0 && !searchObj.query // !searchParams.get('query')
          ? 'start'
          : null;

  return (
    <Section>
      <Container>
        <div className={styles.searchMoviesPage}>
          <Heading align="left" bottom={30} underline>
            Search movies
          </Heading>
          <SearchBar
            values={searchObj}
            isLoading={isLoading}
            onSearch={handleSearch}
          />
          {movies.length > 0 && <MovieList movies={movies} />}
          {isLoading && <Loader />}
          {msgState && <StateMessage state={msgState} />}
        </div>
      </Container>
    </Section>
  );
}

export default MoviesPage;
