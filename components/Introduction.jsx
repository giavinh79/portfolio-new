import styles from './introduction.module.css';
import SocialMedia from './SocialMedia';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <p className={styles.school}>UNIVERSITY OF GUELPH</p>
      <h1 className={styles.title}>
        Giavinh <span style={{ color: '#0070F3' }}>Lam</span>
      </h1>

      <h2 className={styles.subtitle}>Computer Engineering (CENG:C)</h2>
      <div
        style={{
          border: '1px solid #c8c8c8',
          borderRadius: '10px',
          width: '100%',
          height: '100%',
          margin: '2rem 0 2rem 0',
        }}
      ></div>
      <SocialMedia />
      {/* <p className='description'>
      Passionate about learning new software tools and technologies. Passionate about good coding practices (clean, readable, and maintainable) and
      design.For more information, please see my Resume, GitHub, or projects below.
    </p> */}
    </div>
  );
}
