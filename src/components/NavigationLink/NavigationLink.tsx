import {} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

interface INavigationLinkProps {
  label: string;
  path: string;
}

function NavigationLink({ label, path }: INavigationLinkProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      {label}
    </NavLink>
  );
}

export default NavigationLink;
