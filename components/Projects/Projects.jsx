import { Masonry } from 'react-plock';

import { PROJECTS_DATA } from 'utils/constants';
import { Card } from 'components/Projects/Card';

const IMAGE_URL = '/images/projects';

const PROJECTS = [
  {
    image: `${IMAGE_URL}/plop1.png`,
    title: PROJECTS_DATA['PLOP'].title,
    description: PROJECTS_DATA['PLOP'].description,
    priority: true,
  },
  {
    image: `${IMAGE_URL}/codeconnect1.png`,
    title: PROJECTS_DATA['CODECONNECT'].title,
    description: PROJECTS_DATA['CODECONNECT'].description,
    priority: true,
  },
  {
    image: `${IMAGE_URL}/gymtrack1.png`,
    title: PROJECTS_DATA['GYMTRACK'].title,
    description: PROJECTS_DATA['GYMTRACK'].description,
    priority: true,
  },
  {
    image: `${IMAGE_URL}/reactbodyhighlighter1.png`,
    title: PROJECTS_DATA['REACT BODY HIGHLIGHTER'].title,
    description: PROJECTS_DATA['REACT BODY HIGHLIGHTER'].description,
    imageWidth: 531,
    imageHeight: 424,
    priority: true,
  },
  {
    image: `${IMAGE_URL}/banana1.png`,
    title: PROJECTS_DATA['BANANA RIPENESS DETECTOR'].title,
    description: PROJECTS_DATA['BANANA RIPENESS DETECTOR'].description,
  },
  {
    image: `${IMAGE_URL}/lego1.png`,
    title: PROJECTS_DATA['LEGO'].title,
    description: PROJECTS_DATA['LEGO'].description,
  },
  {
    image: `${IMAGE_URL}/passport1.png`,
    title: PROJECTS_DATA['PASSPORT'].title,
    description: PROJECTS_DATA['PASSPORT'].description,
  },
  {
    image: `${IMAGE_URL}/french1.png`,
    title: PROJECTS_DATA['FRENCH CONJUGATOR'].title,
    description: PROJECTS_DATA['FRENCH CONJUGATOR'].description,
    imageWidth: 777,
    imageHeight: 458,
  },
];

const MASONRY_CONFIG = {
  columns: [1, 2, 1, 2, 3, 4],
  gap: [60, 60, 60, 60, 60, 60],
  media: [1000, 1024, 1560, 2000, 3000, 4000],
};

export const Projects = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <Masonry items={PROJECTS} config={MASONRY_CONFIG} render={(item, idx) => <Card key={idx} {...item} />} />
    </main>
  );
};
