import React from 'react';
import { Nav } from '../nav/Nav';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Nav />
    </header>
  );
};
