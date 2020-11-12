import Head from 'next/head';
import Introduction from '../components/Profile/Introduction';
import Content from '../components/Navigation/Content';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const { head } = document;
    const fontLink = document.createElement('link');
    const iconLink = document.createElement('link');

    fontLink.type = 'text/css';
    fontLink.rel = 'stylesheet';
    iconLink.type = 'text/css';
    iconLink.rel = 'stylesheet';

    fontLink.href = 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900';
    iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

    head.appendChild(fontLink);
    head.appendChild(iconLink);
  }, [])

  return (
    <div>
      <Head>
        <title>Giavinh Lam</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Giavinh Lam's Portfolio Website" />
        <meta name='keywords' content='Giavinh, Giavinh Lam, Gia Vinh Lam, Gia Vinh, University of Guelph' />
        <meta name='author' content='Giavinh Lam' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link href='https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        /> */}
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
