import styles from './StateMessage.module.css';

const stateMessages = {
  start: 'Please enter a search query...',
  'no-images': 'No images found for this query...<br>Please, try another one.',
  'fetch-error': 'Whoops, something went wrong...<br>Please, try again later.',
};

function StateMessage({ state }) {
  return (
    <div className={styles.stateMessage}>
      <p dangerouslySetInnerHTML={{ __html: stateMessages[state] }} />
    </div>
  );
}
export default StateMessage;
