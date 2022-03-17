import { GetStaticPropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// eslint-disable-next-line node/no-extraneous-import
import { useTranslation } from 'react-i18next';

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
    <div>
      <span>{t('toggleLanguage')}</span>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Demo;
