import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import allImg from '@/assets/images/header/all.svg';
import artImg from '@/assets/images/header/art.svg';
import foodImg from '@/assets/images/header/food.svg';
import moviesImg from '@/assets/images/header/movies.svg';
import musicImg from '@/assets/images/header/music.svg';
import photographyImg from '@/assets/images/header/photography.svg';
import sportsImg from '@/assets/images/header/sports.svg';
import starsImg from '@/assets/images/header/stars.svg';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './Nav.module.scss';

interface NavProps {
  className?: string;
}

interface IMenu {
  name: string;
  link: string;
  icon?: string;
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
        link: '/collections/all',
        icon: allImg
      },
      {
        name: 'art',
        link: '/collections/art',
        icon: artImg
      },
      {
        name: 'sports',
        link: '/collections/sports',
        icon: sportsImg
      },
      {
        name: 'music',
        link: '/collections/music',
        icon: musicImg
      },
      {
        name: 'movies',
        link: '/collections/movies',
        icon: moviesImg
      },
      {
        name: 'photography',
        link: '/collections/photography',
        icon: photographyImg
      },
      {
        name: 'food',
        link: '/collections/food',
        icon: foodImg
      },
      {
        name: 'stars',
        link: '/collections/food',
        icon: starsImg
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
                <RoundedContainer className="absolute top-[46px]">
                  <ul
                    onMouseLeave={() => {
                      setHoverMenuName('');
                    }}
                  >
                    {item.sub.map((subitem) => (
                      <li
                        key={subitem.name}
                        className={cn(
                          'w-48 h-10 hover:bg-themeGreen hover:text-white'
                        )}
                      >
                        <Link href={subitem.link}>
                          <a className="w-full h-full pl-3 text-sm flex items-center space-x-4">
                            <Image src={subitem.icon || ''} width="22" />
                            <span>{subitem.name.toUpperCase()}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </RoundedContainer>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
