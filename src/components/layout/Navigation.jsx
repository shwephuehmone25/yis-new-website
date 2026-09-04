import { useState } from 'react';
import styles from './Layout.module.css';
const links = [['Home', 'home'], ['About Us', 'about'], ['Admissions', 'admissions'], ['Learning', 'learning'], ['Campuses', 'campuses'], ['Community', 'community'], ['Contacts', 'contacts']];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <nav aria-label="Main navigation" className={styles.navigation}>
    <button className={styles.menuToggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <ul id="main-navigation" className={`${styles.navLinks} ${open ? styles.open : ''}`}>
      {links.map(([label, id]) => <li key={id}><a href={`#${id}`} className={id === 'home' ? styles.active : ''} onClick={() => setOpen(false)}>{label}</a></li>)}
    </ul>
  </nav>;
}
