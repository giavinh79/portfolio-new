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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

