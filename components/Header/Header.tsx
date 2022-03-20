import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import infoImg from '@/assets/images/header/admin.svg';
import localeImg from '@/assets/images/header/locale.svg';
import searchImg from '@/assets/images/header/search.svg';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

interface IMenu {
  name: string;
  link: string;
  sub?: IMenu[];
}

const menus: IMenu[] = [
  {
    name: 'market',
    link: '/market'
  },
  {
    name: 'collections',
    link: '/collections',
    sub: [
      {
        name: 'all',
        link: '/'
      },
      {
        name: 'art',
        link: '/'
      },
      {
        name: 'sports',
        link: '/'
      },
      {
        name: 'music',
        link: '/'
      },
      {
        name: 'movies',
        link: '/'
      },
      {
        name: 'photography',
        link: '/'
      },
      {
        name: 'food',
        link: '/'
      },
      {
        name: 'stars',
        link: '/'
      }
    ]
  },
  {
    name: 'activies',
    link: '/activies'
  },
  {
    name: 'create',
    link: '/create'
  }
];

export function Header(props: HeaderProps) {
  const { className } = props;
  const router = useRouter();

  const focusMenuItem = useMemo(() => {
    const routeArr = router.asPath.split('/');
    if (routeArr.length >= 2) {
      return menus.find((item) => item.name === routeArr[1]);
    }
  }, [router.asPath]);

  return (
    <header
      className={cn(
        styles.Header,
        className,
        'sticky top-0 z-10 flex items-center space-x-4 bg-white px-12 py-4 shadow-md dark:bg-black'
      )}
    >
      {/* logo area */}
      <Link href="/">
        <span className="text-base font-semibold text-stone-800 hover:cursor-pointer">
          Flow Market
        </span>
      </Link>
      {/* search area */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search items and collections"
          className="h-9 w-96 rounded-full border-2 px-12 text-sm text-stone-500 focus:outline-none"
        />
        <div className="absolute top-2 left-4">
          <Image src={searchImg} className="h-5 w-5" />
        </div>
      </div>
      {/* nav area */}
      <nav>
        <ul className="flex items-center space-x-2">
          {menus.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>
                <a
                  className={cn(
                    'px-4 py-1 text-xs text-neutral-700',
                    focusMenuItem?.name === item.name
                      ? 'rounded-full bg-themeGreen text-white'
                      : ''
                  )}
                >
                  {item.name.toUpperCase()}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* locale change area */}
      <div className="flex cursor-pointer items-center justify-center">
        <Image src={localeImg} className=" h-5 w-5" />
      </div>
      {/* user info area */}
      <div className="flex cursor-pointer items-center justify-center">
        <Image src={infoImg} className="h-5 w-5" />
      </div>
    </header>
  );
}
