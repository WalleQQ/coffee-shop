import React, {useEffect, useState} from 'react';
import styles from './CardsList.module.css';
import {CardsItem} from '../cards-item/CardsItem';
import {dbInstance} from '../../utils/axios';
import {IProducts} from '../../types/types';

export const CardsList = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  useEffect(() => {
    dbInstance.get('/products/sales.json').then(function (response) {
      setProducts(response.data);
    });
  }, []);

  return (
    <ul className={styles.cardsList}>
      {products.map((product) => (
        <CardsItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
