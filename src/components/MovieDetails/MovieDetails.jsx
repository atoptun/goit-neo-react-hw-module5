import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import styles from './MovieDetails.module.css';

const posterBaseUrl = 'https://image.tmdb.org/t/p/w500/';

function MovieDetails({ movieInfo }) {
  // console.info(movieInfo);
  if (!movieInfo) {
    return null;
  }

  const relDate = new Date(movieInfo.release_date);
  const posterUrl = movieInfo.poster_path
    ? `${posterBaseUrl}${movieInfo.poster_path}`
    : '/default-poster.svg';
  const title = `${movieInfo.title} (${relDate.getFullYear()})`;
  const genres = movieInfo.genres.map(genre => genre.name).join(', ');
  const vote = `${movieInfo.vote_average.toFixed(1)} (${movieInfo.vote_count})`;

  return (
    <div className={styles.movieDetail}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.poster}
          src={posterUrl}
          alt={title}
          width={200}
          height={300}
        />
      </div>
      <div className={styles.detailWrapper}>
        <Heading tag="h1" align="left">
          {title}
        </Heading>
        <Text>
          <b>Vote:</b> {vote}
        </Text>
        {genres && (
          <Text>
            <b>Genres:</b> {genres}
          </Text>
        )}

        <Text tag="h2" align="left">
          Overview:
        </Text>
        <Text>{movieInfo.overview}</Text>
      </div>
    </div>
  );
}
export default MovieDetails;

/**
 * {
    "adult": false,
    "backdrop_path": null,
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 10749,
            "name": "Romance"
        }
    ],
    "homepage": "",
    "id": 280969,
    "imdb_id": "tt3415566",
    "origin_country": [
        "IN"
    ],
    "original_language": "ta",
    "original_title": "ஒன் டூ த்ரீ",
    "overview": "Three men with physical impairments lead dull and monotonous lives. However, when Narmada, a young woman, befriends them, it brings lots of positive changes in them.",
    "popularity": 0.6274,
    "poster_path": null,
    "production_companies": [
        {
            "id": 27039,
            "logo_path": null,
            "name": "Sidhesh Films",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "IN",
            "name": "India"
        }
    ],
    "release_date": "2002-06-01",
    "revenue": 0,
    "runtime": 126,
    "softcore": false,
    "spoken_languages": [
        {
            "english_name": "Tamil",
            "iso_639_1": "ta",
            "name": "தமிழ்"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "123",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 9
}
 */
