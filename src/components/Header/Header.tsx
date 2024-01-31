import React from 'react';
import styles from './index.module.scss';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
