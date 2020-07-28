import styles from './badge.module.css';

export default function Badge({ icon, text }) {
  return (
    <div className={styles.badge}>
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}
