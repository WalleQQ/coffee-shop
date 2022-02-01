import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserNavigation.module.css';
import { ReactComponent as IconCart } from '../../assets/cart.svg';
import { ReactComponent as IconUser } from '../../assets/user.svg';
import { AppRoute } from '../../const';

export const UserNavigation = () => {
  return (
    <div className={styles.userNavigation}>
      <Link to={AppRoute.CART}>
        <IconCart />
      </Link>

      <Link to={AppRoute.USER}>
        <IconUser />
      </Link>
    </div>
  );
};
