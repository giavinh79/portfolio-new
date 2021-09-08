import Image from 'next/image';

import { SocialMedia } from './SocialMedia';
import portfolio from '../../public/images/abstract/portfoliosvg.svg';
import styles from './introduction.module.css';

export const Introduction = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.school}>UNIVERSITY OF GUELPH</p>
        <h1 className={styles.title}>
          Giavinh <span style={{ color: '#0070F3' }}>Lam</span>
        </h1>
        <h2 className={styles.subtitle}>
          <span>Software Developer</span>
          <span> &bull; </span>
          <span>B. Eng</span>
        </h2>
        <div className={styles['portfolio-wrapper']}>
          <Image src={portfolio} alt='portfolio abstract art' />
          <SocialMedia />
        </div>
      </div>
    </>
  );
};
