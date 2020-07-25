import { useState } from 'react';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form className={styles.form}>
      <p className={styles.title}>Contact Me</p>
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
          <input type='email' id='email' className={styles.input} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
      </div>
      <div className={styles['input-wrapper']}>
        <label htmlFor='message' className={styles.text}>
          Message
        </label>
        <textarea
          type='text'
          id='message'
          rows='4'
          className={styles.input}
          style={{ resize: 'none' }}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.buttonWrapper}>
        <button type='submit' className={styles.button} disabled={email.length === 0 || message.length === 0}>
          Send Message
        </button>
      </div>
    </form>
  );
}
