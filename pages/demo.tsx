import { GetStaticPropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import styles from '@/styles/Demo.module.scss';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common']))
    }
  };
}

const Demo: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <span>{t('toggleLanguage')}</span>
      <h1 className="text-3xl font-bold underline border-2 border-orange-500">
        Hello world!
      </h1>
    </div>
  );
};

export default Demo;
