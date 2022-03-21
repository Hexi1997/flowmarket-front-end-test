import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './RoundedContainer.module.scss';

interface RoundedContainerProps {
  className?: string;
  children: ReactNode;
}

export function RoundedContainer(props: RoundedContainerProps) {
  const { className, children } = props;

  return (
    <div
      className={cn(
        styles.RoundedContainer,
        className,
        'rounded-lg border-2 bg-white shadow-lg overflow-hidden'
      )}
    >
      {children}
    </div>
  );
}
