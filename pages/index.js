import Head from 'next/head';
import Introduction from '../components/Introduction';
import Content from '../components/Content';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Giavinh Lam</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css'></link>
        <link rel='preload' href='/docs/giavinhlam-1.png' as='image' />
        <meta name='description' content="Giavinh Lam's Portfolio Website" />
        <meta name='keywords' content='Giavinh, Giavinh Lam, Gia Vinh Lam, Gia Vinh, University of Guelph' />
        <meta name='author' content='Giavinh Lam' />
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
