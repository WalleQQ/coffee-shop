import React from 'react';
import styles from '../loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
