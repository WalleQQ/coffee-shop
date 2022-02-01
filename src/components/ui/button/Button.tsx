import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButonProps {
  link?: string;
  onClick?: () => void;
  padding?: number;
  size?: 'small' | 'medium' | 'big';
}

export const Button: FC<ButonProps> = ({
  children,
  link,
  onClick,
  size = 'small',
  ...props
}) => {
  return (
    <>
      {link ? (
        <div>
          <Link
            {...props}
            to={link}
            className={classNames(styles.button, {
              [styles.sm]: size === 'small',
              [styles.md]: size === 'medium',
              [styles.bg]: size === 'big',
            })}
          >
            {children}
          </Link>
        </div>
      ) : (
        <button {...props} className={styles.button} type='button'>
          {children}
        </button>
      )}
    </>
  );
};
