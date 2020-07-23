import Head from 'next/head';
import Introduction from '../components/Introduction';
import SocialMedia from '../components/SocialMedia';

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
        <div style={{ marginLeft: '33rem', padding: '2rem' }}>
          {/* <h3 style={{ color: '#bbb' }}>Coding Projects</h3> */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
            <p
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1.2rem',
                color: '#b1b1b1',
                margin: '0',
              }}
            >
              SKILLS
            </p>
            <p style={{ margin: '0 1rem' }}></p>
            <p
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1.2rem',
                color: '#b1b1b1',
                margin: '0',
              }}
            >
              PROJECTS
            </p>
          </div>

          <div className='grid'>
            <a href='https://nextjs.org/docs' className='card'>
              {/* <code>Resume</code> */}
              <h3>React.js &rarr;</h3>
              <p>Placeholder text for the technology above</p>
            </a>

            <a href='https://nextjs.org/learn' className='card'>
              <h3>Node.js &rarr;</h3>
              <p>Placeholder text for the technology above</p>
            </a>

            <a href='https://github.com/vercel/next.js/tree/master/examples' className='card'>
              <h3>Java &rarr;</h3>
              <p>Placeholder text for the technology above</p>
            </a>

            <a
              href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className='card'
            >
              <h3>Python &rarr;</h3>
              <p>Placeholder text for the technology above</p>
            </a>
          </div>
        </div>
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
