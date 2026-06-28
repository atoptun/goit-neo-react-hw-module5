import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import styles from './ReviewCard.module.css';

function ReviewCard({ review }) {
  console.info(review);
  const date = new Date(review.created_at);
  return (
    <div className={styles.reviewCard}>
      <Heading tag="p" align="left" bottom={5} className={styles.author}>
        {review.author}
      </Heading>
      <Text bottom={5} className={styles.date}>
        Date: {date.toLocaleDateString()}
      </Text>
      <Text className={styles.content}>{review.content}</Text>
    </div>
  );
}
export default ReviewCard;
