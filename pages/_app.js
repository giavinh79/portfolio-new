import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

import { lazyLoadCss } from 'helpers/';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    lazyLoadCss(['https://fonts.googleapis.com/css?family=Montserrat:400,700']);
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=UA-177902424-1'
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'UA-177902424-1');
        }}
        strategy='lazyOnload'
      />
      <Script src='https://kit.fontawesome.com/23287ecd37.js' crossOrigin='anonymous' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
