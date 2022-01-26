import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Logo.module.css';

export const Logo = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState<boolean>();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  return (
    <>
      {isHomePage ? (
        <img
          className={styles.Logo}
          src={logo}
          alt='Логотип Интернет магазина Miller'
        />
      ) : (
        <Link to='/' style={{ display: 'flex' }}>
          <img
            className={styles.Logo}
            src={logo}
            alt='Логотип Интернет магазина Miller'
          />
        </Link>
      )}
    </>
  );
};
