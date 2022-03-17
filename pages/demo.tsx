import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }:GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale||'', ['common'])),
    },
  };
}
const Demo: NextPage = () => {
    const {t} = useTranslation('common');
    return <div>{t('toggleLanguage')}</div>
}

export default Demo