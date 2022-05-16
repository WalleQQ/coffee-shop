import React from 'react';
import styles from './CardsList.module.css';
import {CardsItem} from '../cards-item/CardsItem';
import {dbInstance} from '../../utils/axios';
import {useQuery} from 'react-query';
import {Loader} from '../ui/loader/Loader';
import {Error} from '../ui/error/Error';

async function fetchProducts() {
  const resp = await dbInstance.get('/products/sales.json');
  return resp.data;
}

export const CardsList = () => {
  const {data, error, isFetching} = useQuery('products', fetchProducts);

  if (isFetching) return <Loader />;
  if (error) return <Error />;

  return (
    <ul className={styles.cardsList}>
      {data.map((product: any) => (
        <CardsItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
