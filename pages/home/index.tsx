/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { NextSeo } from 'next-seo';
import { useTheme } from 'next-themes';
import React from 'react';

import { useTranslation } from '@/assets/i18n';

import styles from './_index.module.scss';

const Home = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

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
