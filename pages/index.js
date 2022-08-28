import Head from 'next/head';

import { Introduction } from 'components/Profile/';
import { Content } from 'components/Navigation/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giavinh Lam</title>
        <meta
          name='description'
          content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
        />
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
