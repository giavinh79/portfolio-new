import { useEffect, useState } from 'react';
import { Masonry } from 'masonic';

import { PROJECTS_DATA } from 'constants/';
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

export const Projects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // https://github.com/jaredLunde/masonic/issues/123
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-3441844
    setMounted(true);
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      {mounted && (
        <Masonry
          items={PROJECTS}
          columnGutter={60}
          rowGutter={60}
          columnWidth={400}
          render={Card}
          tabIndex='-1'
          role='list'
        />
      )}
    </main>
  );
};
