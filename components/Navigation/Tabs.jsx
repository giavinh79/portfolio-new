import { useState } from 'react';
import { Skills } from 'components/Skills';
import { Projects } from 'components/Projects';
import styles from './tabs.module.css';

const CONTENT = {
  SKILLS: 'SKILLS',
  PROJECTS: 'PROJECTS',
};

export const Tabs = () => {
  const [contentType, setContentType] = useState(CONTENT.PROJECTS);

  return (
    <div className={styles.container}>
      <div className={styles['option-wrapper']}>
        <button
          className={contentType === CONTENT.SKILLS ? `${styles.option} ${styles.selected}` : styles.option}
          onClick={() => setContentType(CONTENT.SKILLS)}
        >
          {CONTENT.SKILLS}
        </button>
        <button
          className={contentType === CONTENT.PROJECTS ? `${styles.option} ${styles.selected}` : styles.option}
          onClick={() => setContentType(CONTENT.PROJECTS)}
        >
          {CONTENT.PROJECTS}
        </button>
      </div>
      {contentType === CONTENT.SKILLS ? <Skills /> : <Projects />}
    </div>
  );
};
