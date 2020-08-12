/*
 * Page for clicked projects
 */

import Head from 'next/head';
import Project from '../../components/Project/Project';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProjectPage() {
  const router = useRouter();
  const { project } = router.query;

  useEffect(() => {
    let head = document.head;
    let link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat';

    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Giavinh Lam</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Giavinh Lam' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css'></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        {project && <link rel='preload' href={`/images/${project}1.PNG`} as='image' /> && (
          <meta name='description' content={`Project page for ${project}`} />
        )}
      </Head>

      <main>{project && <Project project={project} />}</main>

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
