import styles from './socialMedia.module.css';

export const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/giavinh-lam-aa5bb2117/'
        aria-label='LinkedIn'
        className={styles.iconWrapper}
      >
        <i className={`${styles.icon} fa fa-linkedin-square`}></i>
        <p className={styles.iconText}>LINKEDIN</p>
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/GV79/portfolio-new'
        aria-label='GitHub Link to Project'
        className={styles.iconWrapper}
      >
        <i className={`${styles.icon} fa fa-github`}></i>
        <p className={styles.iconText}>GITHUB</p>
      </a>
      <a href='mailto:giavinhlam@gmail.com' aria-label='Email' className={styles.iconWrapper}>
        <i className={`${styles.icon} fa fa-envelope`}></i>
        <p className={styles.iconText}>EMAIL</p>
      </a>
    </div>
  );
};
