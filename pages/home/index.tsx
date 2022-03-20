/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './_index.module.scss';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common']))
    }
  };
};

const Home = () => {
  const { t, i18n } = useTranslation('common');
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLocaleChange = useCallback(() => {
    router
      .replace(router.pathname, router.pathname, {
        locale: i18n.language === 'zh' ? 'en' : 'zh'
      })
      .catch(console.error);
  }, [router, i18n]);

  return (
    <div className={styles.Home}>
      <button onClick={handleLocaleChange}>{t('toggleLanguage')}</button>
      <h1 className="text-3xl font-bold underline border-2 border-orange-500">
        Hello world!
      </h1>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Mode
        </button>
      </div>
      <h1 className="text-black dark:text-red-900">111111</h1>
    </div>
  );
};

export default Home;
