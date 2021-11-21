import Script from 'next/script';

function MyApp({ Component, pageProps }) {
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
      />
      <Script src='https://kit.fontawesome.com/23287ecd37.js' crossOrigin='anonymous' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
