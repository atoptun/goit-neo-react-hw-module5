import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCredits } from '../../services/tmdb-api';
import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';
import PeopleList from '../PeopleList/PeopleList';
import Text from '../Text/Text';

function MovieCredits() {
  const { movieId } = useParams();
  const [creditInfo, setCreditInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetchMovieCredits(movieId);
        // console.info(response);
        setCreditInfo(response);
      } catch (error) {
        setError(`Failed to fetch movie credits: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      setCreditInfo(null);
    };
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {creditInfo?.cast.length > 0 && (
        <>
          <Heading tag="h3" align="left" top={10} bottom={10}>
            Cast:
          </Heading>
          <PeopleList people={creditInfo.cast} />
        </>
      )}
      {creditInfo?.crew.length > 0 && (
        <>
          <Heading tag="h3" align="left" top={20} bottom={10}>
            Crew:
          </Heading>
          <PeopleList people={creditInfo.crew} />
        </>
      )}
      {!creditInfo?.cast?.length && !creditInfo?.crew?.length && !isLoading && (
        <Text top={20}>No credits information available.</Text>
      )}
    </div>
  );
}
export default MovieCredits;
