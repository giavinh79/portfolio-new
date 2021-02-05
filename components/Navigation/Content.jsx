import { useState } from 'react';
import { Skills } from '../Skills';
import { Projects } from 'components/Projects';
import styles from './content.module.css';

const CONTENT = {
  SKILLS: 'SKILLS',
  PROJECTS: 'PROJECTS',
};

export const Content = () => {
  const [contentType, setContentType] = useState(CONTENT.PROJECTS);

  return (
    <div className={styles.container}>
      <div className={styles['option-wrapper']}>
        <p
          className={`${styles.option} ${contentType === CONTENT.SKILLS && styles.selected}`}
          onClick={() => setContentType(CONTENT.SKILLS)}
        >
          {CONTENT.SKILLS}
        </p>
        <p
          className={`${styles.option} ${contentType === CONTENT.PROJECTS ? styles.selected : null}`}
          onClick={() => setContentType(CONTENT.PROJECTS)}
        >
          {CONTENT.PROJECTS}
        </p>
      </div>
      {contentType === CONTENT.SKILLS ? <Skills /> : <Projects />}
    </div>
  );
};
