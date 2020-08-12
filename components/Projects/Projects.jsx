import { PROJECTS_DATA } from '../../constants';
import Card from './Card';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.grid}>
      <div className={styles.column}>
        <Card
          image='/images/plop1.PNG'
          title={PROJECTS_DATA['PLOP'].title}
          description={PROJECTS_DATA['PLOP'].description}
        />
        <Card
          image='/images/gymtrack1.PNG'
          title={PROJECTS_DATA['GYMTRACK'].title}
          description={PROJECTS_DATA['GYMTRACK'].description}
        />
      </div>
      <div className={styles.column}>
        <Card
          image='/images/codeconnect1.PNG'
          title={PROJECTS_DATA['CODECONNECT'].title}
          description={PROJECTS_DATA['CODECONNECT'].description}
        />
        <Card
          image='/images/reactbodyhighlighter1.PNG'
          title={PROJECTS_DATA['REACT BODY HIGHLIGHTER'].title}
          description={PROJECTS_DATA['REACT BODY HIGHLIGHTER'].description}
        />
      </div>
    </div>
  );
}
