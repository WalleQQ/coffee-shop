import React from 'react';
import { Nav } from '../nav/Nav';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className='hidden'>Интернет магазин Miller</h1>
      <Nav />
    </header>
  );
};
