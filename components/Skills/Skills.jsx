import { lazy, Suspense } from 'react';
import styles from './skills.module.css';

const ContactForm = lazy(() => import('./ContactForm'));

export const Skills = () => {
  return (
    <div className={styles.grid}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img className={styles.resume} src='/docs/giavinhlam-1.png' alt='Resume' />
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
