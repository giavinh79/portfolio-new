import { useState } from 'react';
import Skills from './Skills';
import styles from './content.module.css';
import Projects from './Projects';

const CONTENT = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
};

export default function Content() {
  const [contentType, setContentType] = useState(CONTENT.PROJECTS);

  return (
    <div className={styles.container}>
      <div className={styles['option-wrapper']}>
        <p
          className={`${styles.option} ${contentType === CONTENT.SKILLS && styles.selected}`}
          onClick={() => setContentType(CONTENT.SKILLS)}
        >
          SKILLS
        </p>
        <p
          className={`${styles.option} ${contentType === CONTENT.PROJECTS ? styles.selected : null}`}
          onClick={() => setContentType(CONTENT.PROJECTS)}
        >
          PROJECTS
        </p>
      </div>
      {contentType === CONTENT.SKILLS ? <Skills /> : <Projects />}
    </div>
  );
}
