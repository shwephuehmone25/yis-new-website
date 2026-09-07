import { useState } from 'react';
import Button from '../../components/ui/Button';
import styles from './Mandalay.module.css';

export default function ContactForm() {
  const [draft, setDraft] = useState('');
  function prepareMessage(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = `${values.get('message')}\n\nFrom: ${values.get('firstName')} ${values.get('lastName')}\nEmail: ${values.get('email')}`;
    setDraft(`mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent(values.get('subject'))}&body=${encodeURIComponent(body)}`);
  }
  return <form className={styles.contactForm} onSubmit={prepareMessage} onChange={() => setDraft('')}>
    <h3>Send a message</h3>
    <div className={styles.nameFields}>
      <label>First name<input name="firstName" placeholder="First Name" autoComplete="given-name" required maxLength={80} /></label>
      <label>Last name<input name="lastName" placeholder="Last Name" autoComplete="family-name" required maxLength={80} /></label>
    </div>
    <label>Email<input name="email" type="email" placeholder="you@email.com" autoComplete="email" required /></label>
    <label>Subject<input name="subject" placeholder="Admissions enquiry..." required maxLength={160} /></label>
    <label>Message<textarea name="message" placeholder="Your message..." rows={5} required maxLength={3000} /></label>
    <Button type="submit">Send message</Button>
    {draft && <p className={styles.formStatus} role="status">Your message is ready, but has not been sent. <a href={draft}>Open your email app to send it.</a></p>}
  </form>;
}
