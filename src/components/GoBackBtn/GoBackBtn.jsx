import { Link } from 'react-router-dom';

import styles from './GoBackBtn.module.css';

function GoBackBtn({ path }) {
  return (
    <div className={styles.goBackBtn}>
      <Link to={path}>Go Back</Link>
    </div>
  );
}
export default GoBackBtn;
