/*
 * Page for clicked projects
 * Similar to index page structure (index.js)
 */

import Head from 'next/head';
import Introduction from '../../components/Introduction';
import Project from '../../components/Project';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { project } = router.query;
  console.log(router.query);

  return (
    <div>
      <Head>
        <title>Giavinh Lam</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900' rel='stylesheet' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css'></link>
        <meta name='author' content='Giavinh Lam' />
      </Head>

      <main>
        <Introduction />
        <Project title={project} images={5} description='Blah Blah' technologies={['React.js', 'Redux']} />
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
};

export default Post;
