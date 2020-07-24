import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.grid}>
      <div className={styles.row}>
        <div className={styles.card} style={{ marginRight: '4rem' }}>
          <img
            src='/images/plop.PNG'
            style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }}
          />
          <p className={styles.title}>Plop</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src='/images/CodeConnectDark.PNG'
            style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }}
          />
          <p className={styles.title}>CodeConnect</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.card} style={{ marginRight: '4rem' }}>
          <img
            src='/images/GymTrack.PNG'
            style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }}
          />
          <p className={styles.title}>GymTrack</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src='/images/ReactBodyHighlighter.PNG'
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '1rem',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              maxHeight: '222px',
              objectFit: 'cover',
            }}
          />
          <p className={styles.title}>React Body Highlighter</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cumque officia esse earum nemo maxime
            explicabo excepturi sed voluptas tempore in sequi.
          </p>
        </div>
      </div>
    </div>
  );
}
