import React from 'react';
import { Logo } from '../../logo/Logo';
import { NavLinksList } from '../../nav-links-list/NavLinksList';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <nav className={styles.NavFooter}>
        <Logo />
        <NavLinksList />
      </nav>
    </footer>
  );
};
