import { ClipLoader } from 'react-spinners';

import styles from './Loader.module.css';

function Loader({ loading }) {
  return (
    <>
      <ClipLoader size={50} loading={loading} className={styles.spinner} />
    </>
  );
}
export default Loader;
