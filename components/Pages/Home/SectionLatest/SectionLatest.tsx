import cn from 'classnames';

import styles from './SectionLatest.module.scss';

interface SectionLatestProps {
  className?: string;
}

export function SectionLatest(props: SectionLatestProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        styles.SectionLatest,
        className,
        'resetContainer'
        // 'bg-red-50'
      )}
    >
      SectionLatest
    </div>
  );
}
