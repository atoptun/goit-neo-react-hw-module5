import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from '../../services/tmdb-api';
// import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';
import ReviewsList from '../ReviewsList/ReviewsList';
import Text from '../Text/Text';
import styles from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetchMovieReviews(movieId);
        console.info(response);
        setReviewsList(response.results);
      } catch (error) {
        setError(`Failed to fetch movie reviews: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      setReviewsList([]);
    };
  }, [movieId]);

  return (
    <div className={styles.movieReviews}>
      {/* <Heading tag='h4' align='left'>Movie Reviews</Heading> */}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {reviewsList.length > 0 && <ReviewsList reviews={reviewsList} />}
      {reviewsList.length === 0 && !isLoading && (
        <Text>No reviews information available.</Text>
      )}{' '}
    </div>
  );
}
export default MovieReviews;
