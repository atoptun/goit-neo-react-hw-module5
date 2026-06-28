import Text from '../Text/Text';
import styles from './PersonCard.module.css';

function PersonCard({ person: { name, profile_path, job, character } }) {
  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w200${profile_path}`
    : '/default-poster.svg';

  return (
    <div className={styles.personCard}>
      <img
        src={imgUrl}
        alt={name}
        className={styles.image}
        width={140}
        height={208}
      />
      <Text align="center" bottom={5} className={styles.name}>
        {name}
      </Text>
      {character && (
        <Text align="center" className={styles.character}>
          {character}
        </Text>
      )}
      {job && (
        <Text align="center" className={styles.job}>
          {job}
        </Text>
      )}
    </div>
  );
}
export default PersonCard;
