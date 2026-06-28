import styles from './StateMessage.module.css';

const stateMessages = {
  start: 'Please enter a search query...',
  'fetch-error': 'Whoops, something went wrong...<br>Please, try again later.',
  'nothing-found':
    'No movies found for this query...<br>Please, try another one.',
};

function StateMessage({ state }) {
  return (
    <div className={styles.stateMessage}>
      <p dangerouslySetInnerHTML={{ __html: stateMessages[state] }} />
    </div>
  );
}
export default StateMessage;
