import styles from './card.module.css';
import content from './content.module.css';
// import Badge from './Badge'; <Badge icon='devicon-react-original' text='React' />

export default function Project({ title, description, image }) {
  return (
    <div className={content.container}>
      <div className={styles.card} style={{ marginRight: '4rem' }}>
        <img src={image} className={styles.image} />
        <p className={styles.title}>{title}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}>
          {/* Open-source project management web application implemented with{' '}
        <span className={styles.technology}>React.js</span> for the frontend and{' '}
        <span className={styles.technology}>Adonis.js (Node.js framework)</span> as the REST API. Some features include
        administration hierarchy, chat, and task dashboards. */}
        </p>
        <button className={styles.button}>VIEW PROJECT &rarr;</button>
      </div>
    </div>
  );
}
