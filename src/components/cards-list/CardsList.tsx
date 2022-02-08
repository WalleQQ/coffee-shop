import React from 'react';
import styles from './CardsList.module.css';
import coffeeImage from '../../assets/products/coffee-product.jpg';
import { CardsItem } from '../cards-item/CardsItem';

export const CardsList = () => {
  const products = [
    {
      id: 0,
      title: 'Colombia Supremo',
      description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
      image: `${coffeeImage}`,
      alt: 'Кофе Colombia Supremo',
      price: '250',
      oldPrice: '350',
    },
    {
      id: 0,
      title: 'Colombia Supremo',
      description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
      image: `${coffeeImage}`,
      alt: 'Кофе Colombia Supremo',
      price: '250',
      oldPrice: '350',
    },
    {
      id: 0,
      title: 'Colombia Supremo',
      description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
      image: `${coffeeImage}`,
      alt: 'Кофе Colombia Supremo',
      price: '250',
      oldPrice: '350',
    },
  ];

  return (
    <ul className={styles.cardsList}>
      {products.map((product) => (
        <CardsItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
