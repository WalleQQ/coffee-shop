import React from 'react';
import { Logo } from '../../logo/Logo';
import { NavLinksList } from '../../nav-links-list/NavLinksList';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <nav className={styles.navFooter}>
        <Logo />
        <NavLinksList />
      </nav>
    </footer>
  );
};
