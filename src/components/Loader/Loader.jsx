import { ClipLoader } from 'react-spinners';

import styles from './Loader.module.css';

function Loader() {
  return (
    <>
      <ClipLoader size={50} loading={true} className={styles.spinner} />
    </>
  );
}
export default Loader;
