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
        'sticky px-12 py-4 shadow-md flex items-center space-x-4'
      )}
    >
      {/* logo area */}
      <Link href="/">
        <span className="text-base text-stone-800 font-semibold hover:cursor-pointer">
          Flow Market
        </span>
      </Link>
      {/* search area */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search items and collections"
          className="w-96 h-9 border-2 rounded-full px-12 text-sm focus:outline-none text-stone-500"
        />
        <div className="absolute top-2 left-4">
          <Image src={searchImg} className="w-5 h-5" />
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
                    'text-neutral-700 text-xs px-4 py-1',
                    focusMenuItem?.name === item.name
                      ? 'bg-green-500 rounded-full text-white'
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
      <div className="flex items-center justify-center cursor-pointer">
        <Image src={localeImg} className="w-5 h-5" />
      </div>
      {/* user info area */}
      <div className="flex items-center justify-center cursor-pointer">
        <Image src={infoImg} className="w-5 h-5" />
      </div>
    </header>
  );
}
