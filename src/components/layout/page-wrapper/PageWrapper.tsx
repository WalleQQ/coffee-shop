import React, { FC } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import styles from '../page-wrapper/PageWrapper.module.css';

export const PageWrapper: FC = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
