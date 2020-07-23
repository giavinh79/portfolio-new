/* LinkedIn, GitHub, Mail ... */

import styles from './socialMedia.module.css';

export default function SocialMedia() {
  return (
    <div style={{ display: 'flex', marginTop: 'auto', marginLeft: 'auto' }}>
      {/* <i className={`${styles.icon} fa fa-sun-o`} aria-hidden='true'></i> */}
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/giavinh-lam-aa5bb2117/'
        aria-label='LinkedIn'
        className={styles.iconWrapper}
      >
        <i className={`${styles.icon} fa fa-linkedin-square`}></i>
        <p>LINKEDIN</p>
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/gv79'
        aria-label='GitHub'
        className={styles.iconWrapper}
      >
        <i className={`${styles.icon} fa fa-github`}></i>
        <p>GITHUB</p>
      </a>
      <a href='mailto:glam01@uoguelph.ca' aria-label='Email' className={styles.iconWrapper}>
        <i className={`${styles.icon} fa fa-envelope`}></i>
        <p>EMAIL</p>
      </a>
    </div>
  );
}
