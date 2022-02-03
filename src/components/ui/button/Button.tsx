import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButonProps {
  link?: string;
  onClick?: () => void;
  padding?: number;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
}

export const Button: FC<ButonProps> = ({
  children,
  link,
  onClick,
  size = 'small',
  ...props
}) => {
  const btnClass = classNames(styles.button, {
    [styles.xsm]: size === 'xSmall',
    [styles.sm]: size === 'small',
    [styles.md]: size === 'medium',
    [styles.lg]: size === 'large',
    [styles.xlg]: size === 'xLarge',
  });

  return (
    <>
      {link ? (
        <Link {...props} to={link} className={btnClass}>
          {children}
        </Link>
      ) : (
        <button {...props} type='button' className={btnClass}>
          {children}
        </button>
      )}
    </>
  );
};
