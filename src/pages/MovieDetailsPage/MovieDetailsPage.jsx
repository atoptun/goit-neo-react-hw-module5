import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Heading from '../../components/Heading/Heading';
import Loader from '../../components/Loader/Loader';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Section from '../../components/Section/Section';
import {
  getMovieCreditsPath,
  getMovieReviewsPath,
} from '../../constants/routes';
import { fetchMovieDetails } from '../../services/tmdb-api';
import styles from './MovieDetailsPage.module.css';

const buildNavLinkClass = ({ isActive }) =>
  clsx(styles.link, { [styles.activeLink]: isActive });

function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetchMovieDetails(movieId);
        // console.info(response);
        setMovieInfo(response);
      } catch (error) {
        setError(`Failed to fetch movie details: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink} />
        {movieInfo && <MovieDetails movieInfo={movieInfo} />}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <hr />
        <Heading tag="h2" align="left" bottom={10}>
          Additional Information
        </Heading>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to={getMovieCreditsPath(movieId)}
              state={{ from: goBackLink }}
              className={buildNavLinkClass}
            >
              Credits
            </NavLink>
          </li>
          <li>
            <NavLink
              to={getMovieReviewsPath(movieId)}
              state={{ from: goBackLink }}
              className={buildNavLinkClass}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Outlet />
      </Container>
    </Section>
  );
}
export default MovieDetailsPage;
