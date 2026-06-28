import { Link, useLocation } from 'react-router-dom';

import { getMoviePath } from '../../constants/routes.js';
import MovieCard from '../MovieCard/MovieCard.jsx';
import styles from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li className={styles.item} key={movie.id}>
          <Link to={getMoviePath(movie.id)} state={{ from: location }}>
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default MovieList;
