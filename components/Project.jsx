import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BADGE_ICONS, PROJECTS_DATA } from '../constants';
import Badge from './Badge';
import styles from './project.module.css';
import Badges from './Badges';

export default function Project({ project }) {
  const router = useRouter();
  const key = project.toUpperCase();

  /* Project Data */
  const { tags, title, description, github, demo, numImages, imageName } = PROJECTS_DATA[key];

  /* Counter for current image displayed */
  const [index, setIndex] = useState(1);

  useEffect(() => {
    router.prefetch('/');
  }, []);

  const handleNextPicture = () => {
    if (index === numImages) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePreviousPicture = () => {
    if (index === 1) {
      setIndex(numImages);
    } else {
      setIndex(index - 1);
    }
  };

  const handleDotChange = (index) => {
    setIndex(index);
  };

  const renderDots = () => {
    const dots = [];

    for (let i = 1; i < numImages + 1; i++) {
      if (i === index) {
        dots.push(
          <span
            key={i}
            index={i}
            className={`${styles.dot} ${styles.active}`}
            onClick={() => handleDotChange(i)}
          ></span>
        );
      } else {
        dots.push(<span key={i} index={i} className={styles.dot} onClick={() => handleDotChange(i)}></span>);
      }
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
          <span className={styles['navigation-arrow']} onClick={handlePreviousPicture}>
            ❮
          </span>
          <img src={`/images/${imageName}${index}.PNG`} className={styles.image} alt={`${project}${index}`} />
          <span className={styles['navigation-arrow']} onClick={handleNextPicture}>
            ❯
          </span>
        </div>
        <div className={styles['dot-wrapper']}>{renderDots()}</div>

        {/* <div className={styles['badge-wrapper']}>
          {tags.map((technology, index) => {
            const graphic = BADGE_ICONS[technology];

            if (graphic == null) return null;

            if (graphic.devicon) {
              return <Badge icon={graphic.link} text={technology} key={index} />;
            } else {
              return <Badge image={graphic.link} text={technology} key={index} />;
            }
          })}
        </div> */}
        <Badges tags={tags} />

        <p className={styles.title}>{title.toUpperCase()}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
}
