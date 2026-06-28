import { useEffect, useState } from 'react';

import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import Section from '../../components/Section/Section';
import StateMessage from '../../components/StateMessage/StateMessage';
import { fetchTrendingMovies } from '../../services/tmdb-api';
import styles from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchTrendingMovies();
        // console.info(data);
        setMovies(data.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Section>
      <Container>
        <div className={styles.homePage}>
          <Heading align="left" bottom={30} underline>
            Trending today
          </Heading>
          {movies.length > 0 && <MovieList movies={movies} />}
          {isLoading && <Loader />}
          {isError && <StateMessage state="fetch-error" />}
        </div>
      </Container>
    </Section>
  );
}

export default HomePage;
