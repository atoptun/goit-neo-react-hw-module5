import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}
export default AppLayout;
