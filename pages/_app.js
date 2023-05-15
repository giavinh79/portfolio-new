import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${montserrat.style.fontFamily};
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default MyApp;
