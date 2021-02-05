import Head from 'next/head';
import { useEffect } from 'react';
import { PROJECTS_DATA } from 'constants/';
import { Project } from 'components/Project';

const isValidProject = (project) => {
  const validProperties = ['title', 'description', 'numImages', 'imageName', 'tags'];
  return validProperties.every((property) => property in project);
};

export async function getStaticPaths() {
  const projects = Object.entries(PROJECTS_DATA);
  const filteredProjects = projects.filter((project) => isValidProject(project[1]));

  const paths = filteredProjects.map((project) => ({
    params: {
      project: project[0].toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projects = Object.entries(PROJECTS_DATA);

  return {
    props: {
      project: projects.find((project) => project[0].toLowerCase() === params.project)[1],
    },
  };
}

export default function ProjectPage({ project }) {
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
    <>
      <Head>
        <title>{`Giavinh Lam - ${project.title}`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Giavinh Lam' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css'></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link rel='preload' href={`/images/${project.imageName}1.png`} as='image' />
        <meta name='description' content={project.description} />
      </Head>

      <main>{<Project project={project} />}</main>

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
    </>
  );
}
