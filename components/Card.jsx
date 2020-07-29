import styles from './card.module.css';
import { useRouter } from 'next/router';

export default function Card({ description, image, title }) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} onClick={() => router.push(`/projects/${title}`)} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      <button className={styles.button} onClick={() => router.push(`/projects/${title}`)}>
        VIEW DETAILS &rarr;
      </button>
    </div>
  );
}
