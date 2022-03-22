import '../styles/reset.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import { Layout } from '@/components/Layout';

import { I18nextProvider } from '../assets/i18n/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <I18nextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
