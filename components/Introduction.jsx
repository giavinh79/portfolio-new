import styles from './introduction.module.css';
import SocialMedia from './SocialMedia';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <p className={styles.school}>UNIVERSITY OF GUELPH</p>
      {/* <div style={{ display: 'flex' }}> */}
      {/* <i className='fa fa-user' style={{ color: '#444', fontSize: '70px', marginRight: '1.5rem' }}></i> */}
      <h1 className={styles.title}>
        Giavinh <span style={{ color: '#0070F3' }}>Lam</span>
      </h1>
      {/* </div> */}

      <h2 className={styles.subtitle}>Computer Engineering (CENG:C)</h2>
      <div className={styles['portfolio-wrapper']}>
        <img src='/portfoliosvg.svg' alt='portfolio abstract art' />
      </div>
      {/* <p className={styles.description}>
        Passionate about learning new software tools and technologies. Passionate about good coding practices (clean,
        readable, and maintainable) and design.For more information, please see my Resume, GitHub, or projects below.
      </p> */}
      <SocialMedia />
    </div>
  );
}
