import { useState } from 'react';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form action='https://formspree.io/meqrvnjk' method='POST' className={styles.form}>
      <p className={styles.title}>Contact Me</p>
      <div style={{ display: 'flex', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
        <div className={styles['input-wrapper']}>
          <label htmlFor='name' className={styles.text}>
            Name
          </label>
          <input id='name' type='text' className={styles.input} name='name'></input>
        </div>
        <div className={styles['input-wrapper']}>
          <label htmlFor='email' className={styles.text}>
            Email
          </label>
          <input
            id='email'
            name='_replyto'
            type='email'
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
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
        <button
          type='submit'
          value='Send'
          className={styles.button}
          disabled={email.length === 0 || message.length === 0}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
