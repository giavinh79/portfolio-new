import ContactForm from './ContactForm';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <>
      <div className={styles.grid}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', cursor: 'pointer' }}>
            <p style={{ margin: 0, marginRight: '0.5rem', color: '#666', fontWeight: 500 }}>Download</p>
            <i className='fa fa-download' aria-hidden='true' style={{ color: '#666' }}></i>
          </div>
          <img className={styles.resume} src='/docs/0001-min.jpg' alt='Resume' loading='lazy' />
        </div>
        <div style={{ display: 'flex', maxWidth: '52rem', marginTop: '2rem', width: '100%' }}>
          <a href='https://reactjs.org/' className={styles.card} target='_blank' rel='noopener noreferrer'>
            {/* <code>Resume</code> */}
            <h3>React.js &rarr;</h3>
            {/* <p>JavaScript Library</p> */}
          </a>

          <a href='https://nodejs.org/en/' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h3>Node.js &rarr;</h3>
            {/* <p>JavaScript Runtime Environment</p> */}
          </a>

          <a href='https://www.java.com/en/' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h3>Java &rarr;</h3>
            {/* <p>Placeholder text for the technology above</p> */}
          </a>

          <a href='https://www.python.org/' className={styles.card} target='_blank' rel='noopener noreferrer'>
            <h3>Python &rarr;</h3>
            {/* <p>Placeholder text for the technology above</p> */}
          </a>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
