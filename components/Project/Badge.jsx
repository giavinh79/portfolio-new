import styles from './badge.module.css';

export default function Badge({ icon, image, text }) {
  return (
    <div className={styles.badge}>
      {icon ? <i className={icon}></i> : image && <img src={image} alt='icon' className={styles.image} />}
      <p>{text}</p>
    </div>
  );
}
