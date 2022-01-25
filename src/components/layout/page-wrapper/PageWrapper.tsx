import React, { FC } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import styles from './PageWrapper.module.css';

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
