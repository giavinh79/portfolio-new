import SocialMedia from './SocialMedia';
import styles from './introduction.module.css';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <p className={styles.school}>UNIVERSITY OF GUELPH</p>
      <h1 className={styles.title}>
        Giavinh <span style={{ color: '#0070F3' }}>Lam</span>
      </h1>
      <h2 className={styles.subtitle}>Computer Engineering (CENG:C)</h2>
      <div className={styles['portfolio-wrapper']}>
        <img src='/images/abstract/portfoliosvg.svg' alt='portfolio abstract art' />
        <SocialMedia />
      </div>
    </div>
  );
}
