import Link from 'next/link';
import Image from 'next/image';

import styles from './card.module.css';

export const Card = ({ data }) => {
  const { description, image, imageWidth = 983, imageHeight = 484, priority = false, title } = data;
  const urlTitle = title.toLowerCase();

  return (
    <div className={styles.card} tabIndex='-1'>
      <Link passHref href={`/projects/${urlTitle}`}>
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
      <Link passHref href={`/projects/${urlTitle}`}>
        <button className={styles.button}>VIEW DETAILS &rarr;</button>
      </Link>
    </div>
  );
};
