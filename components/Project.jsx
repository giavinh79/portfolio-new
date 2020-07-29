import { useRouter } from 'next/router';
import { PROJECTS_DATA } from '../constants';
import Badge from './Badge';
import styles from './card.module.css';

export default function Project() {
  const router = useRouter();

  const title = PROJECTS_DATA['PLOP'].title;
  const description = PROJECTS_DATA['PLOP'].description;
  const image = '/images/plop1.PNG';
  const github = PROJECTS_DATA['PLOP'].github;
  const demo = PROJECTS_DATA['PLOP'].demo;

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
      <div className={styles.card} style={{ width: '90%', marginTop: '0.5rem', marginBottom: 0 }}>
        <div className={styles.back}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <div className={styles.github}>
              <button
                className={styles['demo-button']}
                onClick={() => window.open(github, '_blank') || window.location.replace(github)}
              >
                {/* <i className='fa fa-github' aria-hidden='true'></i> */}
                GITHUB
              </button>
              <a href={github} target='_blank' rel='noopener noreferrer'>
                {github.substring(8, github.length)}
              </a>
            </div>
            <div className={styles.demo}>
              <button
                className={styles['demo-button']}
                onClick={() => window.open(demo, '_blank') || window.location.replace(demo)}
              >
                {/* <i className='fa fa-globe' aria-hidden='true'></i> */}
                DEMO
              </button>
              <a href={demo} target='_blank' rel='noopener noreferrer'>
                {demo.substring(8, demo.length)}
              </a>
            </div>
          </div>
          <button className={styles['button']} onClick={() => router.push('/')} style={{ marginLeft: 'auto' }}>
            &larr; GO BACK
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className={styles['navigation-arrow']}>❮</span>
          <img src={image} className={styles.image} style={{ pointerEvents: 'none', margin: '0 1.5rem' }} />
          <span className={styles['navigation-arrow']}>❯</span>
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
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
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
