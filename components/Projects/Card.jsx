import Link from 'next/link';
import Image from 'next/image';

import styles from './card.module.css';

export const Card = (props) => {
  const { description, image, imageWidth = 983, imageHeight = 484, title } = props;
  const urlTitle = title.toLowerCase();

  return (
    <div className={styles.card} tabIndex='-1'>
      <Link href={`/projects/${urlTitle}`}>
        <Image
          src={image}
          alt={`Thumbnail for ${title}`}
          width={imageWidth}
          height={imageHeight}
          className={styles.image}
        />
      </Link>
      <p className={styles.title}>{title}</p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      <Link href={`/projects/${urlTitle}`} className={styles.linkButton}>
        VIEW DETAILS &rarr;
      </Link>
    </div>
  );
};
