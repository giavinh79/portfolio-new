import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Badges } from './Badges';
import styles from './project.module.css';

export const Project = ({ project }) => {
  const { tags, title, description, github, demo, numImages, imageName } = project;

  const router = useRouter();
  const [carouselIndex, setCarouselIndex] = useState(1);

  useEffect(() => {
    const { head } = document;

    const cssToLazyLoad = [
      'https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    ];

    cssToLazyLoad.forEach((css) => {
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = css;
      head.appendChild(link);
    });

    router.prefetch('/');
  }, [router]);

  const handleNextPicture = () => {
    const index = carouselIndex === numImages ? 1 : carouselIndex + 1;

    setCarouselIndex(index);
  };

  const handlePreviousPicture = () => {
    const index = carouselIndex === 1 ? numImages : carouselIndex - 1;

    setCarouselIndex(index);
  };

  const handleDotChange = (carouselIndex) => {
    setCarouselIndex(carouselIndex);
  };

  const renderDots = () => {
    const dots = [];

    for (let i = 1; i < numImages + 1; i++) {
      const classNames = i === carouselIndex ? `${styles.dot} ${styles.active}` : styles.dot;

      dots.push(<span key={i} className={classNames} onClick={() => handleDotChange(i)}></span>);
    }
    return dots;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.back}>
          <div className={styles['link-wrapper']}>
            <div className={styles.link}>
              <button
                className={styles['demo-button']}
                disabled={github == null}
                onClick={() => window.open(github, '_blank') || window.location.replace(github)}
              >
                <i className='fa fa-github' aria-hidden='true'></i>
                GITHUB
              </button>
              <a href={github} target='_blank' rel='noopener noreferrer'>
                {github ? github.substring(8, github.length) : 'Private'}
              </a>
            </div>
            <div className={styles.link}>
              <button
                className={styles['demo-button']}
                disabled={demo == null}
                onClick={() => window.open(demo, '_blank') || window.location.replace(demo)}
              >
                <i className='fa fa-globe' aria-hidden='true'></i>
                DEMO
              </button>
              <a href={demo} target='_blank' rel='noopener noreferrer'>
                {demo ? demo.substring(8, demo.length) : 'N/A'}
              </a>
            </div>
          </div>
          <button className={styles['button']} onClick={() => router.push('/')}>
            &larr; GO BACK
          </button>
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
            alt={`${project}${carouselIndex}`}
          />
          {numImages > 1 && (
            <span className={styles['navigation-arrow']} onClick={handleNextPicture}>
              ❯
            </span>
          )}
        </div>
        <div className={styles['dot-wrapper']}>{renderDots()}</div>
        <Badges tags={tags} />

        <p className={styles.title}>{title}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};
