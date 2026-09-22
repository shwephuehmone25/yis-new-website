import Container from '../ui/Container';
import Brand from './Brand';
import styles from './Layout.module.css';
export default function Footer({ onAction }) {
  return <footer className={styles.footer} id="contacts"><Container><div className={styles.footerGrid}>
    <div><Brand compact /><p>A college preparatory group of schools established in 2004,<br /> serving Yangon and Mandalay with world-class<br /> international education.</p><em>“Progress Through Education”</em></div>
    <div><h2>Quick Links</h2><ul><li><a href="/#yangon">Yangon Campus</a></li><li><a href="/mandalay">Mandalay Campus</a></li><li><a href="/admissions">Admissions Process</a></li><li><a href="/mandalay#learning">Academic Learning</a></li><li><button onClick={() => onAction('Parent Portal')}>Parent Portal</button></li><li><button onClick={() => onAction('Alumni Association')}>Alumni Association</button></li></ul></div>
    <div><h2>Contacts</h2><address><strong>Yangon Campus</strong><span>Yangon, Myanmar</span><strong>Mandalay Campus</strong><span>Mandalay, Myanmar</span></address></div>
  </div><div className={styles.copyright}><span>© Yangon International School (YIS). All rights reserved.</span><span>Supported by ISS – International Schools Services</span></div></Container></footer>;
}
