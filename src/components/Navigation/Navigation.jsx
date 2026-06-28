import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../constants/routes.js';
import styles from './Navigation.module.css';

const buildActiveLink = ({ isActive }) =>
  clsx(styles.link, { [styles.activeLink]: isActive });

function Navigation() {
  return (
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <NavLink to={ROUTES.HOME} className={buildActiveLink}>
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink to={ROUTES.MOVIES} className={buildActiveLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
