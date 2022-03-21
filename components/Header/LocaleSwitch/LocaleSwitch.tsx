import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import localeImg from '@/assets/images/header/locale.svg';

import styles from './LocaleSwitch.module.scss';

interface LocaleSwitchProps {
  className?: string;
}

export function LocaleSwitch(props: LocaleSwitchProps) {
  const { className } = props;
  const router = useRouter();

  const handleLocaleChange = useCallback(() => {
    router
      .replace(router.pathname, router.pathname, {
        locale: router.locale === 'zh' ? 'en' : 'zh'
      })
      .catch(console.error);
  }, [router]);

  return (
    <div
      className={cn(styles.LocaleSwitch, className)}
      onClick={handleLocaleChange}
    >
      <div className="relative flex cursor-pointer items-center justify-center">
        <Image src={localeImg} className=" h-5 w-5" />
        <span className="ml-1">{router.locale === 'zh' ? '中文' : 'EN'}</span>
      </div>
    </div>
  );
}
