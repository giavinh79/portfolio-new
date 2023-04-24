import { lazy, Suspense } from 'react';
import Image from 'next/image';

import styles from './skills.module.css';
import resume from '../../public/docs/giavinhlam-4.png';

const ContactForm = lazy(() => import('./ContactForm'));

export const Skills = () => {
  return (
    <div className={styles.grid}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image alt='Resume' src={resume} priority placeholder='blur' className={styles.resume} />
        <div className={styles['resume-download-wrapper']}>
          <a className={styles['resume-download']} href='/docs/giavinhlam.pdf' download='giavinhlam.pdf'>
            <p className={styles['resume-download-text']}>Download</p>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' aria-hidden='true'>
              <path d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z' />
            </svg>
          </a>
        </div>
      </div>
      <Suspense fallback={<>Loading Contact Form...</>}>
        <ContactForm />
      </Suspense>
    </div>
  );
};
