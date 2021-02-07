import { SocialMedia } from './SocialMedia';
import styles from './introduction.module.css';
import Image from 'next/image';

export const Introduction = () => {
  return (
    <div className={styles.container}>
      <p className={styles.school}>UNIVERSITY OF GUELPH</p>
      <h1 className={styles.title}>
        Giavinh <span style={{ color: '#0070F3' }}>Lam</span>
      </h1>
      <h2 className={styles.subtitle}>Computer Engineering (CENG:C)</h2>
      <div className={styles['portfolio-wrapper']}>
        <Image
          src='/images/abstract/portfoliosvg.svg'
          layout='intrinsic'
          width={560}
          height={566.78}
          alt='portfolio abstract art'
          priority
        />
        <SocialMedia />
      </div>
    </div>
  );
};
