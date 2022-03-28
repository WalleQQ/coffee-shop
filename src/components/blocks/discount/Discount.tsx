import React from 'react';
import styles from './Discount.module.css';
import { CardsList } from '../../cards-list/CardsList';

export const Discount = () => {
  return (
    <section className={styles.discount}>
      <h2 className={styles.discountTitle}>Товары со скидкой</h2>
      <p className={styles.discountText}>
        Наша компания предлагает покупать товар со скидкой не только в дни
        распродаж или в течение действия ограниченных предложений, но и
        пользоваться скидками постоянно!
      </p>
      <CardsList />
    </section>
  );
};
