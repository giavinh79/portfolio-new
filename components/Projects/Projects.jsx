import { PROJECTS_DATA } from '../../constants';
import Card from './Card';
import Masonry from 'react-masonry-css';
import styles from './projects.module.css';

const breakpointColumnsObj = {
  default: 3,
  2400: 2,
  1700: 1,
};

export default function Projects() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles['masonry-grid']}
      columnClassName={styles['masonry-grid_column']}
    >
      <Card
        image='/images/plop1.PNG'
        title={PROJECTS_DATA['PLOP'].title}
        description={PROJECTS_DATA['PLOP'].description}
      />
      <Card
        image='/images/codeconnect1.PNG'
        title={PROJECTS_DATA['CODECONNECT'].title}
        description={PROJECTS_DATA['CODECONNECT'].description}
      />
      <Card
        image='/images/gymtrack1.PNG'
        title={PROJECTS_DATA['GYMTRACK'].title}
        description={PROJECTS_DATA['GYMTRACK'].description}
      />
      <Card
        image='/images/reactbodyhighlighter1.PNG'
        title={PROJECTS_DATA['REACT BODY HIGHLIGHTER'].title}
        description={PROJECTS_DATA['REACT BODY HIGHLIGHTER'].description}
      />
      <Card
        image='/images/banana1.PNG'
        title={PROJECTS_DATA['BANANA RIPENESS DETECTOR'].title}
        description={PROJECTS_DATA['BANANA RIPENESS DETECTOR'].description}
      />
      <Card
        image='/images/lego1.PNG'
        title={PROJECTS_DATA['LEGO'].title}
        description={PROJECTS_DATA['LEGO'].description}
      />
      <Card
        image='/images/passport1.PNG'
        title={PROJECTS_DATA['PASSPORT'].title}
        description={PROJECTS_DATA['PASSPORT'].description}
      />
      <Card
        image='/images/french1.PNG'
        title={PROJECTS_DATA['FRENCH CONJUGATOR'].title}
        description={PROJECTS_DATA['FRENCH CONJUGATOR'].description}
      />
    </Masonry>
  );
}
