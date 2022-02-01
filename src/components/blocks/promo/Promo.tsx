import React from 'react';
import { AppRoute } from '../../../const';
import { Button } from '../../ui/button/Button';
import styles from './Promo.module.css';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <h2 className={styles.promoTitle}>Свежеобжаренный кофе</h2>
      <p className={styles.promoText}>
        Кофе Калининградской обжарки из разных стран произрастания с доставкой
        на дом. Мы обжариваем кофе{' '}
        <strong className={styles.promoTextStrong}>каждые выходные</strong>.
      </p>
      <Button link={AppRoute.CATALOG} size='x-large'>
        Посмотреть каталог
      </Button>
    </section>
  );
};
