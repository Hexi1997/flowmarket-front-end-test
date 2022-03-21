import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import infoImg from '@/assets/images/header/admin.svg';

import styles from './Header.module.scss';
import { LocaleSwitch } from './LocaleSwitch';
import { Nav } from './Nav';
import { Search } from './Search';

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
        'sticky top-0 z-10 flex items-center space-x-4 bg-white px-12 shadow-md dark:bg-black'
      )}
    >
      {/* logo area */}
      <Link href="/">
        <span className="text-base font-semibold text-stone-800 hover:cursor-pointer">
          Flow Market
        </span>
      </Link>
      {/* search area */}
      <Search />
      {/* nav area */}
      <Nav />
      {/* locale change area */}
      <LocaleSwitch />
      {/* user info area */}
      <div className="flex cursor-pointer items-center justify-center ">
        <Image src={infoImg} className="h-5 w-5" />
      </div>
    </header>
  );
}
