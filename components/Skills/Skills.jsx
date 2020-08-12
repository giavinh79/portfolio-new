import { lazy, Suspense } from 'react';
import styles from './skills.module.css';

const ContactForm = lazy(() => import('./ContactForm'));

export default function Skills() {
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
      {/* <div style={{ display: 'flex', maxWidth: '52rem', marginTop: '2rem', width: '100%' }}>
          <a href='https://reactjs.org/' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h3>React.js &rarr;</h3>
            <p>JavaScript Library</p>
          </a>

          <a href='https://nodejs.org/en/' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h3>Node.js &rarr;</h3>
            <p>JavaScript Runtime Ensvironment</p>
          </a> */}
      <Suspense fallback={<></>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
