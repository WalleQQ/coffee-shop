import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLinksList.module.css';

export const NavLinksList = () => {
  return (
    <ul className={styles.NavLinksList}>
      <li>
        <Link to='/catalog' className={styles.NavLinksItemLink}>
          Каталог товаров
        </Link>
      </li>
      <li>
        <Link to='/contacts' className={styles.NavLinksItemLink}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};
