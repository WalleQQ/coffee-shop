import React from 'react';
import styles from '../error/Error.module.css';

export const Error = () => {
  return (
    <>
      <p className={styles.errorMessage}>Произошла ошибка...</p>
    </>
  );
};
