import styles from './skills.module.css';

export default function Skills() {
  return (
    // <div style={{ display: 'flex' }}>
    <>
      <div className={styles.grid}>
        {/* <div style={{ flex: 2 }}> */}
        <img className={styles.resume} src='/docs/0001-min.jpg' alt='Resume' loading='lazy' />
        {/* </div> */}
        <div style={{ display: 'flex', maxWidth: '52rem', marginTop: '2rem' }}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            {/* <code>Resume</code> */}
            <h3>React.js &rarr;</h3>
            <p>Placeholder text for the technology above</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Node.js &rarr;</h3>
            <p>Placeholder text for the technology above</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/master/examples' className={styles.card}>
            <h3>Java &rarr;</h3>
            <p>Placeholder text for the technology above</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>Python &rarr;</h3>
            <p>Placeholder text for the technology above</p>
          </a>
        </div>
      </div>
    </>
  );
}
