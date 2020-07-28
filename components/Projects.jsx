import { useState } from 'react';
import { PROJECT } from '../constants';
import styles from './projects.module.css';
// import Badge from './Badge'; <Badge icon='devicon-react-original' text='React' />

export default function Projects() {
  const [featuredProject, setFeaturedProject] = useState(PROJECT.NONE);

  return featuredProject === PROJECT.NONE ? (
    <div className={styles.grid}>
      <div className={styles.column}>
        <div className={styles.card}>
          <img src='/images/plop.PNG' className={styles.image} />
          <p className={styles.title}>Plop</p>
          <p className={styles.description}>
            Open-source project management web application implemented with{' '}
            <span className={styles.technology}>React.js</span> for the frontend and{' '}
            <span className={styles.technology}>Adonis.js (Node.js framework)</span> as the REST API. Some features
            include administration hierarchy, chat, and task dashboards.
          </p>
          <button className={styles.button}>VIEW PROJECT &rarr;</button>
        </div>
        <div className={styles.card}>
          <img src='/images/GymTrack.PNG' className={styles.image} />
          <p className={styles.title}>GymTrack</p>
          <p className={styles.description}>
            This progressive web application allows users to track and manage their fitness journey easily on mobile or
            web. It is written using React.js, TypeScript, and Redux Toolkit. For styling, Reactstrap (Bootstrap) and
            SCSS+BEM is used. It connects with Google's Firebase for authentication and uses MongoDB for application
            storage (ie. user credentials, routines... etc.).
          </p>
          <button className={styles.button} disabled>
            VIEW PROJECT &rarr;
          </button>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.card}>
          <img src='/images/CodeConnectDark.PNG' className={styles.image} />
          <p className={styles.title}>CodeConnect</p>
          <p className={styles.description}>
            Web application platform for facilitating collaboration between software developers. It also provides the
            ability for users to create an online resume. It is built using{' '}
            <span className={styles.technology}>React.js</span>, TypeScript, Redux Toolkit, and Material-UI.
          </p>
          <button className={styles.button}>VIEW PROJECT &rarr;</button>
        </div>

        <div className={styles.card}>
          <img src='/images/ReactBodyHighlighter.PNG' className={styles.image} />
          <p className={styles.title}>React Body Highlighter</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
          <button className={styles.button}>VIEW PROJECT &rarr;</button>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.card} style={{ marginRight: '4rem' }}>
      <img src='/images/plop.PNG' className={styles.image} />
      <p className={styles.title}>Plop</p>
      <p className={styles.description}>
        Open-source project management web application implemented with{' '}
        <span className={styles.technology}>React.js</span> for the frontend and{' '}
        <span className={styles.technology}>Adonis.js (Node.js framework)</span> as the REST API. Some features include
        administration hierarchy, chat, and task dashboards.
      </p>
      <button className={styles.button}>VIEW PROJECT &rarr;</button>
    </div>
  );
}
