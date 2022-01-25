import React, { FC } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import styles from './PageWrapper.module.css';

export const PageWrapper: FC = ({ children }) => {
  return (
    <div className={styles.PageWrapper}>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};
