import { PROJECTS_DATA } from '../../constants';
import { Card } from './Card';
import Masonry from 'react-masonry-css';
import styles from './projects.module.css';

const IMAGE_URL = '/images/projects';

export const Projects = () => {
  return (
    <Masonry
      breakpointCols={{
        default: 3,
        2400: 2,
        1700: 1,
      }}
      className={styles['masonry-grid']}
      columnClassName={styles['masonry-grid_column']}
    >
      <Card
        image={`${IMAGE_URL}/plop1.png`}
        title={PROJECTS_DATA['PLOP'].title}
        description={PROJECTS_DATA['PLOP'].description}
      />
      <Card
        image={`${IMAGE_URL}/codeconnect1.png`}
        title={PROJECTS_DATA['CODECONNECT'].title}
        description={PROJECTS_DATA['CODECONNECT'].description}
      />
      <Card
        image={`${IMAGE_URL}/gymtrack1.png`}
        title={PROJECTS_DATA['GYMTRACK'].title}
        description={PROJECTS_DATA['GYMTRACK'].description}
      />
      <Card
        image={`${IMAGE_URL}/reactbodyhighlighter1.png`}
        imageWidth={531}
        imageHeight={424}
        title={PROJECTS_DATA['REACT BODY HIGHLIGHTER'].title}
        description={PROJECTS_DATA['REACT BODY HIGHLIGHTER'].description}
      />
      <Card
        image={`${IMAGE_URL}/banana1.png`}
        title={PROJECTS_DATA['BANANA RIPENESS DETECTOR'].title}
        description={PROJECTS_DATA['BANANA RIPENESS DETECTOR'].description}
      />
      <Card
        image={`${IMAGE_URL}/lego1.png`}
        title={PROJECTS_DATA['LEGO'].title}
        description={PROJECTS_DATA['LEGO'].description}
      />
      <Card
        image={`${IMAGE_URL}/passport1.png`}
        title={PROJECTS_DATA['PASSPORT'].title}
        description={PROJECTS_DATA['PASSPORT'].description}
      />
      <Card
        image={`${IMAGE_URL}/french1.png`}
        imageWidth={777}
        imageHeight={458}
        title={PROJECTS_DATA['FRENCH CONJUGATOR'].title}
        description={PROJECTS_DATA['FRENCH CONJUGATOR'].description}
      />
    </Masonry>
  );
};
