import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export function SectionTitle(props: SectionTitleProps) {
  const { className, children } = props;

  return (
    <div className={cn(styles.SectionTitle, className)}>
      <h3 className="text-[28px] font-bold text-center">{children}</h3>
    </div>
  );
}
