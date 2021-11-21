import { Masonry } from 'masonic';

import { PROJECTS_DATA } from '../../constants';
import { Card } from './Card';

export const Projects = () => {
  const IMAGE_URL = '/images/projects';

  const items = [
    {
      image: `${IMAGE_URL}/plop1.png`,
      title: PROJECTS_DATA['PLOP'].title,
      description: PROJECTS_DATA['PLOP'].description,
      priority: true,
      tabIndex: 0,
    },
    {
      image: `${IMAGE_URL}/codeconnect1.png`,
      title: PROJECTS_DATA['CODECONNECT'].title,
      description: PROJECTS_DATA['CODECONNECT'].description,
      priority: true,
      tabIndex: 1,
    },
    {
      image: `${IMAGE_URL}/gymtrack1.png`,
      title: PROJECTS_DATA['GYMTRACK'].title,
      description: PROJECTS_DATA['GYMTRACK'].description,
      priority: true,
      tabIndex: 2,
    },
    {
      image: `${IMAGE_URL}/reactbodyhighlighter1.png`,
      title: PROJECTS_DATA['REACT BODY HIGHLIGHTER'].title,
      description: PROJECTS_DATA['REACT BODY HIGHLIGHTER'].description,
      imageWidth: 531,
      imageHeight: 424,
      priority: true,
      tabIndex: 3,
    },
    {
      image: `${IMAGE_URL}/banana1.png`,
      title: PROJECTS_DATA['BANANA RIPENESS DETECTOR'].title,
      description: PROJECTS_DATA['BANANA RIPENESS DETECTOR'].description,
      tabIndex: 4,
    },
    {
      image: `${IMAGE_URL}/lego1.png`,
      title: PROJECTS_DATA['LEGO'].title,
      description: PROJECTS_DATA['LEGO'].description,
      tabIndex: 5,
    },
    {
      image: `${IMAGE_URL}/passport1.png`,
      title: PROJECTS_DATA['PASSPORT'].title,
      description: PROJECTS_DATA['PASSPORT'].description,
      tabIndex: 6,
    },
    {
      image: `${IMAGE_URL}/french1.png`,
      title: PROJECTS_DATA['FRENCH CONJUGATOR'].title,
      description: PROJECTS_DATA['FRENCH CONJUGATOR'].description,
      imageWidth: 777,
      imageHeight: 458,
      tabIndex: 7,
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <Masonry items={items} columnGutter={60} rowGutter={60} columnWidth={400} render={Card} />
    </div>
  );
};
