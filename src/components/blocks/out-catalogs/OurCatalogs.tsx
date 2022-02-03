import React from 'react';
import { OurCatalogsList } from '../../our-catalogs-list/OurCatalogsList';
import styles from './OurCatalogs.module.css';

export const OurCatalogs = () => {
  return (
    <section className={styles.ourCatalogs}>
      <h2 className={styles.title}>Каталоги нашей продукции</h2>
      <OurCatalogsList />
    </section>
  );
};
