import {} from 'react';
import styles from './index.module.scss';
import { navList } from '../../utils/navList';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navList.map((link) => (
          <li key={link.id}>
            {/* <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              {link.label}
            </NavLink> */}
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
