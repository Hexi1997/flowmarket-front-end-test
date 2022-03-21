import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}

export function Button(props: ButtonProps) {
  const { className, children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        styles.Button,
        className,
        'bg-themeGreen text-white flex items-center justify-center rounded-full hover:bg-green-500'
      )}
    >
      {children}
    </button>
  );
}
