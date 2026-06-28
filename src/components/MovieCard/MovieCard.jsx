import Heading from '../Heading/Heading';
import styles from './MovieCard.module.css';

function MovieCard({ movie: { title, poster_path, release_date } }) {
  const posterLink = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'public/default-poster.svg';
  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : 'N/A';
  return (
    <div className={styles.movieCard}>
      <img
        className={styles.poster}
        src={posterLink}
        alt={title}
        width={200}
        height={300}
      />
      <Heading tag="h3" top={10}>{`${title} (${releaseYear})`}</Heading>
    </div>
  );
}
export default MovieCard;
