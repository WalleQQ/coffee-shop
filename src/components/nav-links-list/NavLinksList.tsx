import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './NavLinksList.module.css';

export const NavLinksList = () => {
  return (
    <ul className={styles.navLinksList}>
      <li>
        <Link to={AppRoute.CATALOG} className={styles.navLinksItemLink}>
          Каталог товаров
        </Link>
      </li>
      <li>
        <Link to={AppRoute.CONTACTS} className={styles.navLinksItemLink}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};
