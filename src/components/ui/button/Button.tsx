import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButonProps {
  link?: string;
  onClick?: () => void;
  padding?: number;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
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
              [styles.xsm]: size === 'x-small',
              [styles.sm]: size === 'small',
              [styles.md]: size === 'medium',
              [styles.lg]: size === 'large',
              [styles.xlg]: size === 'x-large',
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
