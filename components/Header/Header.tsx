import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './Header.module.scss';
import { LocaleSwitch } from './LocaleSwitch';
import { Nav } from './Nav';
import { Search } from './Search';
import { UserInfo } from './UserInfo';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return (
    <header
      className={cn(
        styles.Header,
        className,
        'sticky top-0 z-10 flex items-center space-x-4 bg-white px-12 shadow-md dark:bg-black text-[#333333]'
      )}
    >
      {/* logo area */}
      <Link href="/">
        <span className="text-base font-semibold text-stone-800 hover:cursor-pointer">
          Flow Market
        </span>
      </Link>
      <Search />
      <Nav />
      <LocaleSwitch />
      <UserInfo />
    </header>
  );
}
