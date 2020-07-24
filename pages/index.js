import Head from 'next/head';
import Introduction from '../components/Introduction';
import SocialMedia from '../components/SocialMedia';
import Content from '../components/Content';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Giavinh Lam</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <meta name='description' content="Giavinh Lam's Portfolio Website" />
        <meta name='keywords' content='Giavinh, Giavinh Lam, Gia Vinh Lam, Gia Vinh, University of Guelph' />
        <meta name='author' content='Giavinh Lam' />
      </Head>

      <main>
        <Introduction />
        {/* <h3 style={{ color: '#bbb' }}>Coding Projects</h3> */}
        <Content />
      </main>

      {/* <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
        </a>
      </footer> */}

      <style jsx>{`
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          display: flex;
          flex-direction: row;
          margin: 0;
          width: 100%;
          flex: 1;
          justify-content: space-between;
        }

        footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 3rem;
          border-top: 1px solid #eaeaea;
          // display: flex;
          // justify-content: center;
          // align-items: center;
          color: #e8e8e8;
          background-color: #2b3137;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
            Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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
