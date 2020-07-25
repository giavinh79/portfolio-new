import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.grid}>
      <div className={styles.row}>
        <div className={styles.card} style={{ marginRight: '4rem' }}>
          <img src='/images/plop.PNG' className={styles.image} />
          <p className={styles.title}>Plop</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
          <button className={styles.button}>VIEW PROJECT &rarr;</button>
        </div>
        <div className={styles.card}>
          <img src='/images/CodeConnectDark.PNG' className={styles.image} />
          <p className={styles.title}>CodeConnect</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
          <button className={styles.button}>VIEW PROJECT &rarr;</button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.card} style={{ marginRight: '4rem' }}>
          <img src='/images/GymTrack.PNG' className={styles.image} />
          <p className={styles.title}>GymTrack</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
          <button className={styles.button} disabled>
            VIEW PROJECT &rarr;
          </button>
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
  );
}
