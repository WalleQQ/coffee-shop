import React, {FC} from 'react';
import {Button} from '../ui/button/Button';
import styles from './CardsItem.module.css';

interface CardsItemProps {
  product: any;
}

export const CardsItem: FC<CardsItemProps> = ({product}) => {
  return (
    <li className={styles.cardsItem}>
      <p className={styles.cardsItemDiscountText}>Скидки</p>
      <img
        className={styles.cardsItemImage}
        src={product.image}
        alt={product.alt}
        width='172'
        height='311'
      />
      <h3 className={styles.cardsItemTitle}>Colombia Supremo</h3>
      <p className={styles.cardsItemText}>
        Свежеобжаренный кофе - описание товара, вкус, аромат
      </p>

      <div className={styles.priceWrapper}>
        <div className={styles.price}>
          <p className={styles.oldPrice}>350 ₽</p>
          <p className={styles.newPrice}>250 ₽</p>
        </div>
        <Button size='small'>В корзину</Button>
      </div>
    </li>
  );
};
