import styles from './introduction.module.css';
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';

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
      <div
        style={{
          // border: '1px solid #c8c8c8',
          // backgroundColor: '#2B3137',
          // padding: '1rem',
          // borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          width: '100%',
          height: '100%',
          margin: '2rem 0 2rem 0',
        }}
      >
        {/* <h2 style={{ fontFamily: 'Montserrat', color: '#878A8F', textAlign: 'center' }}>Contact Me</h2> */}
        {/* <ContactForm /> */}
        <img src='/portfoliosvg.svg' alt='portfolio abstract art' style={{ width: '90%', height: 'auto' }} />
      </div>
      {/* <p className={styles.description}>
        Passionate about learning new software tools and technologies. Passionate about good coding practices (clean,
        readable, and maintainable) and design.For more information, please see my Resume, GitHub, or projects below.
      </p> */}
      <SocialMedia />
    </div>
  );
}
