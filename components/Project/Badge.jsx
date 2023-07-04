import styles from './badge.module.css';

export const Badge = ({ icon, image, text }) => {
  return (
    <div className={styles.badge}>
      {icon ? <i className={icon} /> : image && <img src={image} alt={`${text} icon`} className={styles.image} />}
      <p>{text}</p>
    </div>
  );
};
