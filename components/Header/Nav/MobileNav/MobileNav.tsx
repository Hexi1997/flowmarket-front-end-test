import { Drawer } from 'baseui/drawer';
import cn from 'classnames';
import React from 'react';
import { useToggle } from 'react-use';

import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './MobileNav.module.scss';

interface MobileNavProps {
  className?: string;
}

export function MobileNav(props: MobileNavProps) {
  const { className } = props;
  const { IconFont } = useIconFont();
  const [isShowDrawer, toggleShowDrawer] = useToggle(false);

  return (
    <div
      className={cn(styles.MobileNav, className, 'lg:hidden')}
      onClick={toggleShowDrawer}
    >
      <IconFont type="icon-et-more" className="text-[26px] cursor-pointer" />
      <Drawer isOpen={isShowDrawer} autoFocus={true} onClose={toggleShowDrawer}>
        <br />
        <br />
        <button>drawer content</button>
      </Drawer>
    </div>
  );
}
