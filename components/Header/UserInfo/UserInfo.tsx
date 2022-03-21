import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import infoImg from '@/assets/images/header/admin.svg';
import collectionsImg from '@/assets/images/header/collections.svg';
import favoritesImg from '@/assets/images/header/favorites.svg';
import profileImg from '@/assets/images/header/profile.svg';
import settingsImg from '@/assets/images/header/settings.svg';
import signOutImg from '@/assets/images/header/signout.svg';
import { Button } from '@/components/Common/Button';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
  className?: string;
}

const links = [
  {
    icon: profileImg,
    title: 'Profile',
    link: '/profile'
  },
  {
    icon: collectionsImg,
    title: 'My Collections',
    link: '/mycollections'
  },
  {
    icon: favoritesImg,
    title: 'My Favorites',
    link: '/myfavorites'
  },
  {
    icon: settingsImg,
    title: 'Settings',
    link: '/settings'
  }
];

export function UserInfo(props: UserInfoProps) {
  const { className } = props;
  const [isShowUserInfo, setIsShowUserInfo] = useState(false);

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
        {true && (
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
                    className={cn(
                      styles.icon,
                      'flex w-full h-10 items-center px-[18px] space-x-3 hover:bg-themeGreen hover:text-white'
                    )}
                  >
                    <Image src={item.icon} width="16" />
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
              <div className="flex w-full h-12 items-center px-[18px] space-x-3 hover:bg-themeGreen hover:text-white">
                <Image
                  src={signOutImg}
                  width="16"
                  className="hover:fill-red-300"
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
