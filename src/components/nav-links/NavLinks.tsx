import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLinks.module.css';
import { ReactComponent as IconCart } from '../../assets/cart.svg';
import { ReactComponent as IconUser } from '../../assets/user.svg';

export const NavLinks = () => {
  return (
    <>
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

      <div className={styles.UserNavigation}>
        <Link to='/cart'>
          <IconCart />
        </Link>

        <Link to='/user'>
          <IconUser />
        </Link>
      </div>
    </>
  );
};
