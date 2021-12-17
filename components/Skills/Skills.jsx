import { lazy, Suspense } from 'react';
import Image from 'next/image';

import styles from './skills.module.css';
import resume from '../../public/docs/giavinhlam-2.png';

const ContactForm = lazy(() => import('./ContactForm'));

export const Skills = () => {
  return (
    <div className={styles.grid}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.resume}>
          <Image alt='Resume' src={resume} layout='intrinsic' priority placeholder='blur' />
        </div>
        <div className={styles['resume-wrapper']}>
          <a className={styles['resume-download']} href='/docs/giavinhlam.pdf' download='giavinhlam.pdf'>
            <p className={styles['resume-download-text']}>Download</p>
            <i className='fa fa-download' aria-hidden='true' style={{ color: '#666' }}></i>
          </a>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <ContactForm />
      </Suspense>
    </div>
  );
};
