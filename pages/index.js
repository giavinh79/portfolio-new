import { useEffect } from 'react';
import Head from 'next/head';

import { lazyLoadCss } from 'helpers';
import { Introduction } from '../components/Profile/';
import { Content } from '../components/Navigation/';

export default function Home() {
  useEffect(() => {
    lazyLoadCss(['https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900']);
  }, []);

  return (
    <div>
      <Head>
        <title>Giavinh Lam</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
        />
        <meta name='keywords' content='Giavinh, Giavinh Lam, Gia Vinh Lam, Gia Vinh, University of Guelph' />
        <meta name='author' content='Giavinh Lam' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='prefetch' href='/docs/giavinhlam-1.png' />
      </Head>

      <main>
        <Introduction />
        <Content />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
