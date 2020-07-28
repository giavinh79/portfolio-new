import styles from './projects.module.css';

export default function Project({ title, description }) {
  return (
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
