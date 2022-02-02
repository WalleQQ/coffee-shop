import React from 'react';
import styles from './OurCatalogsList.module.css';
import coffeeImage from '../../assets/coffeImage.jpg';
import teaImage from '../../assets/teapot.jpg';
import vending from '../../assets/vending.jpg';
import healthyEating from '../../assets/healthy-eating.jpg';
import { OurCatalogsItem } from '../OurCatalogsItem/OurCatalogsItem';

export const OurCatalogsList = () => {
  const products = [
    {
      id: 0,
      title: 'Свежеобжаренный кофе',
      image: `${coffeeImage}`,
      alt: 'Кофейные зёрна',
    },
    {
      id: 1,
      title: 'Чай и кофейные напитки',
      image: `${teaImage}`,
      alt: 'Чайник',
    },
    {
      id: 2,
      title: 'Продукция для вендинга',
      image: `${vending}`,
      alt: 'Кофемашина',
    },
    {
      id: 3,
      title: 'Здоровое питание',
      image: `${healthyEating}`,
      alt: 'Тарелка с кашей',
    },
  ];

  return (
    <ul className={styles.ourCatalogsList}>
      {products.map((product) => (
        <OurCatalogsItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
