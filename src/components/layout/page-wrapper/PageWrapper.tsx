import React, { FC, ReactNode } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import styles from './PageWrapper.module.css';

export const PageWrapper: FC = ({ children }) => {
  return (
    <div className={styles.PageWrapper}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
