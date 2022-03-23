import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/globals.css';

import { BaseProvider, LightTheme } from 'baseui';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';

import { Layout } from '@/components/Layout';
import { theme } from '@/styles/baseuiTheme';

import { I18nextProvider } from '../assets/i18n/index';
import { styletron } from '../styletron';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <I18nextProvider>
        <StyletronProvider value={styletron}>
          <BaseProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </BaseProvider>
        </StyletronProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
