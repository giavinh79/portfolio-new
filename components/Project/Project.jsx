import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { CSS_TO_LAZY_LOAD } from 'constants';
import { lazyLoadCss } from 'helpers';

import { Badges } from './Badges';
import styles from './project.module.css';

export const Project = ({ project }) => {
  const { tags, title, description, github, demo, numImages, imageName } = project;

  const [carouselIndex, setCarouselIndex] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    lazyLoadCss(CSS_TO_LAZY_LOAD);
    setIsMounted(true);
  }, []);

  const handleNextPicture = () => {
    const index = carouselIndex === numImages ? 1 : carouselIndex + 1;

    setCarouselIndex(index);
  };

  const handlePreviousPicture = () => {
    const index = carouselIndex === 1 ? numImages : carouselIndex - 1;

    setCarouselIndex(index);
  };

  const renderDots = () => {
    const dots = [];

    for (let i = 1; i < numImages + 1; i++) {
      const classNames = i === carouselIndex ? `${styles.dot} ${styles.active}` : styles.dot;

      dots.push(<span key={i} className={classNames} onClick={() => setCarouselIndex(i)}></span>);
    }
    return dots;
  };

  const loadRemainingImages = useCallback(() => {
    if (numImages === 1) return;

    const startingIndex = 2; // first image already loaded on mount
    const imageIndexes = Array.from({ length: numImages - 1 }, (_, i) => startingIndex + i);

    return (
      <div style={{ display: 'none' }}>
        {imageIndexes.map((index) => (
          <img src={`/images/projects/${imageName}${index}.png`} alt={`placeholder for loading ${index}`} key={index} />
        ))}
      </div>
    );
  }, [imageName, numImages]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.back}>
          <div className={styles['link-wrapper']}>
            <div className={styles.link}>
              <a
                href={github}
                className={styles['linkButton']}
                disabled={github == null}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github' aria-hidden='true'></i>
                GITHUB
              </a>
              <a href={github} target='_blank' rel='noopener noreferrer'>
                {github ? github.substring(8, github.length) : 'Private'}
              </a>
            </div>
            <div className={styles.link}>
              <a
                href={demo}
                className={styles['linkButton']}
                disabled={demo == null}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-globe' aria-hidden='true'></i>
                DEMO
              </a>
              <a href={demo} target='_blank' rel='noopener noreferrer'>
                {demo ? demo.substring(8, demo.length) : 'N/A'}
              </a>
            </div>
          </div>
          <Link href='/' className={styles['button']}>
            &larr; GO BACK
          </Link>
        </div>
        <div className={styles.carousel}>
          {numImages > 1 && (
            <span className={styles['navigation-arrow']} onClick={handlePreviousPicture}>
              ❮
            </span>
          )}
          <img
            src={`/images/projects/${imageName}${carouselIndex}.png`}
            className={styles.image}
            alt={`${project.title} Sample Image ${carouselIndex}`}
          />
          {numImages > 1 && (
            <span className={styles['navigation-arrow']} onClick={handleNextPicture}>
              ❯
            </span>
          )}
        </div>
        <div className={styles['dot-wrapper']}>{renderDots()}</div>

        <Badges tags={tags} />

        <main>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
        </main>
        {isMounted && loadRemainingImages()}
      </div>
    </div>
  );
};
