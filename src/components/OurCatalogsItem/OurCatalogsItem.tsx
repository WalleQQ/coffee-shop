import React, { FC, useState } from 'react';
import { AppRoute } from '../../const';
import { ICatalog } from '../../types/types';
import { Button } from '../ui/button/Button';
import styles from './OurCatalogsItem.module.css';

interface OurCatalogsItemProps {
  product: ICatalog;
}

export const OurCatalogsItem: FC<OurCatalogsItemProps> = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      className={styles.ourCatalogsItem}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles.contentWrapper}>
        <h3 className={styles.ourCatalogsItemTitle}>{product.title}</h3>
        <img
          className={styles.ourCatalogsItemImage}
          src={product.image}
          alt={product.alt}
        />
      </div>
      {isHover && (
        <Button link={AppRoute.CATALOG} size='small'>
          Купить
        </Button>
      )}
    </li>
  );
};
