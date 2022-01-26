import React from 'react';
import { Logo } from '../../logo/Logo';
import { NavLinks } from '../../nav-links/NavLinks';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <Logo />
      <NavLinks />
    </nav>
  );
};
