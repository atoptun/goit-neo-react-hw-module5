import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ isLoading, onClick }) {
  return (
    <button
      className={styles.loadMoreBtn}
      type="button"
      onClick={onClick}
      disabled={isLoading}
    >
      Load more
    </button>
  );
}
export default LoadMoreBtn;
