import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserNavigation.module.css';
import { ReactComponent as IconCart } from '../../assets/cart.svg';
import { ReactComponent as IconUser } from '../../assets/user.svg';

export const UserNavigation = () => {
  return (
    <div className={styles.UserNavigation}>
      <Link to='/cart'>
        <IconCart />
      </Link>

      <Link to='/user'>
        <IconUser />
      </Link>
    </div>
  );
};
