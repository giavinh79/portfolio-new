import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

export const Card = ({ description, image, imageWidth = 1903, imageHeight = 937, priority = false, title }) => {
  const urlTitle = title.toLowerCase();

  return (
    <div className={styles.card}>
      <Link href={`/projects/${urlTitle}`}>
        <div className={styles.image}>
          <Image
            src={image}
            alt={`Thumbnail for ${title}`}
            width={imageWidth}
            height={imageHeight}
            layout='responsive'
            priority={priority}
            className={styles.rounded}
          />
        </div>
      </Link>
      <p className={styles.title}>{title}</p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      <Link href={`/projects/${urlTitle}`}>
        <button tabIndex='0' className={styles.button}>
          VIEW DETAILS &rarr;
        </button>
      </Link>
    </div>
  );
};
