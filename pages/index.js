import { useEffect } from 'react';
import Head from 'next/head';

import { lazyLoadCss } from 'helpers/';
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
        <meta name='keywords' content='Giavinh, GV79, Giavinh Lam, Gia Vinh Lam, Gia Vinh, University of Guelph' />
        <meta name='author' content='Giavinh Lam' />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content='https://giavinhlam.com/' key='ogurl' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Giavinh Lam' key='ogtitle' />
        <meta property='og:site_name' content="Giavinh Lam's Portfolio" key='ogsitename' />
        <meta
          property='og:description'
          content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
        />
        <meta property='og:image' content='https://giavinhlam.com/images/abstract/portfoliosvg.svg' key='ogimage' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='https://giavinhlam.com' />
        <meta property='twitter:url' content='https://giavinhlam.com' />
        <meta name='twitter:title' content='Giavinh Lam' />
        <meta
          name='twitter:description'
          content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
        />
        <meta name='twitter:image' content='https://giavinhlam.com/images/abstract/portfoliosvg.svg' />

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
