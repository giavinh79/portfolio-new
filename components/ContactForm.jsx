import styles from './contactForm.module.css';

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <div className={styles['input-wrapper']} style={{ marginRight: '1rem' }}>
          <label htmlFor='name' className={styles.text}>
            Name
          </label>
          <input type='text' id='name' className={styles.input}></input>
        </div>
        <div className={styles['input-wrapper']}>
          <label htmlFor='email' className={styles.text}>
            Email
          </label>
          <input type='email' id='email' className={styles.input}></input>
        </div>
      </div>
      <div className={styles['input-wrapper']}>
        <label htmlFor='message' className={styles.text}>
          Message
        </label>
        <textarea type='text' id='message' rows='4' className={styles.input} style={{ resize: 'none' }}></textarea>
      </div>
      <button type='submit' className={styles.button}>
        Send Message
      </button>
    </form>
  );
}
