import Script from 'next/script';
import Head from 'next/head';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
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
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${montserrat.style.fontFamily};
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default MyApp;
