import Link from 'next/link';
import styles from './card.module.css';

export const Card = ({ description, image, title }) => {
  const urlTitle = title.toLowerCase();

  return (
    <div className={styles.card}>
      <Link href={`/projects/${urlTitle}`}>
        <img src={image} className={styles.image} alt={`Thumbnail for ${title}`} />
      </Link>
      <p className={styles.title}>{title}</p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      <button tabIndex='0' className={styles.button} onClick={() => router.push(`/projects/${title.toLowerCase()}`)}>
        VIEW DETAILS &rarr;
      </button>
    </div>
  );
};
