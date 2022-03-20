import cn from 'classnames';
import Image from 'next/image';

import searchImg from '@/assets/images/header/search.svg';

import styles from './Search.module.scss';

interface SearchProps {
  className?: string;
}

export function Search(props: SearchProps) {
  const { className } = props;

  return (
    <div className={cn(styles.Search, className, 'relative flex-1')}>
      <input
        type="text"
        placeholder="Search items and collections"
        className="h-9 w-96 rounded-full border-2 px-12 text-sm text-stone-500 focus:outline-none"
      />
      <div className="absolute top-2 left-4">
        <Image src={searchImg} className="h-5 w-5" />
      </div>
    </div>
  );
}
