import Head from 'next/head';
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
  return (
    <>
      <Head>
        <title>{`Giavinh Lam - ${project.title}`}</title>
        <link rel='preload' href={`/images/projects/${project.imageName}1.png`} as='image' />
        <meta name='description' content={project.description} />
      </Head>

      <main>{<Project project={project} />}</main>
    </>
  );
}
