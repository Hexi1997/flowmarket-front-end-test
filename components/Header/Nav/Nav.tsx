import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import styles from './Nav.module.scss';

interface NavProps {
  className?: string;
}

interface IMenu {
  name: string;
  link: string;
  sub?: IMenu[];
}

export const menus: IMenu[] = [
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
        link: '/collections/all'
      },
      {
        name: 'art',
        link: '/collections/art'
      },
      {
        name: 'sports',
        link: '/collections/sports'
      },
      {
        name: 'music',
        link: '/collections/music'
      },
      {
        name: 'movies',
        link: '/collections/movies'
      },
      {
        name: 'photography',
        link: '/collections/photography'
      },
      {
        name: 'food',
        link: '/collections/food'
      },
      {
        name: 'stars',
        link: '/collections/food'
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

export function Nav(props: NavProps) {
  const { className } = props;
  const router = useRouter();
  const [hoverMenuName, setHoverMenuName] = useState('');
  const [hoverSubMenuName, setHoverSubMenuName] = useState('');

  const focusMenuItem = useMemo(() => {
    const routeArr = router.asPath.split('/');
    if (routeArr.length >= 2) {
      return menus.find((item) => item.name === routeArr[1]);
    }
  }, [router.asPath]);
  return (
    <div className={cn(styles.Nav, className)}>
      <nav>
        <ul className="flex items-center space-x-2">
          {menus.map((item) => (
            <li key={item.name} className="relative">
              <Link href={item.link}>
                <a
                  onMouseEnter={() => {
                    setHoverMenuName(item.name);
                  }}
                  className={cn(
                    'px-4 py-2 text-sm text-neutral-700',
                    focusMenuItem?.name === item.name
                      ? 'rounded-full bg-themeGreen text-white'
                      : ''
                  )}
                >
                  {item.name.toUpperCase()}
                </a>
              </Link>
              {item.sub && item.sub.length > 0 && hoverMenuName === item.name && (
                <ul
                  onMouseLeave={() => {
                    setHoverMenuName('');
                    setHoverSubMenuName('');
                  }}
                  className="absolute top-[46px] rounded-lg border-2 bg-white shadow-lg overflow-hidden"
                >
                  {item.sub.map((subitem) => (
                    <li
                      key={subitem.name}
                      className={cn(
                        'w-48 h-10',
                        hoverSubMenuName === subitem.name ? 'bg-slate-50' : ''
                      )}
                      onMouseEnter={() => {
                        setHoverSubMenuName(subitem.name);
                      }}
                    >
                      <Link href={subitem.link}>
                        <a className="block w-full h-full pt-3 pl-3 text-sm">
                          {subitem.name.toUpperCase()}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
