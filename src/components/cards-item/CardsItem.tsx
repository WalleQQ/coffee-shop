import React, {FC} from 'react';
import {IProducts} from '../../types/types';
import {Button} from '../ui/button/Button';
import styles from './CardsItem.module.css';

interface CardsItemProps {
  product: IProducts;
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
      <h3 className={styles.cardsItemTitle}>{product.title}</h3>
      <p className={styles.cardsItemText}>{product.description}</p>

      <div className={styles.priceWrapper}>
        <div className={styles.price}>
          <p className={styles.oldPrice}>{product.oldPrice}</p>
          <p className={styles.newPrice}>{product.price}</p>
        </div>
        <Button size='small'>В корзину</Button>
      </div>
    </li>
  );
};
