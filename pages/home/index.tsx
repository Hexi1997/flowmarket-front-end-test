/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTheme } from 'next-themes';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { switchLanguage } from '../../assets/i18n/index';
import styles from './_index.module.scss';

const Home = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  // const handleLocaleChange = useCallback(() => {
  //   router
  //     .replace(router.pathname, router.pathname, {
  //       locale: i18n.language === 'zh' ? 'en' : 'zh'
  //     })
  //     .catch(console.error);
  // }, [router, i18n]);

  return (
    <>
      <NextSeo title="Home page" description="Home page of flow market place" />
      <div className={styles.Home}>
        <button>{t('language')}</button>
        <h1 className="text-3xl font-bold underline border-2 border-orange-500">
          Hello world!
        </h1>
        <div>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            Toggle Mode
          </button>
        </div>
        <h1 className="text-black dark:text-red-900">111111</h1>
      </div>
    </>
  );
};

export default Home;
