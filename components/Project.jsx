import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PROJECTS_DATA } from '../constants';
import Badge from './Badge';
import styles from './card.module.css';

export default function Project({ project }) {
  const router = useRouter();
  const key = project.toUpperCase();

  /* Project Data */
  const { title, description, github, demo, numImages, imageName } = PROJECTS_DATA[key];

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

  const handleDotChange = (index) => {
    setIndex(index);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f8f8f8',
      }}
    >
      <div className={styles.card} style={{ marginTop: '0.5rem', marginBottom: 0 }}>
        <div className={styles.back}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
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
          <button
            className={styles['button']}
            onClick={() => router.push('/')}
            style={{ marginLeft: 'auto', backgroundColor: '#ac4a4f' }}
          >
            &larr; GO BACK
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className={styles['navigation-arrow']} onClick={handlePreviousPicture}>
            ❮
          </span>
          <img
            src={`/images/${imageName}${index}.PNG`}
            className={styles.image}
            style={{ pointerEvents: 'none', margin: '0 3rem' }}
            alt={`${project}${index}`}
          />
          <span className={styles['navigation-arrow']} onClick={handleNextPicture}>
            ❯
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1.5rem',
            borderBottom: '1px solid #e8e8e8',
            marginBottom: '1rem',
          }}
        >
          {renderDots()}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          <Badge icon='devicon-react-original' text='React' />
          <Badge image='/images/icons/adonisjs.svg' text='Adonis JS' />
          <Badge icon='devicon-postgresql-plain' text='PostgreSQL' />
        </div>

        <p
          style={{
            fontFamily: 'Montserrat',
            fontSize: '1.2rem',
            color: '#8f8f8f',
            margin: 0,
            fontWeight: 600,
            marginTop: '1rem',
          }}
        >
          {title.toUpperCase()}
        </p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
}
