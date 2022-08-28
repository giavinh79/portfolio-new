import { useEffect } from 'react';
import Script from 'next/script';

import { lazyLoadCss } from 'helpers/';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    lazyLoadCss(['https://fonts.googleapis.com/css?family=Montserrat:400,700']);
  }, []);

  return (
    <>
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
