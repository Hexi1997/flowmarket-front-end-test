import cn from 'classnames';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import {
  Languages,
  LanguageType,
  switchLanguage,
  useTranslation
} from '@/assets/i18n';
import localeImg from '@/assets/images/header/locale.svg';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './LocaleSwitch.module.scss';

interface LocaleSwitchProps {
  className?: string;
}

const languages = Object.keys(Languages).map((item) => ({
  value: item,
  title: Languages[item].subMenuLabel
}));

export function LocaleSwitch(props: LocaleSwitchProps) {
  const { className } = props;
  const { i18n } = useTranslation();
  const [isShowLocaleSubMenu, setIsShowLocaleSubMenu] = useState(false);

  const handleLocaleChange = useCallback((language: string) => {
    return () => {
      setIsShowLocaleSubMenu(false);
      switchLanguage(language as LanguageType);
    };
  }, []);

  return (
    <div className={cn(styles.LocaleSwitch, className, 'hidden sm:block')}>
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
        <span className="ml-1">
          {Languages[i18n.language || '']?.headerLabel}
        </span>
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
