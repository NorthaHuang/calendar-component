import type { FC } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import NormalizeCSS from '@styles/NormalizeCSS';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>

    {/* Global Styles */}
    <NormalizeCSS />

    <Component {...pageProps} />
  </>
);

export default MyApp;
