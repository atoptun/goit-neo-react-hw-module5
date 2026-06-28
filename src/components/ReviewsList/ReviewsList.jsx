import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './ReviewsList.module.css';

function ReviewsList({ reviews }) {
  console.info(reviews);
  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li className={styles.item} key={review.id}>
          <ReviewCard review={review} />
          <hr />
        </li>
      ))}
    </ul>
  );
}
export default ReviewsList;
