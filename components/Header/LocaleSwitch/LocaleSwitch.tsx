import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import localeImg from '@/assets/images/header/locale.svg';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './LocaleSwitch.module.scss';

interface LocaleSwitchProps {
  className?: string;
}

const languages = [
  {
    title: 'English',
    value: 'en'
  },
  {
    title: '中文',
    value: 'zh'
  }
];

export function LocaleSwitch(props: LocaleSwitchProps) {
  const { className } = props;
  const router = useRouter();
  const [isShowLocaleSubMenu, setIsShowLocaleSubMenu] = useState(false);

  const handleLocaleChange = useCallback(
    (language: string) => {
      return () => {
        router
          .replace(router.pathname, router.pathname, {
            locale: language
          })
          .catch(console.error);
      };
    },
    [router]
  );

  return (
    <div className={cn(styles.LocaleSwitch, className)}>
      <div
        className="relative flex cursor-pointer items-center justify-center h-16"
        onMouseEnter={() => {
          setIsShowLocaleSubMenu(true);
        }}
        onMouseLeave={() => {
          setIsShowLocaleSubMenu(false);
        }}
      >
        <Image src={localeImg} className="h-5 w-5" />
        <span className="ml-1">{router.locale === 'zh' ? '中文' : 'EN'}</span>
        {isShowLocaleSubMenu && (
          <RoundedContainer className="absolute top-16 -left-8">
            <ul>
              {languages.map((item) => (
                <li
                  onClick={handleLocaleChange(item.value)}
                  key={item.value}
                  className={cn(
                    'w-40 h-10 hover:bg-themeGreen hover:text-white'
                  )}
                >
                  <div className="w-full h-full pl-3 text-sm flex items-center space-x-4">
                    <span>{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </RoundedContainer>
        )}
      </div>
    </div>
  );
}
