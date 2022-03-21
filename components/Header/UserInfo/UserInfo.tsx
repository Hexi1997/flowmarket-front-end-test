import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import infoImg from '@/assets/images/header/admin.svg';
import collectionsImg from '@/assets/images/header/collections.svg';
import collectionsWhiteImg from '@/assets/images/header/collections_white.svg';
import favoritesImg from '@/assets/images/header/favorites.svg';
import favoritesWhiteImg from '@/assets/images/header/favorites_white.svg';
import profileImg from '@/assets/images/header/profile.svg';
import profileWhiteImg from '@/assets/images/header/profile_white.svg';
import settingsImg from '@/assets/images/header/settings.svg';
import settingsWhiteImg from '@/assets/images/header/settings_white.svg';
import signOutImg from '@/assets/images/header/signout.svg';
import signOutWhiteImg from '@/assets/images/header/signout_white.svg';
import { Button } from '@/components/Common/Button';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
  className?: string;
}

const links = [
  {
    icon: profileImg,
    icon_white: profileWhiteImg,
    title: 'Profile',
    link: '/profile'
  },
  {
    icon: collectionsImg,
    icon_white: collectionsWhiteImg,
    title: 'My Collections',
    link: '/mycollections'
  },
  {
    icon: favoritesImg,
    icon_white: favoritesWhiteImg,
    title: 'My Favorites',
    link: '/myfavorites'
  },
  {
    icon: settingsImg,
    icon_white: settingsWhiteImg,
    title: 'Settings',
    link: '/settings'
  }
];

export function UserInfo(props: UserInfoProps) {
  const { className } = props;
  const [hoverSubMenuTitle, setHoverSubMenuTitle] = useState('');
  const [isShowUserInfo, setIsShowUserInfo] = useState(false);
  const [isHoverSignOut, setIsHoverSignOut] = useState(false);

  return (
    <div className={cn(styles.UserInfo, className)}>
      <div
        className="pl-2 h-16 flex cursor-pointer items-center justify-center relative "
        onMouseEnter={() => {
          setIsShowUserInfo(true);
        }}
        onMouseLeave={() => {
          setIsShowUserInfo(false);
        }}
      >
        <Image src={infoImg} className="h-5 w-5" />
        {isShowUserInfo && (
          <RoundedContainer className="absolute top-16 -left-40 flex flex-col text-base">
            <span className="pt-6 pb-2 px-[18px]">0x88b4b153184...7c1bd</span>
            <div className="rounded-lg shadow-xl flex p-5 flex-col space-y-2 pb-3 mx-[18px]">
              <span className="font-medium">Balance</span>
              <div className="flex justify-between items-center">
                <span className="text-[#666666] text-sm">FLOW</span>
                <span className="font-bold text-xl">0.014</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#666666] text-sm">FUSD</span>
                <span className="font-bold text-xl">21.501</span>
              </div>
              <Button
                onClick={() => {
                  console.log('click add');
                }}
                className="w-full h-8"
              >
                Add Funds
              </Button>
            </div>
            <ul className="pt-4 flex flex-col w-full">
              {links.map((item) => (
                <Link href={item.link} key={item.title}>
                  <a
                    onMouseEnter={() => {
                      setHoverSubMenuTitle(item.title);
                    }}
                    onMouseLeave={() => {
                      setHoverSubMenuTitle('');
                    }}
                    className={cn(
                      styles.icon,
                      'flex w-full h-10 items-center px-[18px] space-x-3',
                      hoverSubMenuTitle === item.title
                        ? 'bg-themeGreen text-white'
                        : ''
                    )}
                  >
                    <Image
                      src={
                        item.title === hoverSubMenuTitle
                          ? item.icon_white
                          : item.icon
                      }
                      width="16"
                    />
                    <span>{item.title}</span>
                  </a>
                </Link>
              ))}
            </ul>
            <hr />
            <div
              onClick={() => {
                console.log('sign out');
              }}
            >
              <div
                onMouseEnter={() => {
                  setIsHoverSignOut(true);
                }}
                onMouseLeave={() => {
                  setIsHoverSignOut(false);
                }}
                className={cn(
                  'flex w-full h-12 items-center px-[18px] space-x-3',
                  isHoverSignOut ? 'bg-themeGreen text-white' : ''
                )}
              >
                <Image
                  src={isHoverSignOut ? signOutWhiteImg : signOutImg}
                  width="16"
                />
                <span>Sign Out</span>
              </div>
            </div>
          </RoundedContainer>
        )}
      </div>
    </div>
  );
}
