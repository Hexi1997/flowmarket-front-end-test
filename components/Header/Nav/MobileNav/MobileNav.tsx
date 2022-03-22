import cn from 'classnames';

import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './MobileNav.module.scss';

interface MobileNavProps {
  className?: string;
}

export function MobileNav(props: MobileNavProps) {
  const { className } = props;
  const { IconFont } = useIconFont();

  return (
    <div className={cn(styles.MobileNav, className, 'lg:hidden')}>
      <IconFont type="icon-et-more" className="text-[26px]" />
    </div>
  );
}
